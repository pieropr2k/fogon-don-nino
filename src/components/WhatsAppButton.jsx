import { MessageCircle } from "lucide-react";
import { waLink, WA_MSG } from "../lib/whatsapp";

// Botón flotante: reservar a un toque, siempre visible.
export default function WhatsAppButton() {
  return (
    <a
      href={waLink(WA_MSG.reservar)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar por WhatsApp"
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom))",
        right: "calc(1rem + env(safe-area-inset-right))",
      }}
      className="fixed z-40 flex h-14 items-center gap-2 rounded-full bg-whatsapp px-4 font-chip font-semibold uppercase tracking-wide text-carbon shadow-calido hover:bg-[#1fb957] md:px-5"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span>Reservar</span>
    </a>
  );
}
