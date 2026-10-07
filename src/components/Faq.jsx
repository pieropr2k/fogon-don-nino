import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "../data/faq";
import SectionTitle from "./SectionTitle";

// Acordeón accesible: cada pregunta es un botón con aria-expanded.
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" aria-labelledby="titulo-faq" className="scroll-mt-[116px] fondo-madera py-12 text-crema">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle id="titulo-faq" dark>Preguntas frecuentes</SectionTitle>
        <div className="mt-6 space-y-3">
          {FAQ.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl bg-carbon/55 ring-1 ring-maderaclaro/40">
                <h3 className="font-body">
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 py-3 text-left text-lg font-bold"
                  >
                    {item.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-ascua transition-transform ${open ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!open}>
                  <p className="px-4 pb-4 text-crema/90">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
