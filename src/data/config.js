// Datos del negocio. Todo lo marcado PLACEHOLDER/PENDIENTE hay que reemplazarlo
// con los datos reales cuando Ricardo y Facu los confirmen.
export const CONFIG = {
  name: "El Fogón de Don Nino",
  whatsapp: "5490000000000", // PLACEHOLDER: número con código de país, sin + ni espacios
  phone: "+54 00 0000-0000", // PLACEHOLDER
  address: "Av. Principal 0000, Barrio", // PLACEHOLDER
  shortAddress: "Av. Principal, Barrio", // PLACEHOLDER: versión corta para el hero
  mapsQuery: "Av. Principal, Barrio", // PLACEHOLDER: lo que se busca en Google Maps
  instagram: "https://instagram.com/", // PLACEHOLDER: link al perfil real
  deliveryUrl: "", // PENDIENTE: link de la app de delivery. Vacío = botón "Próximamente"
  hours: "Martes a domingo · mediodía y noche · Lunes cerrado",

  // PRECIOS: la carta se muestra SIN precios a propósito.
  //  - Ricardo no tiene que tocar la web por la inflación.
  //  - Un precio viejo en la web = cliente enojado en la puerta.
  //  - Cada consulta de precio es un contacto por WhatsApp.
  // Plan B: poné true y completá "price" de cada plato en menu.js.
  SHOW_PRICES: false,
};
