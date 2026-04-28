# Checklist RankMath + WordPress — KAIRAS

Checklist completo para revisar antes de publicar cualquier página o post en kairas.es.
Usar junto con el brief SEO del contenido.

---

## CONFIGURACIÓN EN RANKMATH

### Focus Keyword
- [ ] Focus keyword configurada en el campo de RankMath
- [ ] La focus keyword es la keyword principal del brief (una sola)
- [ ] La focus keyword está en el título SEO
- [ ] La focus keyword está en la meta description
- [ ] La focus keyword está en el H1
- [ ] La focus keyword aparece en los primeros 100 palabras del contenido
- [ ] La focus keyword aparece en al menos un H2
- [ ] La focus keyword aparece en el slug/permalink
- [ ] La focus keyword tiene una densidad natural (no forzada, aprox. 1–2%)

### Keywords adicionales en RankMath
- [ ] Añadir 2–3 keywords secundarias del brief en el campo "Secondary Focus Keyword" de RankMath Pro (si disponible)

---

## SEO TITLE (Título SEO)

- [ ] Máximo 60 caracteres (preferiblemente entre 50–60)
- [ ] Incluye la focus keyword (idealmente al inicio)
- [ ] Es distinto del H1 si tiene sentido (puede ser levemente diferente)
- [ ] No está truncado en la vista previa de RankMath
- [ ] No usa caracteres especiales que puedan romperse en SERP
- [ ] Incluye el nombre de marca si aplica: "KAIRAS — [título]" o "[título] | KAIRAS"
- [ ] Es atractivo para el CTR: genera curiosidad o claridad, no es genérico

**Ejemplo correcto:**
`Automatización para clínicas en Galicia | KAIRAS`

**Ejemplo incorrecto:**
`Servicios de automatización inteligente con IA para el sector sanitario y clínicas en Galicia - KAIRAS Automatización`

---

## PERMALINK / SLUG

- [ ] Solo minúsculas
- [ ] Sin caracteres especiales (ñ, acentos, símbolos)
- [ ] Sin preposiciones superfluas ("de", "para", "en" — solo cuando son parte de la keyword real)
- [ ] Corto y descriptivo: máximo 4–5 palabras
- [ ] Incluye la keyword principal o una versión limpia de ella
- [ ] Sin fechas si el contenido es evergreen
- [ ] Configurado manualmente (no generado automáticamente desde el título)
- [ ] Sin trailing slash si el sitio no lo usa consistentemente

**Ejemplo correcto:** `/automatizacion-clinicas-galicia`
**Ejemplo incorrecto:** `/como-automatizar-tu-clinica-estetica-con-ia-en-galicia-2024`

---

## META DESCRIPTION

- [ ] Máximo 155 caracteres (idealmente entre 140–155)
- [ ] Incluye la focus keyword de forma natural
- [ ] Describe claramente qué encontrará el lector
- [ ] Tiene un CTA implícito o elemento de atracción (no "haz clic aquí")
- [ ] No está truncada en la vista previa de RankMath
- [ ] Es única (no la misma que otra página del sitio)
- [ ] No empieza con el nombre de marca (empieza con el beneficio o el problema)

**Ejemplo correcto:**
`¿Tu clínica gestiona citas a mano? Descubre cómo automatizar recordatorios, WhatsApp y seguimiento sin cambiar todo tu sistema.`

**Ejemplo incorrecto:**
`KAIRAS ofrece servicios de automatización con IA para clínicas en Galicia. Somos expertos en transformación digital.`

---

## CONTENIDO — ESTRUCTURA

### H1
- [ ] Contiene la focus keyword o variación cercana
- [ ] Es diferente al SEO title (puede serlo si añade contexto)
- [ ] Hay solo un H1 en toda la página
- [ ] Es claro y describe exactamente de qué trata el contenido

### H2 y H3
- [ ] Al menos 2 H2 en posts de más de 500 palabras
- [ ] Al menos uno de los H2 incluye la focus keyword o keyword secundaria
- [ ] Los H2 son escaneables: el lector puede entender la estructura leyendo solo los H2
- [ ] Los H3 son subtemas reales, no relleno
- [ ] No se mezcla H2 y H3 de forma incoherente (H3 siempre dentro de un H2)

### Contenido
- [ ] El primer párrafo incluye la focus keyword de forma natural
- [ ] El contenido responde directamente a la intención de búsqueda
- [ ] No hay párrafos de relleno ni introducciones largas sin valor
- [ ] El contenido tiene ejemplos concretos (preferiblemente de pymes de servicios)
- [ ] Hay al menos una lista (ul o ol) si el contenido lo permite
- [ ] No hay keyword stuffing
- [ ] Tono KAIRAS: directo, sin humo, sin tecnicismos innecesarios

---

## IMÁGENES

- [ ] Todas las imágenes tienen ALT text
- [ ] El ALT text de la imagen principal incluye la focus keyword o una variación
- [ ] El ALT text es descriptivo (no "imagen1.jpg" ni el nombre del archivo)
- [ ] Las imágenes están comprimidas (< 150KB preferiblemente, < 300KB máximo)
- [ ] Formato WebP si el tema lo soporta
- [ ] El nombre de archivo es descriptivo y en minúsculas: `automatizacion-clinica-galicia.webp`
- [ ] No hay imágenes rotas

---

## ENLACES

### Internos
- [ ] Al menos 2 enlaces internos en posts, al menos 3 en páginas de servicio
- [ ] Los anchor text son descriptivos y naturales
- [ ] Al menos un enlace interno apunta a la página de servicio más relevante o a /contacto
- [ ] Al menos un enlace apunta a la página pilar del silo
- [ ] No hay enlaces a páginas 404 o redirigidas

### Externos (si los hay)
- [ ] Solo a fuentes de autoridad real (estudios, datos, webs de referencia)
- [ ] Se abre en nueva pestaña (`target="_blank"`)
- [ ] Tiene `rel="noopener"` por seguridad
- [ ] No apunta a competidores directos sin motivo claro

---

## SCHEMA / DATOS ESTRUCTURADOS

- [ ] Schema configurado en RankMath (artículo, servicio, FAQ, etc.)
- [ ] Tipo de schema adecuado al tipo de contenido:
  - Posts informativos: `Article` o `BlogPosting`
  - Páginas de servicio: `Service` o `ProfessionalService`
  - Páginas locales: `LocalBusiness` + zona
  - Posts con preguntas frecuentes: `FAQPage`
  - Guías paso a paso: `HowTo`
- [ ] Si hay sección FAQ, configurar schema `FAQPage` con las preguntas y respuestas reales
- [ ] El schema no tiene errores (validar con Google Rich Results Test si hay dudas)

---

## CONFIGURACIÓN WORDPRESS

### Categorías y etiquetas
- [ ] El post tiene asignada la categoría correcta del silo
- [ ] Las etiquetas son relevantes y no excesivas (3–5 máximo)
- [ ] No hay categorías o etiquetas en noindex por error

### Indexación
- [ ] La página está en `index, follow` (no en noindex accidentalmente)
- [ ] No está en borrador visible para robots
- [ ] Canonical configurado si es necesario (páginas con contenido similar o paginación)
- [ ] No tiene canonical apuntando a otra URL por error

### Tabla de contenidos
- [ ] Si el post supera 1.000 palabras, hay tabla de contenidos (RankMath puede generarla o usar plugin)
- [ ] Si no se usa tabla de contenidos, los H2 son suficientemente claros para escanear

---

## CTA Y CONVERSIÓN

- [ ] Hay al menos un CTA visible antes del final del contenido
- [ ] El CTA es natural y relevante al contenido (no invasivo)
- [ ] El CTA conecta con la acción correcta: contacto, formulario, llamada, WhatsApp
- [ ] El texto del CTA sigue el tono KAIRAS (no "¡Contáctanos ahora!" genérico)
- [ ] El enlace del CTA funciona y lleva a la página correcta

---

## LECTURA MÓVIL

- [ ] El texto es legible sin hacer zoom en móvil
- [ ] Los botones y CTAs son accesibles con el dedo (mínimo 44px de alto)
- [ ] Las imágenes se ven correctamente en pantallas pequeñas
- [ ] La tabla de contenidos (si existe) es usable en móvil
- [ ] No hay elementos cortados o que salgan del viewport

---

## REVISIÓN FINAL RANKMATH

**Score RankMath objetivo:**
- Mínimo aceptable: 70/100
- Objetivo: > 80/100
- El 100/100 no es necesario ni siempre posible sin forzar el contenido

**Semáforo RankMath:**
- Verde: SEO title y meta con keyword, H1 con keyword, contenido suficiente, imágenes con ALT
- Naranja: verificar qué falta antes de publicar
- Rojo: no publicar sin resolver

**Nota:** RankMath score es orientativo. Un contenido puede ser excelente con 75 y un contenido con 95 puede ser mediocre. Priorizar la calidad real sobre el número.

---

## ANTES DE PUBLICAR — CHECKLIST RÁPIDO

```
[ ] Focus keyword configurada en RankMath
[ ] SEO title ≤ 60 caracteres con keyword
[ ] Slug limpio y descriptivo
[ ] Meta description ≤ 155 caracteres con keyword y CTA implícito
[ ] H1 con keyword
[ ] Keyword en primer párrafo
[ ] Al menos un H2 con keyword o variación
[ ] Imágenes con ALT text
[ ] 2+ enlaces internos con anchor descriptivo
[ ] CTA visible y funcional
[ ] Schema configurado
[ ] Categoría correcta asignada
[ ] Index activado (no noindex)
[ ] Vista móvil revisada
[ ] RankMath score > 70
[ ] Contenido revisado con Content Quality Checklist
```
