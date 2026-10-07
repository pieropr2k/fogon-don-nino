import { MapPin, Clock, MessageCircle } from "lucide-react";
import { CONFIG } from "../data/config";
import { waLink, WA_MSG } from "../lib/whatsapp";

// Imagen de fondo del hero: guardá tu foto como public/img/hero_landing.jpg (o cambiá esta ruta).
// Si el archivo no existe, se muestra el relleno de brasas.
const HERO_IMAGE = "/img/hero_landing.jpg";
const HERO_FALLBACK = "/img/hero-brasas.svg";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-hero"
      className="relative isolate flex min-h-[calc(100svh-116px)] items-center overflow-hidden bg-carbon text-crema"
    >
      <img
        src={HERO_IMAGE}
        onError={(e) => {
          if (!e.currentTarget.src.endsWith(HERO_FALLBACK)) e.currentTarget.src = HERO_FALLBACK;
        }}
        alt="Plato de milanesa casera con ensalada, servido en El Fogón de Don Nino"
        fetchpriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Overlay oscuro cálido para que el texto se lea sobre cualquier foto */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-carbon/65" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-carbon/40 via-transparent to-carbon/70"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center md:py-16">
        <span className="rounded-full border border-ascua/70 px-4 py-1 text-sm font-bold uppercase tracking-[0.25em] text-ascua">
          40 años
        </span>

        <h1 id="titulo-hero" className="mt-5 font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
          El Fogón de Don Nino
        </h1>
        <p className="mt-3 font-display text-2xl font-bold text-ascua md:text-3xl">Parrilla de barrio. 40 años a la brasa.</p>
        <p className="mt-4 max-w-xl text-lg text-crema/95 md:text-xl">
          Desde hace 40 años, el mismo lugar, el mismo fuego, la misma familia.
        </p>

        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={waLink(WA_MSG.reservar)} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Reservar por WhatsApp
          </a>
          <a href="#carta" className="btn-brasa">
            Ver la carta
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm font-semibold text-crema/90">
          <li className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-ascua" aria-hidden="true" />
            {CONFIG.shortAddress}
          </li>
          <li className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-ascua" aria-hidden="true" />
            Mar a Dom
          </li>
          <li className="flex items-center gap-1.5">
            <MessageCircle className="h-4 w-4 text-ascua" aria-hidden="true" />
            Reservas por WhatsApp
          </li>
        </ul>
      </div>
    </section>
  );
}
