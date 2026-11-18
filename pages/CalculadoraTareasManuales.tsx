import React, { useMemo, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Plus, Trash2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { whatsappUrl, trackWhatsappClick, pushEvent } from '../lib/cta';

type Task = { id: number; name: string; minutes: number; perWeek: number; auto: number };

// Editable starting points. They are illustrative, not measured data.
const PRESETS: Record<string, { label: string; tasks: Omit<Task, 'id'>[] }> = {
  servicios: {
    label: 'Pyme de servicios',
    tasks: [
      { name: 'Responder consultas repetidas (WhatsApp, email)', minutes: 3, perWeek: 80, auto: 60 },
      { name: 'Pasar datos de formularios o emails al CRM o Excel', minutes: 4, perWeek: 30, auto: 80 },
      { name: 'Seguimiento de presupuestos enviados', minutes: 5, perWeek: 15, auto: 60 },
      { name: 'Registrar facturas recibidas', minutes: 3, perWeek: 25, auto: 70 },
      { name: 'Recordatorios de cobro', minutes: 5, perWeek: 5, auto: 80 },
    ],
  },
  clinica: {
    label: 'Clínica o centro de estética',
    tasks: [
      { name: 'Confirmar y recordar citas', minutes: 2, perWeek: 120, auto: 90 },
      { name: 'Responder consultas de precios y tratamientos', minutes: 4, perWeek: 50, auto: 60 },
      { name: 'Seguimiento de presupuestos no aceptados', minutes: 5, perWeek: 15, auto: 60 },
      { name: 'Reprogramar cancelaciones y cubrir huecos', minutes: 6, perWeek: 10, auto: 50 },
      { name: 'Pedir reseñas y revisiones', minutes: 3, perWeek: 20, auto: 80 },
    ],
  },
  asesoria: {
    label: 'Asesoría o despacho',
    tasks: [
      { name: 'Pedir documentación a clientes', minutes: 5, perWeek: 40, auto: 80 },
      { name: 'Descargar, renombrar y archivar documentos', minutes: 2, perWeek: 150, auto: 70 },
      { name: 'Controlar qué falta a cada cliente', minutes: 10, perWeek: 8, auto: 80 },
      { name: 'Responder «¿cómo va lo mío?»', minutes: 5, perWeek: 25, auto: 50 },
      { name: 'Alta de clientes nuevos', minutes: 45, perWeek: 2, auto: 60 },
    ],
  },
};

const WEEKS_PER_YEAR = 46;
const HOURS_PER_FTE = 1760;
const EMPLOYER_COST_FACTOR = 1.32;
const KAIRAS_FROM_PRICE = 890;

const num = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0, useGrouping: 'always' });
const dec = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 1, useGrouping: 'always' });
const eur = (v: number) => `${num.format(Math.round(v))} €`;

const FAQ = [
  {
    q: '¿Cómo se calcula el coste de una tarea manual?',
    a: 'Se multiplican los minutos que lleva cada vez por las veces que se hace a la semana, se pasa a horas y se multiplica por el coste por hora de quien la hace. Para el año se usan 46 semanas efectivas, descontando vacaciones y festivos.',
  },
  {
    q: '¿Qué coste por hora debo poner?',
    a: 'El coste para la empresa, no el salario neto: salario bruto anual más la Seguridad Social a cargo de la empresa (aproximadamente un 30-32 %), dividido entre las horas trabajadas al año (unas 1.760 en jornada completa). La calculadora lo estima si introduces el salario bruto.',
  },
  {
    q: '¿Qué porcentaje de una tarea se puede automatizar?',
    a: 'Depende de la tarea. Las que siguen reglas fijas (recordatorios, confirmaciones, pasar datos entre herramientas) suelen automatizarse casi por completo. Las que requieren criterio (responder dudas complejas, revisar casos) solo en parte, porque una persona sigue revisando. Los porcentajes por defecto son orientativos.',
  },
  {
    q: '¿El resultado es un presupuesto?',
    a: 'No. Es una estimación para ver el orden de magnitud y decidir por dónde empezar. Un proyecto real también tiene costes de herramientas y mantenimiento, y el ahorro se confirma midiendo antes y después.',
  },
];

let nextId = 1;
const withIds = (tasks: Omit<Task, 'id'>[]): Task[] => tasks.map((t) => ({ ...t, id: nextId++ }));

const clamp = (v: number, min: number, max: number) => (Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : min);

const CalculadoraTareasManuales: React.FC = () => {
  const [preset, setPreset] = useState('servicios');
  const [tasks, setTasks] = useState<Task[]>(() => withIds(PRESETS.servicios.tasks));
  const [hourly, setHourly] = useState(20);
  const [salary, setSalary] = useState('');
  const used = useRef(false);

  const markUsed = () => {
    if (used.current) return;
    used.current = true;
    pushEvent('calculator_used', { tool: 'tareas_manuales' });
  };

  const totals = useMemo(() => {
    const weeklyHours = tasks.reduce((sum, t) => sum + (t.minutes * t.perWeek) / 60, 0);
    const weeklyRecoverable = tasks.reduce((sum, t) => sum + ((t.minutes * t.perWeek) / 60) * (t.auto / 100), 0);
    const yearlyHours = weeklyHours * WEEKS_PER_YEAR;
    const yearlyRecoverable = weeklyRecoverable * WEEKS_PER_YEAR;
    const yearlyCost = yearlyHours * hourly;
    const yearlySaving = yearlyRecoverable * hourly;
    const monthlySaving = yearlySaving / 12;
    return {
      weeklyHours,
      yearlyHours,
      yearlyCost,
      yearlyRecoverable,
      yearlySaving,
      fte: yearlyRecoverable / HOURS_PER_FTE,
      paybackMonths: monthlySaving > 0 ? KAIRAS_FROM_PRICE / monthlySaving : null,
    };
  }, [tasks, hourly]);

  const update = (id: number, field: keyof Omit<Task, 'id'>, value: string) => {
    markUsed();
    setTasks((all) =>
      all.map((t) => {
        if (t.id !== id) return t;
        if (field === 'name') return { ...t, name: value };
        const n = Number(value.replace(',', '.'));
        const max = field === 'auto' ? 100 : 10000;
        return { ...t, [field]: clamp(n, 0, max) };
      }),
    );
  };

  const loadPreset = (key: string) => {
    markUsed();
    setPreset(key);
    setTasks(withIds(PRESETS[key].tasks));
  };

  const applySalary = (value: string) => {
    setSalary(value);
    const gross = Number(value.replace(/\./g, '').replace(',', '.'));
    if (gross > 0) {
      markUsed();
      setHourly(Math.round(((gross * EMPLOYER_COST_FACTOR) / HOURS_PER_FTE) * 10) / 10);
    }
  };

  const message = `Hola, Carlota. He usado la calculadora de tareas manuales: unas ${dec.format(totals.weeklyHours)} h a la semana (unos ${eur(totals.yearlyCost)} al año). Me gustaría ver qué se puede automatizar.`;

  const inputCls =
    'w-full bg-white/[0.04] border border-white/15 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyber-purple';

  return (
    <div className="relative min-h-[100svh]">
      <div className="hidden md:block fixed inset-0 grainy-overlay z-50 pointer-events-none" />
      <div className="fixed inset-0 mesh-gradient -z-10" />
      <Navbar />

      <main id="main-content" className="px-4 sm:px-6 pt-32 pb-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-cyber-purple mb-6">Herramienta gratuita</p>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-[0.95] mb-6">
            Calculadora de horas y coste de las tareas manuales
          </h1>
          <p className="text-lg text-slate-300 font-light leading-relaxed max-w-3xl mb-10">
            Calcula cuántas horas y cuánto dinero dedica tu empresa cada año a tareas repetitivas, y qué parte podrías
            recuperar automatizándolas. Elige un ejemplo, ajusta los minutos y las veces por semana con tus datos reales
            y verás el resultado al momento. No pedimos ningún dato y no se guarda nada.
          </p>

          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Cargar un ejemplo">
            {Object.entries(PRESETS).map(([key, p]) => (
              <button
                key={key}
                type="button"
                onClick={() => loadPreset(key)}
                aria-pressed={preset === key}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors ${
                  preset === key
                    ? 'bg-cyber-purple text-white border-cyber-purple'
                    : 'border-white/15 text-slate-300 hover:border-cyber-purple/60'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
            <section aria-labelledby="tareas" className="space-y-4">
              <h2 id="tareas" className="text-xl font-black uppercase tracking-tight">Tus tareas</h2>
              <p className="text-sm text-slate-400">
                Los valores son un ejemplo orientativo: cámbialos por los de tu negocio.
              </p>

              {tasks.map((t, i) => (
                <div key={t.id} className="glass-card rounded-2xl border-white/10 p-4 sm:p-5 space-y-3">
                  <div className="flex gap-3 items-center">
                    <label className="sr-only" htmlFor={`name-${t.id}`}>Tarea {i + 1}</label>
                    <input
                      id={`name-${t.id}`}
                      className={`${inputCls} font-bold`}
                      value={t.name}
                      onChange={(e) => update(t.id, 'name', e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setTasks((all) => all.filter((x) => x.id !== t.id))}
                      className="shrink-0 p-2 text-slate-400 hover:text-white"
                      aria-label={`Quitar la tarea ${t.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <label className="text-[11px] uppercase tracking-wider text-slate-400 space-y-1">
                      <span className="block">Minutos cada vez</span>
                      <input type="number" inputMode="decimal" min={0} className={inputCls} value={t.minutes} onChange={(e) => update(t.id, 'minutes', e.target.value)} />
                    </label>
                    <label className="text-[11px] uppercase tracking-wider text-slate-400 space-y-1">
                      <span className="block">Veces por semana</span>
                      <input type="number" inputMode="numeric" min={0} className={inputCls} value={t.perWeek} onChange={(e) => update(t.id, 'perWeek', e.target.value)} />
                    </label>
                    <label className="text-[11px] uppercase tracking-wider text-slate-400 space-y-1">
                      <span className="block">% automatizable</span>
                      <input type="number" inputMode="numeric" min={0} max={100} step={10} className={inputCls} value={t.auto} onChange={(e) => update(t.id, 'auto', e.target.value)} />
                    </label>
                  </div>
                  <p className="text-xs text-slate-400">
                    {dec.format((t.minutes * t.perWeek) / 60)} h/semana · {eur(((t.minutes * t.perWeek) / 60) * WEEKS_PER_YEAR * hourly)} al año
                  </p>
                </div>
              ))}

              <button
                type="button"
                onClick={() => {
                  markUsed();
                  setTasks((all) => [...all, { id: nextId++, name: 'Nueva tarea', minutes: 5, perWeek: 10, auto: 50 }]);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 text-xs font-bold uppercase tracking-wider hover:border-cyber-purple/60"
              >
                <Plus className="w-4 h-4" /> Añadir tarea
              </button>

              <div className="glass-card rounded-2xl border-white/10 p-4 sm:p-5 grid sm:grid-cols-2 gap-4">
                <label className="text-[11px] uppercase tracking-wider text-slate-400 space-y-1">
                  <span className="block">Coste por hora para la empresa (€)</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    className={inputCls}
                    value={hourly}
                    onChange={(e) => {
                      markUsed();
                      setHourly(clamp(Number(e.target.value), 0, 1000));
                    }}
                  />
                </label>
                <label className="text-[11px] uppercase tracking-wider text-slate-400 space-y-1">
                  <span className="block">O calcúlalo desde el salario bruto anual (€)</span>
                  <input type="text" inputMode="numeric" placeholder="Ej.: 22000" className={inputCls} value={salary} onChange={(e) => applySalary(e.target.value)} />
                </label>
                <p className="sm:col-span-2 text-xs text-slate-400 leading-relaxed">
                  Coste por hora ≈ salario bruto × 1,32 (Seguridad Social a cargo de la empresa) ÷ 1.760 horas al año. Es una aproximación: usa tu dato real si lo tienes.
                </p>
              </div>
            </section>

            <aside aria-labelledby="resultado" className="lg:sticky lg:top-28 space-y-4">
              <div className="rounded-2xl border border-cyber-purple/40 bg-cyber-purple/[0.08] p-6" aria-live="polite">
                <h2 id="resultado" className="text-xs font-bold uppercase tracking-widest text-cyber-cyan mb-5">Resultado</h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-slate-400">Horas en tareas manuales</dt>
                    <dd className="text-2xl font-black text-white">
                      {dec.format(totals.weeklyHours)} h/semana
                      <span className="block text-sm font-bold text-slate-300">{num.format(totals.yearlyHours)} h al año</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">Coste anual de esas horas</dt>
                    <dd className="text-2xl font-black text-white">{eur(totals.yearlyCost)}</dd>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <dt className="text-xs text-slate-400">Recuperable automatizando</dt>
                    <dd className="text-3xl font-black text-cyber-cyan">
                      {eur(totals.yearlySaving)}
                      <span className="block text-sm font-bold text-slate-300">
                        {num.format(totals.yearlyRecoverable)} h al año · {dec.format(totals.fte)} personas a jornada completa
                      </span>
                    </dd>
                  </div>
                  {totals.paybackMonths !== null && (
                    <div>
                      <dt className="text-xs text-slate-400">Un proyecto de {num.format(KAIRAS_FROM_PRICE)} € se recuperaría en</dt>
                      <dd className="text-lg font-black text-white">
                        {totals.paybackMonths < 1 ? 'menos de 1 mes' : `${dec.format(totals.paybackMonths)} meses`}
                      </dd>
                    </div>
                  )}
                </dl>
                <p className="mt-5 text-[11px] text-slate-400 leading-relaxed">
                  Estimación orientativa con {WEEKS_PER_YEAR} semanas efectivas al año. No incluye herramientas ni mantenimiento.
                </p>
              </div>

              <a
                href={whatsappUrl('calculadora', message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsappClick('calculadora', 'result')}
                className="flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Revisar mi resultado con Carlota
              </a>
              <p className="text-xs text-slate-400 text-center">Se abre WhatsApp con tu resultado. Te responde una persona.</p>
            </aside>
          </div>

          <section className="mt-20 max-w-3xl space-y-5 text-slate-300 font-light leading-relaxed">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">Cómo se calcula</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong className="text-white">Horas por semana</strong> = minutos por vez × veces por semana ÷ 60, sumando todas las tareas.</li>
              <li><strong className="text-white">Horas al año</strong> = horas por semana × {WEEKS_PER_YEAR} semanas (se descuentan vacaciones y festivos).</li>
              <li><strong className="text-white">Coste anual</strong> = horas al año × coste por hora para la empresa.</li>
              <li><strong className="text-white">Recuperable</strong> = la parte de cada tarea que se puede automatizar, según el porcentaje que indiques.</li>
              <li><strong className="text-white">Personas a jornada completa</strong> = horas recuperables ÷ {num.format(HOURS_PER_FTE)} horas, lo que trabaja al año una persona a tiempo completo.</li>
            </ol>
            <p>
              El tiempo recuperado no siempre se traduce en menos gasto: lo habitual es que el equipo lo dedique a atender
              mejor, vender más o dejar de hacer horas extra. Por eso conviene medir también lo que mejora (tiempo de
              respuesta, presupuestos aceptados, cobros a tiempo), como explicamos en{' '}
              <a href="/blog/cuanto-cuesta-automatizar-procesos-pyme/" className="text-cyber-purple underline underline-offset-4">cuánto cuesta automatizar y cómo calcular el ROI</a>.
            </p>
            <p>
              Si no sabes qué tarea elegir primero, la que más horas suma no siempre es la mejor: cuenta también cuánto falla
              y lo fácil que es de automatizar. Lo explicamos en{' '}
              <a href="/blog/como-saber-que-proceso-automatizar-primero/" className="text-cyber-purple underline underline-offset-4">cómo saber qué proceso automatizar primero</a>{' '}
              y en la guía de{' '}
              <a href="/blog/automatizacion-tareas-administrativas-ia-pymes/" className="text-cyber-purple underline underline-offset-4">automatización de tareas administrativas</a>.
            </p>
          </section>

          <section aria-labelledby="preguntas-frecuentes" className="mt-16 max-w-3xl space-y-6">
            <h2 id="preguntas-frecuentes" className="text-2xl font-black uppercase tracking-tight">Preguntas frecuentes</h2>
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                <p className="text-slate-300 font-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </section>

          <div className="mt-16 pt-12 border-t border-white/10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">¿Quieres medirlo con datos reales?</p>
            <p className="text-slate-300 font-light leading-relaxed mb-6">
              En el diagnóstico de KAIRAS medimos estas horas en tu negocio, vemos dónde se pierden clientes o cobros y
              priorizamos qué automatizar primero.
            </p>
            <a
              href="/contacto/"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
            >
              Pedir diagnóstico <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { FAQ as CALCULATOR_FAQ };
export default CalculadoraTareasManuales;
