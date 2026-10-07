import { Flame } from "lucide-react";
import { CONFIG } from "../data/config";

// Tarjeta de plato: foto (o relleno), nombre, descripción corta.
// El precio solo aparece si SHOW_PRICES es true Y el plato tiene price (nunca "null" ni "$0").
export default function DishCard({ item }) {
  const showPrice = CONFIG.SHOW_PRICES && item.price;

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-xl bg-white/60 shadow-calido ring-1 ${
        item.featured ? "ring-2 ring-ascua" : "ring-madera/20"
      }`}
    >
      <div className="relative aspect-[4/3] bg-humo">
        {item.image ? (
          <img
            src={item.image}
            alt={`${item.name}: ${item.description}`}
            loading="lazy"
            width="400"
            height="300"
            className="h-full w-full object-cover"
          />
        ) : (
          // Relleno elegante hasta tener la foto real
          <>
            <img
              src="/img/dish-placeholder.svg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              width="400"
              height="300"
              className="h-full w-full object-cover"
            />
            <Flame className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-ascua/70" aria-hidden="true" />
          </>
        )}
        {item.badge && (
          <span className="absolute left-2 top-2 rounded-full bg-ascua px-3 py-1 text-sm font-extrabold text-carbon shadow">
            {item.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h4 className="font-display text-xl font-bold leading-tight">{item.name}</h4>
        <p className="mt-1 text-base text-carbon/80">{item.description}</p>
        {showPrice && <p className="mt-2 font-bold text-brasa">{item.price}</p>}
      </div>
    </article>
  );
}
