# Ejemplo — Auditoría SEO de una página existente

**Solicitud original:** "Audita la página de inicio de kairas.es y dime qué mejorar para SEO"

**Nota:** Este es un ejemplo simulado. Los datos de la página auditada son hipotéticos para ilustrar el formato y nivel de profundidad esperado de una auditoría real.

---

## AUDITORÍA SEO — kairas.es (Página de inicio)

**Fecha:** 2026-04-28
**URL auditada:** https://www.kairas.es/
**Auditada por:** kairas-seo-architect skill

---

### RESUMEN EJECUTIVO

La página de inicio de KAIRAS transmite bien la propuesta de valor de marca pero tiene oportunidades significativas de mejora SEO. El título SEO y el H1 actuales son demasiado genéricos para posicionar en búsquedas con intención local o sectorial. La estructura de headings no prioriza las keywords comerciales principales. Hay carencia de enlazado interno hacia las páginas de servicio y el schema no está implementado. Las mejoras propuestas son de prioridad alta y media y no requieren cambios de diseño.

---

### PROBLEMAS DETECTADOS

#### PRIORIDAD ALTA

- [ ] **SEO title genérico** — Título actual tipo "KAIRAS | Automatización e IA" sin keyword local ni diferenciación. Impacto: CTR bajo en SERP local, dificultad para posicionar en búsquedas con "Galicia" o "Pontevedra". **Solución:** Incluir término local y propuesta de valor en el title.

- [ ] **H1 sin keyword principal** — El H1 actual es un claim de marca ("Recupera tiempo. Ordena tu negocio.") sin ninguna keyword posicionable. Impacto: Google no puede identificar la keyword temática de la página. **Solución:** Combinar el claim con una keyword o crear un H2 inmediatamente debajo que incluya la keyword principal.

- [ ] **Sin schema implementado** — No hay datos estructurados (LocalBusiness, ProfessionalService). Impacto: se pierden rich results potenciales y señales de SEO local. **Solución:** Implementar schema ProfessionalService + LocalBusiness con zona de cobertura.

- [ ] **Meta description no optimizada** — La meta description actual no incluye keywords y no tiene CTA implícito. Impacto: CTR bajo desde la SERP. **Solución:** Reescribir con keyword principal + beneficio claro + CTA.

#### PRIORIDAD MEDIA

- [ ] **Enlazado interno insuficiente desde la home** — La home no enlaza de forma explícita a las páginas de servicio principales con anchor text descriptivo. Impacto: las páginas de servicio no reciben autoridad de la home. **Solución:** Añadir sección de servicios con enlaces explícitos y anchor texts con keywords.

- [ ] **Ausencia de mención geográfica visible** — La página no menciona "Galicia" en ningún lugar del contenido visible. Impacto: dificulta el posicionamiento en búsquedas locales. **Solución:** Incluir mención natural de la zona de trabajo en el copy de la home.

- [ ] **Alt text de imágenes vacío o genérico** — Las imágenes decorativas tienen ALT vacío (correcto) pero las imágenes con contenido real no tienen ALT descriptivo con keyword. **Solución:** Añadir ALT descriptivo a imágenes con contenido informativo.

#### PRIORIDAD BAJA

- [ ] **Tabla de contenidos** — No aplica en home, pero si el scroll es largo, considera anclas internas para las secciones principales.

- [ ] **Open Graph / Social meta** — Revisar que og:title y og:description estén configuradas correctamente para compartir en redes.

---

### ANÁLISIS DETALLADO

#### Intención de búsqueda

La página de inicio debería posicionar para las keywords más amplias y comerciales de KAIRAS:
- "automatización para empresas Galicia"
- "agencia IA Galicia"  
- "automatización de procesos Pontevedra"

La intención es principalmente **comercial + local**: el usuario busca un proveedor de automatización en Galicia. La página actualmente no ataca estas intenciones de forma explícita.

---

#### Título SEO

**Actual (hipotético):**
`KAIRAS | Automatización e Inteligencia Artificial para Empresas`
*(68 caracteres — demasiado largo, se trunca en SERP)*

**Análisis:**
- Demasiado largo: se trunca en Google (máximo 60 caracteres)
- No incluye referencia geográfica
- "Inteligencia Artificial" ocupa mucho espacio sin aportar diferenciación
- El orden no prioriza la keyword

**Versión mejorada (58 caracteres):**
`Automatización e IA para pymes en Galicia | KAIRAS`

---

#### H1

**Actual (hipotético):**
`Recupera tiempo. Ordena tu negocio.`

**Análisis:**
- Potente como claim de marca. Funciona para conversión.
- No posiciona: no tiene ninguna keyword que Google pueda leer como señal temática.
- Solución: mantener el claim como H1 visual (puede ir en un elemento H1 de diseño) y añadir un subtítulo/párrafo inmediatamente debajo con la keyword de forma natural, o reformular ligeramente.

**Opción A — H1 reformulado con keyword:**
`Automatización e IA para pymes en Galicia que recuperan tiempo y ordenan su operativa`

**Opción B — Mantener H1 de marca + párrafo con keyword:**
H1: `Recupera tiempo. Ordena tu negocio.`  
Párrafo: `En KAIRAS ayudamos a pymes de servicios en Galicia a eliminar tareas manuales, conectar sus herramientas y ordenar sus procesos con automatización e IA aplicada.`

*(La opción B respeta más el diseño existente si el H1 visual es importante para la marca)*

---

#### Meta Description

**Actual (hipotética):**
`KAIRAS es una agencia de automatización e inteligencia artificial para empresas. Descubre cómo podemos ayudarte.`

**Análisis:**
- Empieza con el nombre de marca (no el beneficio)
- "Descubre cómo podemos ayudarte" es genérico y no activa el clic
- No incluye referencia geográfica
- No transmite la propuesta de valor específica

**Versión mejorada (149 caracteres):**
`Pymes de servicios en Galicia que quieren recuperar tiempo y ordenar sus procesos. Automatización e IA aplicada con criterio, sin humo.`

---

#### Slug

`/` — Correcto. La home no necesita slug.

---

#### Estructura H2/H3

**Análisis hipotético:**
Posible estructura actual en la home:
- H2: "Lo que hacemos"
- H2: "Para quién"
- H2: "Cómo trabajamos"
- H2: "Habla con nosotros"

**Problema:** Ningún H2 incluye keywords posicionables.

**Mejora sugerida:**
- H2: `Automatización e IA para pymes de servicios en Galicia`
- H2: `Para quién trabajamos` → Mantener pero añadir párrafo intro con keywords de sector
- H2: `Cómo trabajamos` → Puede tener una variación: "Cómo analizamos e implementamos la automatización en tu negocio"
- H2: `¿Tu empresa está en Galicia? Hablemos` → CTA section con mención geográfica

---

#### Contenido

**¿Responde bien a la intención?**
Parcialmente. El copy transmite la propuesta de valor pero no ataca keywords de búsqueda. Un usuario que llega desde Google sin conocer la marca puede no entender exactamente en qué consiste el servicio ni a quién va dirigido.

**Mejoras concretas:**
1. Añadir una frase que mencione "Galicia" o zona de trabajo en el primer bloque visible
2. Mencionar explícitamente los sectores principales: clínicas, academias, inmobiliarias
3. Añadir un párrafo de cuerpo que incluya keywords de forma natural

---

#### Canibalización

Sin riesgo en la home. La home compite por keywords amplias; las páginas de servicio compiten por keywords específicas. No hay solapamiento si están bien diferenciadas.

---

#### Enlazado interno

**Situación hipotética:** La home tiene solo el menú de navegación con enlaces. No hay enlaces en el cuerpo de texto o en secciones de contenido.

**Mejoras:**
- Sección de servicios con enlace explícito a `/automatizacion-para-clinicas`, `/automatizacion-whatsapp-empresas`, `/crm-automatizacion-pymes`
- Anchor text descriptivo: "Automatización para clínicas" no "Ver más"
- Enlace a blog o contenidos recientes para distribuir autoridad

---

#### CTA

**Situación hipotética:** Botón "Contáctanos" al final.

**Análisis:** Genérico. No conecta con la situación del usuario.

**Versión mejorada:**
`Analiza con nosotros qué procesos automatizar en tu negocio → Agenda una llamada`

O en versión más directa:
`¿Tu equipo gestiona demasiado a mano? Hablamos.`

---

#### Schema

**Situación:** Sin schema.

**Implementar:**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "KAIRAS",
  "url": "https://www.kairas.es/",
  "description": "Automatización e IA aplicada para pymes de servicios en Galicia.",
  "areaServed": ["Galicia", "Pontevedra", "Vigo", "Santiago de Compostela"],
  "knowsAbout": ["automatización de procesos", "IA para empresas", "optimización operativa"]
}
```

---

### PROPUESTA REESCRITA — Elementos clave

**SEO Title:**
`Automatización e IA para pymes en Galicia | KAIRAS`

**H1 (opción recomendada):**
`Automatización e IA para pymes de servicios en Galicia`

**Subtítulo / párrafo intro:**
`En KAIRAS ayudamos a clínicas, academias, inmobiliarias y pymes de servicios en Galicia a recuperar tiempo, eliminar tareas manuales y ordenar sus procesos con automatización e IA aplicada con criterio.`

**Meta description:**
`Pymes de servicios en Galicia que quieren recuperar tiempo y ordenar sus procesos. Automatización e IA aplicada con criterio, sin humo.`

**Slug:** `/` (sin cambio)

**Estructura H2 recomendada para la home:**
```
H2: Automatización e IA para pymes de servicios en Galicia
H2: Para quién trabajamos [con mención de sectores]
H2: Cómo analizamos e implementamos la automatización en tu negocio
H2: ¿Tu empresa está en Galicia? Hablemos sin compromiso
```

---

### PRIORIDAD DE IMPLEMENTACIÓN

| Cambio | Impacto | Esfuerzo | Prioridad |
|--------|---------|----------|-----------|
| Reescribir SEO title | Alto | Mínimo (5 min) | Inmediata |
| Reescribir meta description | Alto | Mínimo (5 min) | Inmediata |
| Ajustar H1 o añadir párrafo con keyword | Alto | Bajo | Esta semana |
| Implementar schema LocalBusiness | Alto | Medio (30 min) | Esta semana |
| Añadir enlazado interno en secciones | Medio | Bajo | Próxima semana |
| Añadir mención geográfica en copy | Medio | Bajo | Próxima semana |
| Mejorar ALT text de imágenes | Bajo | Bajo | Próximo mes |
