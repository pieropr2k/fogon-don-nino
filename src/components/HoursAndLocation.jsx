import { Clock, MapPin, Navigation, Instagram, ArrowRight } from "lucide-react";
import { CONFIG } from "../data/config";
import { mapsLink, mapsEmbed } from "../lib/whatsapp";
import SectionTitle from "./SectionTitle";

export default function HoursAndLocation() {
  return (
    <section id="donde-estamos" aria-labelledby="titulo-donde" className="scroll-mt-[116px] fondo-madera py-12 text-crema">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 md:items-center">
        <div>
          <SectionTitle id="titulo-donde" dark>Horarios y ubicación</SectionTitle>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-6 w-6 shrink-0 text-ascua" aria-hidden="true" />
              <span className="text-lg font-semibold">{CONFIG.hours}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-ascua" aria-hidden="true" />
              <span className="text-lg font-semibold">{CONFIG.address}</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="btn bg-ascua font-body font-bold normal-case tracking-normal text-carbon hover:bg-fuego">
              <Navigation className="h-5 w-5" aria-hidden="true" />
              Cómo llegar
            </a>
          </div>

          {/* Llamado a Instagram: insistente pero cálido */}
          <div className="mt-8 md:mr-16 rounded-xl bg-brasa p-6 shadow-calido">
            <p className="font-display text-2xl font-extrabold leading-tight">
              Lo que sale de la parrilla hoy, lo ves en Instagram.
            </p>
            <p className="mt-1 text-crema/95">
              Cada día subimos el plato del día. Si todavía no nos seguís, te estás perdiendo lo mejor.
            </p>
            <a
              href={CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-4 w-full bg-crema text-carbon hover:bg-ascua sm:w-auto"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              Seguinos y no te lo pierdas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl shadow-calido ring-2 ring-ascua/50">
          <iframe
            title={`Mapa de ${CONFIG.name}`}
            src={mapsEmbed()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0 md:h-80"
          />
        </div>
      </div>
    </section>
  );
}
