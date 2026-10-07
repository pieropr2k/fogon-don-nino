import { useEffect, useState } from "react";
import { Menu as MenuIcon, X, MessageCircle } from "lucide-react";
import { waLink, WA_MSG } from "../lib/whatsapp";
import Flame from "./Flame";

const LINKS = [
  { href: "#carta", label: "Carta" },
  { href: "#como-pedir", label: "Cómo pedir" },
  { href: "#reservas", label: "Reservas" },
  { href: "#donde-estamos", label: "Dónde estamos" },
  { href: "#historia", label: "Historia" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative h-20 bg-carbon text-crema shadow-lg">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-2 px-4">
        <a href="#inicio" className="flex items-center gap-1.5" aria-label="El Fogón de Don Nino, ir al inicio">
          <Flame className="h-7 w-7" />
          <span className="font-display text-lg font-extrabold leading-none sm:text-2xl">
            El Fogón de Don Nino
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="font-chip text-lg font-medium uppercase tracking-wide hover:text-ascua">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={waLink(WA_MSG.reservar)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa !px-3 text-sm sm:text-base"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Reservar
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl hover:bg-humo md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <MenuIcon className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Siempre montado para poder animarlo; "invisible" lo saca del foco cuando está cerrado */}
      <nav
        id="menu-movil"
        aria-label="Menú móvil"
        className={`absolute inset-x-0 top-full border-t border-madera bg-carbon px-4 pb-4 shadow-lg transition-[opacity,transform,visibility] duration-300 ease-out md:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <ul>
          {LINKS.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              className={`transition-[opacity,transform] duration-300 ease-out ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center border-b border-humo font-chip text-lg font-medium uppercase tracking-wide hover:text-ascua"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
