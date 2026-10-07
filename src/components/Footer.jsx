import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import { CONFIG } from "../data/config";
import { waLink, WA_MSG } from "../lib/whatsapp";
import Flame from "./Flame";

export default function Footer() {
  const link = "inline-flex min-h-[44px] items-center gap-2 hover:text-ascua";

  return (
    <footer className="bg-carbon text-crema">
      <div className="veta" aria-hidden="true" />
      {/* pb extra para que el botón flotante no tape el contenido */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-28 pt-10 md:grid-cols-3 md:pb-12">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl font-extrabold">
            <Flame className="h-8 w-8" />
            {CONFIG.name}
          </p>
          <p className="mt-2 text-crema/85">Parrilla de barrio. 40 años a la brasa.</p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ascua">Contacto</h2>
          <ul className="mt-2">
            <li>
              <a href={waLink(WA_MSG.general)} target="_blank" rel="noopener noreferrer" className={link}>
                <MessageCircle className="h-5 w-5 text-ascua" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer" className={link}>
                <Instagram className="h-5 w-5 text-ascua" aria-hidden="true" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-ascua">Visitanos</h2>
          <ul className="mt-2 space-y-2">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-ascua" aria-hidden="true" />
              {CONFIG.address}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-ascua" aria-hidden="true" />
              {CONFIG.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-humo px-4 py-4 text-center text-sm text-crema/80">
        <p>Precios actualizados por WhatsApp o en el local.</p>
        <p className="mt-1">
          © {new Date().getFullYear()} {CONFIG.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
