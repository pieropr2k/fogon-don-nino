// ─────────────────────────────────────────────────────────────
// CARTA — este es el ÚNICO archivo que hay que editar para la carta.
//
// • Agregar un plato: copiá una línea { name, description, image, price }
//   dentro de "items" de la categoría y cambiá el texto.
// • Quitar un plato: borrá su línea.
// • Foto de un plato: poné la imagen en public/img/ y escribí "/img/archivo.jpg"
//   en "image". Si queda vacío ("") se muestra un diseño de relleno.
// • Precios: por defecto NO se muestran. Si algún día los querés, poné
//   SHOW_PRICES: true en config.js y completá "price" (ej.: "$12.000").
//   Un plato con price: null no muestra nada.
// • Plato destacado: agregá featured: true y badge: "texto del sello".
// ─────────────────────────────────────────────────────────────
export const MENU = [
  {
    id: "parrilla",
    title: "Parrilla",
    image: "/img/cat-parrilla.svg",
    items: [
      { name: "Asado", description: "Corte tradicional a la brasa.", image: "/img/menu/parrilla/asado.jpg", price: null },
      { name: "Vacío", description: "Jugoso, cocinado lento.", image: "/img/menu/parrilla/vacio.jpg", price: null },
      { name: "Chorizo", description: "Clásico de parrilla.", image: "/img/menu/parrilla/chorizo.avif", price: null },
      { name: "Morcilla", description: "Casera, para los que saben.", image: "/img/menu/parrilla/morcilla.jpg", price: null },
      { name: "Provoleta", description: "Dorada, con orégano.", image: "/img/menu/parrilla/provoleta.webp", price: null },
    ],
  },
  {
    id: "milanesas",
    title: "Milanesas",
    image: "/img/cat-milanesas.svg",
    items: [
      // RELLENO: confirmar con Facu
      { name: "Milanesa napolitana", description: "Con salsa, jamón y queso gratinado.", image: "/img/menu/milanesa/milanesa_napolitana.webp", price: null },
      // RELLENO: confirmar con Facu
      { name: "Milanesa a caballo", description: "Clásica, con dos huevos fritos encima.", image: "/img/menu/milanesa/milanesa_caballo.webp", price: null },
      // RELLENO: confirmar con Facu
      { name: "Milanesa de carne", description: "Crocante por fuera, tierna por dentro.", image: "/img/menu/milanesa/milanesa_carne.webp", price: null },
    ],
  },
  {
    id: "pastas",
    title: "Pastas caseras",
    image: "/img/cat-pastas.svg",
    items: [
      // RELLENO: confirmar con Facu
      { name: "Ravioles caseros", description: "Hechos a mano, con salsa a elección.", image: "/img/menu/pastas/raviol.webp", price: null },
      // RELLENO: confirmar con Facu
      { name: "Ñoquis", description: "Suaves, como los de domingo en familia.", image: "/img/menu/pastas/noquis.webp", price: null },
      // RELLENO: confirmar con Facu
      { name: "Tallarines", description: "Pasta fresca con tuco casero.", image: "/img/menu/pastas/tallarin.webp", price: null },
    ],
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    image: "/img/cat-ensaladas.svg",
    items: [
      // RELLENO: confirmar con Facu
      { name: "Ensalada mixta", description: "Lechuga, tomate y cebolla.", image: "/img/menu/ensaladas/ensalada_mixta.webp", price: null },
      // RELLENO: confirmar con Facu
      { name: "Ensalada completa", description: "Con huevo, zanahoria y remolacha.", image: "/img/menu/ensaladas/ensalada_completa.webp", price: null },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    image: "/img/cat-postres.svg",
    items: [
      // RELLENO: confirmar con Facu (descripción)
      {
        name: "Flan casero",
        description: "Cremoso, con dulce de leche y crema.",
        image: "/img/menu/postre/flan.webp",
        price: null,
        featured: true,
        badge: "El orgullo de la casa",
      },
      // RELLENO: confirmar con Facu
      { name: "Budín de pan", description: "Casero, con dulce de leche.", image: "/img/menu/postre/budin_con_pan.jpg", price: null },
      // RELLENO: confirmar con Facu
      { name: "Panqueque con dulce de leche", description: "Calentito, para cerrar bien.", image: "/img/menu/postre/panqueque.webp", price: null },
    ],
  },
];
