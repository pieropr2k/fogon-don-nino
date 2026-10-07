import { useEffect, useState } from "react";
import { MessageCircle, Instagram } from "lucide-react";
import { MENU } from "../data/menu";
import { CONFIG } from "../data/config";
import { waLink, WA_MSG } from "../lib/whatsapp";
import CategoryChips from "./CategoryChips";
import DishCard from "./DishCard";
import SectionTitle from "./SectionTitle";

export default function Menu() {
  const [activeId, setActiveId] = useState(MENU[0].id);

  // Resalta el chip de la categoría que está a la vista (IntersectionObserver ligero)
  useEffect(() => {
    const sections = MENU.map((c) => document.getElementById(`cat-${c.id}`)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id.replace("cat-", "")));
      },
      // Franja angosta justo debajo del header + chips fijos
      { rootMargin: "-186px 0px -65% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="carta" aria-labelledby="titulo-carta" className="scroll-mt-[116px] bg-crema">
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <SectionTitle id="titulo-carta">Nuestra carta</SectionTitle>

        {/* Aviso de precios (decisión: carta sin precios, se consultan por WhatsApp) */}
        <div className="mt-5 flex flex-col gap-3 rounded-xl border-2 border-dashed border-maderaclaro bg-ascua/20 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">
            {CONFIG.SHOW_PRICES
              ? "Precios sujetos a cambios. ¿Dudas? Consultalos por WhatsApp o en el local."
              : "Precios actualizados todos los días. Consultalos por WhatsApp o en el local."}
          </p>
          <a href={waLink(WA_MSG.precios)} target="_blank" rel="noopener noreferrer" className="btn-wa shrink-0">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {CONFIG.SHOW_PRICES ? "Consultar por WhatsApp" : "Consultar precios"}
          </a>
        </div>
      </div>

      {/* Chips sticky pegados debajo del header fijo */}
      <div className="sticky top-[116px] z-30 mt-4 border-b border-madera/20 bg-crema">
        <div className="mx-auto max-w-6xl">
          <CategoryChips variant="sticky" activeId={activeId} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-10 px-4 pb-6 pt-6">
        {MENU.map((cat) => (
          <section key={cat.id} id={`cat-${cat.id}`} aria-labelledby={`t-${cat.id}`} className="scroll-mt-[186px]">
            <h3 id={`t-${cat.id}`} className="mb-3 font-display text-2xl font-extrabold md:text-3xl">
              {cat.title}
            </h3>
            {/* Móvil: carrusel con scroll nativo. md: 3 columnas. lg: 4 columnas. */}
            <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-4">
              {cat.items.map((item) => (
                <li key={item.name} className="w-[72%] shrink-0 snap-start sm:w-[45%] md:w-auto">
                  <DishCard item={item} />
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="text-center">
          <a
            href={CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-brasa underline underline-offset-4 hover:text-fuego"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
            Mirá los platos del día en Instagram
          </a>
        </p>
      </div>
    </section>
  );
}
