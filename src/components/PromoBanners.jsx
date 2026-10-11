import { CakeSlice, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, WA_MSG } from "../lib/whatsapp";

// Dos banners de 2 columnas (apilados en móvil). Sin descuentos ni "ofertas".
export default function PromoBanners() {
  return (
    <section aria-label="Destacados" className="bg-crema pb-12">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2">
        <a
          href="#cat-postres"
          className="group flex items-center gap-4 rounded-xl bg-humo p-6 text-crema shadow-calido ring-1 ring-madera"
        >
          <CakeSlice className="h-12 w-12 shrink-0 text-ascua" aria-hidden="true" />
          <div>
            <p className="font-display text-2xl font-extrabold">El flan casero, el orgullo de la casa</p>
            <p className="mt-1 inline-flex items-center gap-1 font-bold text-ascua underline underline-offset-4">
              Ver postres
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </p>
          </div>
        </a>

        <a
          href={waLink(WA_MSG.cumple)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl bg-whatsapp p-6 text-carbon shadow-calido"
        >
          <FaWhatsapp className="h-12 w-12 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-display text-2xl font-extrabold">Reservá tu cumpleaños</p>
            <p className="mt-1 inline-flex items-center gap-1 font-bold underline underline-offset-4">
              Escribinos por WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
