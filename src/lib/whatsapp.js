import { CONFIG } from "../data/config";

// Arma un link de WhatsApp con mensaje prellenado.
export function waLink(mensaje = "") {
  const base = `https://wa.me/${CONFIG.whatsapp}`;
  return mensaje ? `${base}?text=${encodeURIComponent(mensaje)}` : base;
}

// Mensajes prellenados (editables acá).
export const WA_MSG = {
  reservar: "Hola! Quiero reservar para __ personas el día __ a las __.",
  precios: "Hola! Quisiera consultar los precios de la carta.",
  takeaway: "Hola! Quiero hacer un pedido para llevar.",
  cumple: "Hola! Quiero reservar un cumpleaños en El Fogón de Don Nino.",
  general: "Hola! Quisiera hacer una consulta.",
};

// Link a Google Maps (abrir y embeber) a partir de la dirección de config.
export const mapsLink = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.mapsQuery)}`;
export const mapsEmbed = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(CONFIG.mapsQuery)}&output=embed`;
