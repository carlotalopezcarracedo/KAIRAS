import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-6">
            <a href="/#inicio" className="inline-flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}logo-kairas-horizontal-blanco-480.webp`}
                alt="KAIRAS"
                className="h-10 w-auto"
                loading="lazy"
                decoding="async"
                width="200"
                height="40"
              />
            </a>
            <p className="text-slate-400 max-w-xs font-light">
              Menos tareas. Más tiempo. Mejor negocio. <br />
              Sistemas de automatización con IA.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block">Principal</span>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/">
                Inicio
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/servicios/">
                Servicios
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/contacto/">
                Contacto
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/blog/">
                Blog
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/calculadora-tareas-manuales/">
                Calculadora de tareas
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/prensa/">
                Prensa
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/sobre-carlota/">
                Sobre Carlota
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/faq/">
                FAQ
              </a>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block">Soluciones</span>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/automatizacion-procesos/">
                Automatización de procesos
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/automatizacion-empresas-galicia/">
                Empresas en Galicia
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/automatizacion-whatsapp-empresas/">
                WhatsApp automatizado
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/crm-pymes-seguimiento-clientes/">
                CRM y seguimiento
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/automatizacion-clinicas/">
                Automatización de clínicas
              </a>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block">Redes</span>
              <a
                className="block text-xs font-bold hover:text-cyber-purple transition-colors"
                href="https://www.linkedin.com/company/kairas-ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="block text-xs font-bold hover:text-cyber-purple transition-colors"
                href="https://www.instagram.com/kairas.ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 block">Legal</span>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/privacidad/">
                Privacidad
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/aviso-legal/">
                Aviso legal
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/cookies/">
                Cookies
              </a>
              <a className="block text-xs font-bold hover:text-cyber-purple transition-colors" href="/accesibilidad/">
                Accesibilidad
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 pb-10 flex flex-col items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}cartel-programa-emega.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-xl rounded-sm overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyber-purple"
            aria-label="Abrir el cartel del Programa EMEGA en PDF, en una nueva pestaña"
          >
            <img
              src={`${import.meta.env.BASE_URL}cartel-programa-emega.webp`}
              alt="Axudas do Programa EMEGA. Esta actuación está cofinanciada pola Unión Europea co obxectivo de fomentar o emprendemento feminino en Galicia. Xunta de Galicia, Unión Europea, Fondos Europeos e Xacobeo 2027."
              className="block w-full h-auto"
              loading="lazy"
              decoding="async"
              width="1786"
              height="1263"
            />
          </a>
          <a href={`${import.meta.env.BASE_URL}cartel-programa-emega.pdf`} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4">
            Ver cartel en tamaño completo (PDF)
          </a>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">© 2026 KAIRAS. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-purple animate-pulse" />
            <a href="/sobre-carlota/" rel="author" className="text-[10px] text-slate-400 hover:text-cyber-purple transition-colors font-mono uppercase">
              Carlota López — fundadora de KAIRAS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
