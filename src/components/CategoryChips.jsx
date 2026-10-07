import { useEffect, useRef } from "react";
import { MENU } from "../data/menu";

// variant="hero"   → círculos con foto (en el hero)
// variant="sticky" → pestañas tipo píldora, pegadas bajo el header (en la carta)
export default function CategoryChips({ variant = "hero", activeId }) {
  const navRef = useRef(null);

  // En la variante sticky, mantiene visible el chip activo (sin mover la página)
  useEffect(() => {
    if (variant !== "sticky" || !activeId || !navRef.current) return;
    const nav = navRef.current;
    const el = nav.querySelector(`[data-id="${activeId}"]`);
    if (!el) return;
    nav.scrollTo({ left: el.offsetLeft - nav.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [activeId, variant]);

  if (variant === "hero") {
    return (
      <nav aria-label="Categorías de la carta">
        <ul className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-1 md:mx-0 md:justify-center md:gap-8 md:px-0">
          {MENU.map((c) => (
            <li key={c.id} className="shrink-0">
              <a href={`#cat-${c.id}`} className="group flex w-[76px] flex-col items-center gap-1.5 text-center md:w-24">
                <img
                  src={c.image}
                  alt={`Categoría ${c.title}`}
                  width="64"
                  height="64"
                  className="h-16 w-16 rounded-full border-2 border-ascua object-cover shadow-calido transition-transform group-hover:scale-105 md:h-20 md:w-20"
                />
                <span className="text-sm font-bold leading-tight text-crema">{c.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="Categorías de la carta">
      <ul ref={navRef} className="no-scrollbar relative flex gap-2 overflow-x-auto px-4 py-2">
        {MENU.map((c) => {
          const active = c.id === activeId;
          return (
            <li key={c.id} className="shrink-0">
              <a
                href={`#cat-${c.id}`}
                data-id={c.id}
                aria-current={active ? "true" : undefined}
                className={`flex min-h-[44px] items-center rounded-full border-2 px-4 py-1.5 font-chip text-base font-semibold uppercase tracking-wide transition-colors ${active
                  ? "border-fuego bg-fuego text-carbon"
                  : "border-fuego bg-crema text-brasa hover:bg-fuego/15"
                  }`}
              >
                {c.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
