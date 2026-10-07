# Project.md — El Fogón de Don Nino

> Web de una sola página (landing) para una parrilla de barrio con 40 años de historia.
> Stack: **React + Tailwind CSS**. Mobile first.
> Proyecto Final Módulo 3 — Caso 2 (Triple A Academy).

---

## 1. Contexto del cliente

| Dato | Detalle |
|---|---|
| Nombre | El Fogón de Don Nino |
| Rubro | Parrilla de barrio |
| Historia | Fundada por Don Nino (abuelo). Hoy la manejan Ricardo (hijo) y Facu (nieto). 40 años en el mismo barrio |
| Ubicación | Sobre una avenida conocida del barrio (dirección real pendiente, usar placeholder) |
| Horarios | Martes a domingo, mediodía y noche. **Lunes cerrado** |
| Modalidades | Salón, take away y delivery por app (app sin confirmar) |
| Reservas | Por teléfono o WhatsApp. Grupos grandes y cumpleaños. Los findes el salón se llena |
| Redes | Instagram activo (platos del día) |

### Frases clave del cliente
- "La gente joven no sabe que existimos, buscan todo en el celular y no aparecemos."
- "Los precios los cambio cada dos por tres, no quiero tocar la web cada semana."
- "Somos de fierro y madera, no de neón."
- "Sería una masa que se vea el menú apenas entrás, que la gente entre con hambre."

---

## 2. Problema número uno

**Visibilidad y claridad en el celular.** Quien busque "parrilla cerca" debe entender en pocos segundos:

1. **Qué es** (parrilla familiar, 40 años)
2. **Dónde está** (dirección + mapa)
3. **Cómo pedir o reservar** (WhatsApp, take away, delivery)

Todo lo demás es secundario.

---

## 3. Decisión sobre los precios

**La carta se muestra con nombre, descripción y foto, sin precios escritos.**

En su lugar:
- Aviso visible en la carta: *"Precios actualizados todos los días. Consultalos por WhatsApp o en el local."*
- Botón directo "Consultar precios" que abre WhatsApp con mensaje prellenado.

**Por qué:**
- Ricardo nunca tiene que tocar la web por inflación.
- Un precio viejo en la web genera un cliente enojado en la puerta.
- Los platos casi no cambian, solo los números.
- Cada consulta de precio es un contacto por WhatsApp, el canal que ya usan para reservar.

**Plan B (ya previsto en el código):** un flag `SHOW_PRICES` en `src/data/config.js`. Si Ricardo algún día quiere mostrar precios, se activa el flag y se completan los precios en un único archivo (`menu.js`), sin tocar diseño ni componentes. Por defecto: `false`.

---

## 4. Referencia visual y cómo se adapta

Se toma como **referencia de estructura** una web de delivery de pollería (header fijo, carruseles de tarjetas, categorías con imagen, banners, FAQ y footer en columnas). **No se copia el estilo**: el cliente pidió calidez, familia y brasa, no una marca corporativa moderna.

### Qué SÍ se toma (estructura)
| Patrón de la referencia | Adaptación para Don Nino |
|---|---|
| Header fijo con navegación | Header fijo oscuro con logo, enlaces de ancla y botón "Reservar" |
| Barra de aviso arriba | Barra fina: "Martes a domingo · Lunes cerrado · Reservá para el finde" |
| "Explora nuestro Menú" con categorías en círculos/imagen | Chips con foto circular: Parrilla, Milanesas, Pastas, Ensaladas, Postres |
| Carruseles horizontales de tarjetas | Carta por categoría con scroll horizontal en celular y grilla en escritorio |
| Tarjeta: foto, nombre, descripción corta | Igual, pero **sin precio ni botón de carrito** |
| Banners promocionales de 2 columnas | Dos banners: "El flan casero, orgullo de la casa" y "Reservá tu cumpleaños" |
| FAQ con acordeón | Preguntas frecuentes (reservas, horarios, delivery, take away) |
| Footer en columnas | Footer con info práctica, redes y mapa corto |

### Qué NO se toma
- Carrito, login, "Mis pedidos", locales múltiples, combos y descuentos con porcentajes.
- Fondo negro brillante con rojo/blanco corporativo.
- Etiquetas de oferta tipo "-50%".
- Tipografía sans-serif gruesa tipo gaming/promo.
- Botones de "Comprar" (acá la acción es **reservar o consultar**).

---

## 5. Sistema de diseño

### Paleta (los colores del fuego, madera y negro)

| Token | Hex | Uso |
|---|---|---|
| `carbon` | `#14100D` | Fondo oscuro principal, header, footer |
| `humo` | `#2A211B` | Superficies oscuras secundarias, tarjetas sobre oscuro |
| `brasa` | `#B8321F` | Color de marca, botones principales |
| `fuego` | `#E8731A` | Acentos, hover, detalles |
| `ascua` | `#F2A03D` | Resaltados, íconos, subrayados |
| `madera` | `#6B4226` | Bordes, textura, detalles cálidos |
| `maderaclaro` | `#A87444` | Texturas suaves, separadores |
| `crema` | `#F6EBDD` | Fondo claro principal (papel cálido, no blanco puro) |
| `whatsapp` | `#25D366` | **Solo** botones de WhatsApp (reconocible al instante) |

Reglas:
- Nada de azules, grises fríos ni neón.
- Alternar secciones **crema** y **carbón** para dar ritmo y separar bloques sin líneas pesadas.
- Textos sobre oscuro: `crema`. Textos sobre claro: `carbon`.

### Tipografía (Google Fonts)
- **Títulos:** `Rokkitt` (slab serif, sensación de fierro y letrero de barrio), peso 700-800.
- **Cuerpo:** `Nunito Sans`, peso 400-700, legible en celular.
- Tamaño base 16 px; nunca menos en móvil.

### Textura y carácter
- Fondo del hero con **foto de brasas/parrilla** (placeholder) con degradado de `carbon` a transparente.
- Detalle de **veta de madera** sutil en separadores o bordes (SVG o patrón CSS).
- Bordes redondeados moderados (`rounded-xl`), sombras cálidas suaves.
- Nada de glassmorphism ni degradados fríos.

### `tailwind.config.js` (extensión sugerida)
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#14100D",
        humo: "#2A211B",
        brasa: "#B8321F",
        fuego: "#E8731A",
        ascua: "#F2A03D",
        madera: "#6B4226",
        maderaclaro: "#A87444",
        crema: "#F6EBDD",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["Rokkitt", "Georgia", "serif"],
        body: ["Nunito Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        calido: "0 8px 24px rgba(184, 50, 31, 0.18)",
      },
    },
  },
  plugins: [],
};
```

---

## 6. Estructura de la página (orden por importancia)

Una sola página con navegación por anclas.

| # | Sección | Pregunta que responde | Fondo |
|---|---|---|---|
| 0 | Barra de aviso | ¿Cuándo abren? | brasa |
| 0 | Header fijo | ¿Dónde navego? | carbon |
| 1 | **Hero + categorías** | ¿Qué es y qué hay para comer? | carbon |
| 2 | **Carta** | ¿Qué platos tienen? | crema |
| 3 | **Cómo pedir** | ¿Cómo como/pido? | carbon |
| 4 | **Reservas** | ¿Cómo reservo? | brasa/fuego |
| 5 | **Horarios y ubicación** | ¿Cuándo y dónde? | crema |
| 6 | **Nuestra historia** | ¿Quiénes son? | humo |
| 7 | **FAQ** | ¿Dudas rápidas? | crema |
| 8 | Footer | Contacto e Instagram | carbon |
| — | Botón flotante WhatsApp | Reservar siempre a un toque | fijo |

---

## 7. Especificación por sección

### 7.1 Barra de aviso
Texto corto: **"Martes a domingo · Lunes cerrado · Los findes reservá"**. Fija arriba, altura mínima.

### 7.2 Header
- Logo (texto "El Fogón de Don Nino" con tipografía display, ícono de llama).
- Enlaces: Carta, Cómo pedir, Reservas, Dónde estamos, Historia.
- Botón "Reservar" (WhatsApp).
- En móvil: logo + botón reservar + menú hamburguesa.

### 7.3 Hero (menú apenas entrás)
**Es una franja compacta, no una foto gigante.** Objetivo: que la carta se vea sin scrollear de más en el celular.

Contenido:
- Título: **"El Fogón de Don Nino"**
- Subtítulo: **"Parrilla de barrio. 40 años a la brasa."**
- Dos botones: **Reservar por WhatsApp** (verde) y **Ver la carta** (anclado).
- Debajo, dentro del mismo bloque: **fila de categorías con foto circular** (Parrilla, Milanesas, Pastas, Ensaladas, Postres). Al tocar, baja a esa categoría de la carta.

Detalles:
- Imagen de fondo de brasas con overlay oscuro.
- Altura aproximada en móvil: 55-65 % de la pantalla, con las categorías ya visibles.

### 7.3 bis Info rápida (dentro del hero)
Tres datos en una línea, con íconos: 📍 Dirección corta · 🕐 Mar a Dom · 💬 Reservas por WhatsApp.

### 7.4 Carta
- **Pestañas/chips** sticky por categoría: Parrilla, Milanesas, Pastas caseras, Ensaladas, Postres.
- Cada categoría: título + grilla de tarjetas (1 columna scroll horizontal o 2 columnas en móvil, 3-4 en escritorio).
- **Tarjeta de plato:** foto (placeholder), nombre, descripción de una línea. Sin precio ni carrito.
- **Plato destacado:** el **flan casero** con insignia "El orgullo de la casa" (sello `ascua`).
- **Aviso de precios** visible arriba de la carta, con botón "Consultar precios" (WhatsApp con mensaje prellenado).
- Enlace discreto: "Mirá los platos del día en Instagram".

**Contenido de la carta**

| Categoría | Platos |
|---|---|
| Parrilla | Asado, vacío, chorizo, morcilla, provoleta |
| Milanesas | (completar con Facu: variedades) |
| Pastas caseras | (completar con Facu) |
| Ensaladas | (completar con Facu) |
| Postres | **Flan casero** (destacado), (completar) |

> Las descripciones de platos son de relleno hasta recibir la carta real.

### 7.5 Cómo pedir
Tres tarjetas iguales, una frase cada una:

| Tarjeta | Texto | Acción |
|---|---|---|
| 🍽️ Salón | "Veníte a comer al salón. Los findes, reservá." | Botón Reservar |
| 🛍️ Para llevar | "Pedí por WhatsApp y retirá." | Botón WhatsApp |
| 🛵 Delivery | "Pedinos por app." | Botón con **link pendiente** (placeholder) |

### 7.6 Reservas
- Titular: **"Reservá y no te quedes afuera"**.
- Texto corto: los findes el salón se llena; grupos grandes y cumpleaños bienvenidos.
- **Botón grande WhatsApp** con mensaje prellenado: *"Hola! Quiero reservar para __ personas el día __ a las __."*
- Opción secundaria: teléfono (enlace `tel:`).

### 7.7 Horarios y ubicación
- **Horarios en una línea:** "Martes a domingo · mediodía y noche · Lunes cerrado".
- Dirección sobre la avenida (placeholder).
- **Mapa** embebido (Google Maps iframe) con ubicación aproximada sobre una avenida.
- Botón **"Cómo llegar"** (abre Google Maps).

### 7.8 Nuestra historia
- Título: **"Ya son 40 años en el barrio"**.
- Texto corto (3-4 líneas): Don Nino, la familia, la brasa, hoy Ricardo y Facu.
- Foto familiar o del local (placeholder).
- Tono cálido, sin exagerar.

### 7.9 FAQ (acordeón)
1. ¿Hay que reservar? (Recomendado los findes.)
2. ¿Qué días y horarios abren?
3. ¿Hacen delivery?
4. ¿Se puede pedir para llevar?
5. ¿Hacen cumpleaños o eventos?
6. ¿Dónde veo los platos del día? (Instagram)

### 7.10 Footer
- Logo, frase corta, Instagram, WhatsApp, dirección, horarios.
- Aclaración: "Precios actualizados por WhatsApp o en el local."
- Año y derechos.

### 7.11 Botón flotante de WhatsApp
- Fijo abajo a la derecha en móvil y escritorio.
- Color `whatsapp`, ícono claro, etiqueta "Reservar" en móvil si hay espacio.
- No debe tapar contenido importante (margen inferior).

---

## 8. Estructura de archivos

```
fogon-don-nino/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   ├── config.js        # WhatsApp, teléfono, dirección, horarios, SHOW_PRICES, links
    │   ├── menu.js          # Categorías y platos (único archivo a editar)
    │   └── faq.js
    ├── assets/
    │   └── img/             # Fotos de relleno / reales
    └── components/
        ├── AnnouncementBar.jsx
        ├── Header.jsx
        ├── Hero.jsx
        ├── CategoryChips.jsx
        ├── Menu.jsx
        ├── DishCard.jsx
        ├── HowToOrder.jsx
        ├── Reservations.jsx
        ├── HoursAndLocation.jsx
        ├── Story.jsx
        ├── Faq.jsx
        ├── Footer.jsx
        ├── WhatsAppButton.jsx
        └── SectionTitle.jsx
```

### Datos centralizados (`src/data/config.js`)
```js
export const CONFIG = {
  name: "El Fogón de Don Nino",
  whatsapp: "5490000000000",          // PLACEHOLDER
  phone: "+54 00 0000-0000",          // PLACEHOLDER
  address: "Av. Principal 0000, Barrio", // PLACEHOLDER
  mapsQuery: "Av. Principal, Barrio",  // PLACEHOLDER
  instagram: "https://instagram.com/", // PLACEHOLDER
  deliveryUrl: "",                     // PENDIENTE: app de delivery
  hours: "Martes a domingo · mediodía y noche · Lunes cerrado",
  SHOW_PRICES: false,                  // Plan B para mostrar precios
};
```

### Datos de la carta (`src/data/menu.js`)
```js
export const MENU = [
  {
    id: "parrilla",
    title: "Parrilla",
    image: "/img/parrilla.jpg",
    items: [
      { name: "Asado", description: "Corte tradicional a la brasa.", image: "", price: null },
      { name: "Vacío", description: "Jugoso, cocinado lento.", image: "", price: null },
      { name: "Chorizo", description: "Clásico de parrilla.", image: "", price: null },
      { name: "Morcilla", description: "Casera, para los que saben.", image: "", price: null },
      { name: "Provoleta", description: "Dorada, con orégano.", image: "", price: null },
    ],
  },
  // milanesas, pastas, ensaladas, postres...
  // En postres: { name: "Flan casero", featured: true, badge: "El orgullo de la casa" }
];
```
`price` solo se muestra si `CONFIG.SHOW_PRICES === true`.

---

## 9. Requisitos técnicos

- **React 18 + Vite** y **Tailwind CSS 3**.
- **Mobile first:** diseñar primero en 375 px; luego `md` (768) y `lg` (1024).
- Sin librerías pesadas. Íconos con `lucide-react` o SVG propios.
- Scroll suave y offset de anclas por el header fijo (`scroll-mt-*`).
- Imágenes con `loading="lazy"` y `alt` descriptivo.
- Mensajes de WhatsApp con `https://wa.me/NUMERO?text=...` y `encodeURIComponent`.
- Carruseles con **scroll nativo** (`overflow-x-auto snap-x`), sin JavaScript extra.
- Accesibilidad: contraste suficiente, botones de 44 px mínimo, foco visible, `aria-label` en íconos.

### SEO local (clave para "aparecer en el celular")
- `<title>`: "El Fogón de Don Nino · Parrilla de barrio · Carta, reservas y delivery".
- `meta description` clara con rubro, barrio y reservas.
- Etiquetas Open Graph para compartir por WhatsApp/Instagram.
- Datos estructurados **JSON-LD** `Restaurant` con nombre, dirección, horarios y teléfono.
- Una sola `h1`, jerarquía `h2`/`h3` ordenada.

---

## 10. Contenido de relleno y pendientes

| Pendiente | Responsable | Estado |
|---|---|---|
| Número de WhatsApp y teléfono | Ricardo | Placeholder |
| Dirección real y avenida | Ricardo | Placeholder |
| App de delivery y link | Ricardo/Facu | **Sin confirmar** |
| Usuario de Instagram | Facu | Placeholder |
| Fotos reales de platos | Facu | Imágenes de relleno |
| Lista completa de milanesas, pastas, ensaladas, postres | Ricardo | Pendiente |
| Foto familiar / del local | Ricardo | Placeholder |
| Logo | Ricardo | Logo tipográfico provisorio |

---

## 11. Orden de construcción (loop: pedir, verificar, ajustar)

1. Estructura base: Vite + React + Tailwind, `tailwind.config.js` y fuentes.
2. Datos: `config.js`, `menu.js`, `faq.js`.
3. Header, barra de aviso y botón flotante de WhatsApp.
4. Hero con categorías (menú arriba).
5. Carta con chips, tarjetas y aviso de precios.
6. Cómo pedir y Reservas.
7. Horarios, mapa y ubicación.
8. Historia, FAQ y footer.
9. Ajuste de colores, tipografía y texturas hasta que "se vea apetitoso y familiar".
10. Revisión en celular, SEO y despliegue (Vercel o Netlify).

---

## 12. Checklist de verificación

**El problema del cliente**
- [ ] Se entiende rápido qué es, dónde está y cómo pedir.
- [ ] La carta aparece bien arriba en el inicio.

**Precios**
- [ ] Decisión clara: carta sin precios + consulta por WhatsApp, y puedo explicar por qué.
- [ ] El cliente no tiene que editar la web por precios.
- [ ] Plan B (`SHOW_PRICES`) funciona al activarlo.

**Información**
- [ ] Horarios: martes a domingo, mediodía y noche, lunes cerrado.
- [ ] Mapa y dirección con botón "Cómo llegar".
- [ ] Se entienden salón, take away y delivery.
- [ ] Reservar por WhatsApp es fácil y está visible en todo momento.
- [ ] Instagram enlazado.

**Diseño**
- [ ] Colores de fuego, madera y negro. Nada frío ni neón.
- [ ] Se siente familiar y de barrio con historia, no cadena.
- [ ] Se ve apetitoso.
- [ ] No parece copia de la referencia (misma estructura, otra identidad).

**Técnico**
- [ ] Revisé cada sección con mis propios ojos.
- [ ] Se ve bien en celular (375 px) y en escritorio.
- [ ] Publicada online y funciona desde el link.

---

## 13. Para compartir en la comunidad

Contar especialmente:
- Qué decisión tomé con los precios y por qué (sin precios + WhatsApp, con `SHOW_PRICES` como plan B).
- Cómo traduje "que se vea el menú apenas entrás" (hero compacto con categorías y carta inmediata).
- Cómo usé la referencia solo como estructura y la adapté a la identidad del cliente.