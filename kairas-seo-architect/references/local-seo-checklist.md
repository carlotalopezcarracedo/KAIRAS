# Checklist SEO Local — KAIRAS

KAIRAS opera principalmente en Galicia. El SEO local es una de las palancas más potentes porque la competencia en búsquedas geolocalizadas es mucho menor que en keywords nacionales genéricas, y la intención de contratar es más alta.

---

## 1. Google Business Profile (GBP)

### Configuración básica
- [ ] Perfil reclamado y verificado
- [ ] Nombre exacto: el nombre legal o comercial oficial (sin añadir keywords artificialmente: "KAIRAS – Automatización IA Galicia" puede ser aceptable si es el nombre real)
- [ ] Categoría principal correcta: Technology Consultant / IT Consulting / Business Management Consultant
- [ ] Categorías secundarias añadidas: Software Company, Business Management Consultant, IT Consultant
- [ ] Dirección física si existe (o zona de servicio si no hay sede física)
- [ ] Zona de servicio configurada: Galicia, Pontevedra, Vigo, Santiago de Compostela, A Coruña, A Estrada
- [ ] Teléfono actualizado y correcto
- [ ] URL del sitio web: https://www.kairas.es/
- [ ] Horario de atención real (no dejar en blanco)

### Descripción
- [ ] Descripción rellenada (hasta 750 caracteres)
- [ ] Incluye keywords de forma natural: automatización, IA, pymes, Galicia, procesos
- [ ] Menciona los sectores principales: clínicas, academias, inmobiliarias, pymes de servicios
- [ ] Sin keyword stuffing
- [ ] Tono KAIRAS: directo, sin humo

**Ejemplo de descripción GBP:**
> En KAIRAS ayudamos a pymes de servicios en Galicia a recuperar tiempo y ordenar sus procesos mediante automatización e IA aplicada. Trabajamos con clínicas, academias, inmobiliarias y asesorías que quieren eliminar tareas manuales, ordenar su seguimiento de clientes y conectar sus herramientas. Sin humo, sin tecnicismos, con resultados reales.

### Contenido del perfil
- [ ] Fotos reales añadidas (equipo, oficina si existe, trabajo real — no stock genérico)
- [ ] Logo en alta calidad subido
- [ ] Al menos 5 fotos publicadas
- [ ] Servicios configurados en GBP (nombre + descripción breve)
- [ ] Preguntas y respuestas (Q&A) rellenadas con las preguntas más frecuentes

### Publicaciones (Posts GBP)
- [ ] Al menos 1–2 publicaciones por mes
- [ ] Publicaciones sobre casos reales, resultados, sectores trabajados
- [ ] Cada publicación con imagen y CTA (llamar, visitar web, contactar)
- [ ] No publicar solo sobre tecnología: publicar sobre resultados y problemas resueltos

### Reseñas
- [ ] Solicitar reseñas activamente a clientes satisfechos (con enlace directo al GBP)
- [ ] Responder a todas las reseñas, positivas y negativas
- [ ] Respuesta a reseñas positivas: personalizada, no siempre la misma
- [ ] Respuesta a reseñas negativas: tranquila, propositiva, sin defensiva

---

## 2. NAP — Consistencia de datos

NAP = Name, Address, Phone. Es crítico que estos datos sean idénticos en todos los sitios donde aparezca KAIRAS.

### Verificar consistencia en:
- [ ] Kairas.es (footer, página de contacto)
- [ ] Google Business Profile
- [ ] Bing Places (si está registrado)
- [ ] Apple Maps / Yelp si aplica
- [ ] Directorios de empresas locales gallegas o de Pontevedra
- [ ] Linkedin (página de empresa)
- [ ] Cualquier directorio o web de terceros donde aparezca KAIRAS

**Formato correcto a usar siempre:**
```
KAIRAS
[Dirección completa si existe]
[Ciudad, Provincia, CP]
[Teléfono en formato: +34 XXX XXX XXX]
https://www.kairas.es/
```

---

## 3. Páginas de servicio por zona

Para cada zona geográfica prioritaria donde KAIRAS tenga clientes o quiera posicionarse, considerar una página específica.

### Criterio para crear una página local

Crear una página local solo si:
- Hay intención de búsqueda real para esa zona (hay gente buscando "automatización [zona]")
- KAIRAS tiene o puede tener clientes allí
- El contenido puede ser genuinamente diferente (casos locales, contexto real de la zona)

**No crear páginas locales que sean copias con solo el nombre de ciudad cambiado.** Eso es thin content y Google lo penaliza.

### Páginas locales recomendadas para KAIRAS

| Página | URL | Keyword objetivo | Prioridad |
|--------|-----|-----------------|-----------|
| Automatización Galicia | /automatizacion-empresas-galicia | automatización empresas Galicia | Máxima |
| Automatización Pontevedra | /automatizacion-pontevedra | automatización Pontevedra | Muy alta |
| Automatización Vigo | /automatizacion-vigo | automatización empresas Vigo | Alta |
| Automatización Santiago | /automatizacion-santiago-de-compostela | automatización Santiago | Alta |
| Automatización A Coruña | /automatizacion-a-coruna | automatización A Coruña | Media |
| IA para pymes Galicia | /ia-pymes-galicia | IA para pymes Galicia | Alta |

### Qué debe tener cada página local para no ser thin content
- Nombre del problema en esa zona con contexto real (si es posible)
- Sectores más comunes en esa zona o casos de tipo de cliente local
- Datos o contexto local genuino si existen
- CTA específico con mención de la zona
- Schema LocalBusiness con la zona

---

## 4. Schema para SEO local

### Schema LocalBusiness básico para kairas.es

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "KAIRAS",
  "url": "https://www.kairas.es/",
  "telephone": "[teléfono]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pontevedra",
    "addressRegion": "Galicia",
    "addressCountry": "ES"
  },
  "areaServed": ["Galicia", "Pontevedra", "Vigo", "Santiago de Compostela", "A Coruña"],
  "description": "Automatización e IA aplicada para pymes de servicios en Galicia.",
  "knowsAbout": ["automatización de procesos", "inteligencia artificial para empresas", "optimización operativa"]
}
```

- [ ] Schema LocalBusiness o ProfessionalService añadido en la home o página de contacto
- [ ] Schema Service en páginas de servicio con zona de cobertura
- [ ] Validar con Google Rich Results Test

---

## 5. Contenido local natural

El contenido local funciona cuando es genuino, no cuando se fuerza. Criterios:

### Buenas prácticas de contenido local para KAIRAS
- [ ] Mencionar casos de clientes reales de Galicia (con permiso o sin identificar el nombre)
- [ ] Usar ejemplos de tipos de negocio frecuentes en la zona (ej: clínicas de estética en Pontevedra, academias en Santiago)
- [ ] En posts, mencionar la zona de forma natural cuando el ejemplo lo justifica
- [ ] No mencionar la zona en cada párrafo: suena artificial y malo para el lector
- [ ] Los posts del blog no necesitan ser locales todos — la localización se hace en páginas de servicio y GBP

### Lo que no hacer
- [ ] No repetir "en Galicia" o "en Pontevedra" en cada párrafo
- [ ] No crear páginas locales idénticas (Pontevedra, Vigo, Santiago con el mismo texto)
- [ ] No añadir la ciudad al título de posts que no son locales
- [ ] No crear páginas locales para zonas donde KAIRAS no tiene presencia real

---

## 6. Menciones y backlinks locales

Las menciones (citas) en webs locales refuerzan la autoridad local de KAIRAS.

### Fuentes a trabajar progresivamente
- Directorios de empresas de Galicia o Pontevedra
- Cámaras de comercio (Pontevedra, Vigo, A Coruña si tienen directorio)
- Asociaciones de empresarios locales
- Medios digitales locales si cubre eventos o noticias del sector
- Colaboraciones con otras empresas locales no competidoras (inmobiliarias, clínicas, academias) que mencionen a KAIRAS en sus blogs o webs
- Ponencias, webinars o charlas locales que generen mención en organizadores

### Criterio para backlinks locales
- Priorizar calidad sobre cantidad
- Un enlace desde una cámara de comercio o asociación local vale más que 10 de directorios de dudosa calidad
- Solo buscar menciones que sean genuinas: KAIRAS colabora, aparece en prensa, da una charla, tiene un caso publicado

---

## 7. Monitorización SEO local

- [ ] Google Search Console conectado a kairas.es
- [ ] Monitorizar impresiones y clics de queries con término geográfico
- [ ] Monitorizar posición media para keywords locales prioritarias
- [ ] Revisar GBP Insights mensualmente: búsquedas directas vs. de descubrimiento, acciones del perfil
- [ ] Revisar reseñas al menos semanalmente
- [ ] Monitorizar competidores locales en GBP y en SERP para las keywords de mayor prioridad
