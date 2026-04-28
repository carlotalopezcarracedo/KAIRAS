# SEO Playbook — Principios para KAIRAS

## 1. Principios fundamentales

### Intención de búsqueda primero
El volumen de búsquedas es una métrica secundaria. Lo que importa es:
- ¿Qué quiere realmente el usuario que escribe esa búsqueda?
- ¿La página de KAIRAS puede responder mejor que la competencia?
- ¿El usuario que llega es un cliente potencial real?

Una keyword con 50 búsquedas mensuales y alta intención comercial local vale más que una con 5.000 búsquedas y lectores sin perfil de cliente.

### Contenido útil, no contenido largo
El algoritmo de Google premia el contenido que resuelve bien la intención de búsqueda. No el que tiene más palabras.
- Un post de 600 palabras que responde perfectamente supera a 3.000 palabras de relleno.
- Cada sección debe añadir valor o sobra.
- Si se puede decir en la mitad de palabras, es mejor.

### E-E-A-T: Experiencia, Expertise, Autoridad, Confianza
Google evalúa quién escribe, por qué lo sabe y si es de fiar.

| Factor | Cómo aplicarlo en KAIRAS |
|--------|--------------------------|
| Experiencia | Mencionar casos reales, ejemplos de proyectos, situaciones concretas vividas |
| Expertise | Demostrar conocimiento del sector (clínicas, academias, etc.) y de la tecnología |
| Autoridad | Menciones externas, links de terceros, coherencia entre páginas |
| Confianza | Datos de contacto visibles, información legal, sin promesas imposibles, sin clickbait |

### Topical Authority
Google prefiere webs que son referentes en un tema completo, no sitios que publican de todo.

Para KAIRAS, esto significa:
- Cubrir en profundidad los temas de automatización, IA operativa y optimización de procesos para pymes
- Crear clusters completos por silo: no un post suelto, sino la página pilar + posts satélite + FAQ + casos
- Publicar regularmente dentro de los mismos silos
- Evitar posts sobre temas que no conecten con la marca

---

## 2. Tipos de intención de búsqueda

| Tipo | Señales en la query | Qué busca el usuario | Tipo de página ideal |
|------|---------------------|---------------------|----------------------|
| Informacional | qué es, cómo funciona, para qué sirve, cuándo, guía | Aprender, entender, resolver una duda | Blog post, guía, explicación |
| Comercial | mejor, comparativa, opciones, alternativas, herramientas para | Evaluar opciones antes de decidir | Post comparativo, página de servicio con diferenciación |
| Transaccional | contratar, precio, presupuesto, solicitar, agencia en | Contratar o contactar | Landing de servicio, página de contacto |
| Local | en Galicia, en Pontevedra, cerca de, en Vigo | Encontrar un proveedor local | Página de servicio local, landing geolocalizada |
| Comparativa | vs, diferencia entre, cuál es mejor | Comparar opciones concretas | Post comparativo o landing con posicionamiento claro |

---

## 3. SEO local

### Por qué es crítico para KAIRAS
KAIRAS opera principalmente en Galicia. Las búsquedas locales tienen:
- Menor competencia (menos webs compiten por ellas)
- Mayor intención comercial (el usuario busca a alguien cerca)
- Mayor tasa de conversión (busca, llama, contrata)

### Estrategia local prioritaria

**Zonas a trabajar:**
1. Galicia (región general) — para keywords amplias
2. Pontevedra — ciudad y provincia
3. Vigo — segundo núcleo más grande
4. Santiago de Compostela — capital y referencia
5. A Coruña — tercera plaza clave
6. A Estrada — posible sede o zona de origen de KAIRAS
7. Ourense, Lugo — presencia secundaria

**Tipos de contenido local:**
- Páginas de servicio con mención de zona: "Automatización para pymes en Pontevedra"
- Posts que ejemplifican con negocios locales: "Cómo una clínica de Vigo redujo..."
- Menciones naturales de las zonas en el contenido cuando sea real
- No forzar la geolocalización en cada párrafo: sonar natural

**Google Business Profile:**
- Nombre: KAIRAS (o nombre oficial registrado)
- Categoría principal: Technology Consultant / IT Consulting
- Categorías secundarias: Business Management Consultant, Software Company
- Descripción: usar keywords naturales, mencionar Galicia, pymes, automatización
- Publicaciones regulares: al menos 1–2 por mes
- Responder a reseñas siempre
- Fotos reales del equipo y del trabajo (no stock)

---

## 4. Enlazado interno

### Por qué importa
- Distribuye autoridad (PageRank) entre páginas
- Ayuda a Google a entender la estructura del sitio
- Mejora la experiencia de usuario (el lector encuentra más contenido relevante)
- Refuerza la relación temática entre páginas del mismo silo

### Reglas para KAIRAS

**Jerarquía de enlaces:**
```
Página de inicio
  → Páginas de servicio (reciben los enlaces más importantes)
    → Páginas pilar de cada silo (reciben enlaces de posts satélite)
      → Posts satélite (enlazan a su pilar y a páginas de servicio)
```

**Anchor text:**
- Descriptivo y natural: "automatización de citas para clínicas" en lugar de "haz clic aquí"
- Variado: no usar siempre el mismo anchor para la misma URL
- Evitar anchor text genérico: "ver más", "este artículo", "aquí"
- Nunca sobreoptimizar: no repetir la keyword exacta en todos los enlaces internos

**Cuántos enlaces internos por contenido:**
- Posts de blog: 2–5 enlaces internos mínimo
- Páginas de servicio: 3–8 enlaces a contenidos relacionados
- Páginas pilar: tantos como posts satélite existan del silo

---

## 5. SEO técnico básico

Puntos a revisar antes de publicar cualquier contenido en WordPress:

| Elemento | Estado ideal |
|----------|-------------|
| Velocidad de página | Core Web Vitals en verde (LCP < 2.5s, FID < 100ms, CLS < 0.1) |
| Mobile-first | Texto legible sin zoom, botones accesibles, sin contenido cortado |
| HTTPS | Activo en toda la web, sin mixed content |
| Sitemap XML | Generado y enviado a Search Console |
| robots.txt | Sin bloqueos accidentales de páginas importantes |
| URLs canónicas | Configuradas cuando hay páginas similares o paginación |
| Imágenes | Comprimidas (< 150KB si es posible), con ALT text, formato WebP preferido |
| Tiempo de respuesta servidor | < 200ms TTFB |
| No hay páginas 404 en el menú o enlaces internos | Revisión periódica con Screaming Frog o Ahrefs |
| Index/Noindex | Solo en noindex lo que no debe indexarse (categorías vacías, páginas de admin) |

---

## 6. Errores comunes que evitar

| Error | Consecuencia | Cómo evitarlo |
|-------|-------------|---------------|
| Canibalización de keywords | Google no sabe qué página priorizar | Un tema = una página. Silos bien definidos. |
| Keyword stuffing | Penalización manual, mala lectura | Densidad natural, máximo 1–2% de la keyword principal |
| Contenido fino (<300 palabras) | No posiciona, parece spam | Mínimo 500 palabras con valor real |
| Meta descriptions duplicadas | Pérdida de CTR | Meta única por página, descriptiva y con keyword |
| Ignorar long-tail keywords | Competir en keywords imposibles | Estrategia combinada: keywords ancla + long-tail |
| No enlazar internamente | Páginas huérfanas sin autoridad | Enlazar siempre desde posts nuevos a páginas relacionadas |
| Publicar sin CTA | Tráfico que no convierte | Siempre un CTA lógico al final y posiblemente en medio |
| Ignorar intención local | Perder búsquedas de mayor conversión | Incluir zona geográfica donde sea real y natural |
| Crear contenido sin briefs | Posts sin estructura ni estrategia | Brief antes de cada post |
| Publicar y olvidar | El contenido envejece | Revisar y actualizar contenidos cada 12 meses |

---

## 7. Métricas que importan en KAIRAS

**Prioritarias:**
- Conversiones desde tráfico orgánico (formularios, llamadas, WhatsApp)
- Posiciones para keywords comerciales y locales clave
- CTR orgánico (si el título/meta funciona o no)
- Páginas que generan leads cualificados

**Secundarias:**
- Tráfico orgánico total (contexto, no objetivo)
- Tiempo en página (indica si el contenido engancha)
- Tasa de rebote (en contexto: en un post informativo alto rebote puede ser normal si el usuario encontró su respuesta)

**Ignorar o contextualizar:**
- Tráfico total sin segmentar por origen o intención
- Rankings de keywords informacionales sin conversión
- Métricas de vanidad sin conexión con negocio
