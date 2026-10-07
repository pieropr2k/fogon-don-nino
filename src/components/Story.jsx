import SectionTitle from "./SectionTitle";

// Tres generaciones, una sola brasa.
const FAMILY = [
  { name: "Don Nino", role: "El que encendió el fuego" },
  { name: "Ricardo", role: "Su hijo, la receta de siempre" },
  { name: "Facu", role: "Su nieto, la brasa de hoy" },
];

export default function Story() {
  return (
    <section id="historia" aria-labelledby="titulo-historia" className="scroll-mt-[116px] bg-humo py-12 text-crema md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:gap-14">
        <div>
          <SectionTitle id="titulo-historia" dark>
            Ya son 40 años en el barrio
          </SectionTitle>

          <div className="mt-5 space-y-3 text-lg text-crema/90">
            <p>
              Don Nino encendió la primera brasa hace cuarenta años, en este mismo barrio. Desde entonces el fuego no
              se apagó.
            </p>
            <p>
              Hoy la parrilla sigue en familia: Ricardo, su hijo, y Facu, su nieto, cuidan la receta y el trato de
              siempre. Fierro, madera y brasa: así se cocina acá.
            </p>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {FAMILY.map((p) => (
              <li key={p.name} className="rounded-xl border-l-4 border-ascua bg-carbon/40 px-4 py-3">
                <p className="font-chip text-lg font-semibold uppercase tracking-wide text-ascua">{p.name}</p>
                <p className="text-base text-crema/85">{p.role}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* PLACEHOLDER: reemplazar por foto familiar o del local */}
        <figure className="relative">
          <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-xl bg-madera" />
          <img
            src="/img/barrio_years.jpg"
            alt="Tres generaciones de la familia frente a la parrilla de El Fogón de Don Nino"
            loading="lazy"
            width="600"
            height="450"
            className="relative w-full rounded-xl object-cover shadow-calido ring-2 ring-maderaclaro"
          />
          <figcaption className="relative mt-5 text-center font-chip text-lg font-medium uppercase tracking-wide text-ascua">
            Tres generaciones, una sola brasa.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
