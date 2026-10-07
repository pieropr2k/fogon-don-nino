import { MessageCircle, Phone } from "lucide-react";
import { CONFIG } from "../data/config";
import { waLink, WA_MSG } from "../lib/whatsapp";

const RESERVAS_BG = "/img/reserva.jpg";

export default function Reservations() {
  const tel = CONFIG.phone.replace(/[^\d+]/g, "");

  return (
    <section
      id="reservas"
      aria-labelledby="titulo-reservas"
      // Imagen de fondo: guardá tu foto como public/img/reserva.jpg (o cambiá RESERVAS_BG).
      // Si no existe, se ve solo el degradado rojo de brasa.
      style={{ backgroundImage: `url(${RESERVAS_BG})` }}
      className="relative isolate scroll-mt-[116px] bg-brasa bg-cover bg-center px-4 py-14 text-center md:py-[125px] text-crema"
    >
      {/* Overlay rojo de brasa para mantener el color de marca y que el texto se lea */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brasa/75 to-[#9a2a1a]/75"
      />
      <div className="mx-auto max-w-2xl">
        <h2 id="titulo-reservas" className="font-display text-4xl font-extrabold md:text-5xl">
          Reservá y no te quedes afuera
        </h2>
        <p className="mt-3 text-lg">
          Los fines de semana el salón se llena. Grupos grandes y cumpleaños, bienvenidos.
        </p>

        <a
          href={waLink(WA_MSG.reservar)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa mt-6 font-body font-bold normal-case tracking-normal !min-h-[56px] w-full !text-lg shadow-lg sm:w-auto sm:!px-10"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
          Reservar por WhatsApp
        </a>

        <p className="mt-4">
          <a
            href={`tel:${tel}`}
            className="inline-flex min-h-[44px] items-center gap-2 font-bold underline underline-offset-4 hover:text-ascua"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            O llamanos: {CONFIG.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
