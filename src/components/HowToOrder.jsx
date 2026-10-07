import { Utensils, ShoppingBag, Bike, MessageCircle } from "lucide-react";
import { CONFIG } from "../data/config";
import { waLink, WA_MSG } from "../lib/whatsapp";
import SectionTitle from "./SectionTitle";

function OrderCard({ icon: Icon, title, text, children }) {
  return (
    <li className="flex flex-col rounded-xl bg-humo p-6 ring-1 ring-madera md:p-8">
      <Icon className="h-10 w-10 text-ascua" aria-hidden="true" />
      <h3 className="mt-3 font-display text-2xl font-extrabold text-crema">{title}</h3>
      <p className="mb-5 mt-1 flex-1 text-crema/85">{text}</p>
      {children}
    </li>
  );
}

export default function HowToOrder() {
  const hasDelivery = Boolean(CONFIG.deliveryUrl);

  return (
    <section id="como-pedir" aria-labelledby="titulo-pedir" className="scroll-mt-[116px] bg-carbon py-12 text-crema md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle id="titulo-pedir" dark>
          Cómo pedir
        </SectionTitle>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          <OrderCard icon={Utensils} title="Salón" text="Veníte a comer al salón. Los findes, reservá.">
            <a href={waLink(WA_MSG.reservar)} target="_blank" rel="noopener noreferrer" className="btn-brasa">
              Reservar
            </a>
          </OrderCard>

          <OrderCard icon={ShoppingBag} title="Take Away" text="Pedí por WhatsApp, retirá y listo.">
            <a href={waLink(WA_MSG.takeaway)} target="_blank" rel="noopener noreferrer" className="btn-wa">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Pedir por WhatsApp
            </a>
          </OrderCard>

          <OrderCard icon={Bike} title="Delivery" text="Pedinos por app.">
            {hasDelivery ? (
              <a href={CONFIG.deliveryUrl} target="_blank" rel="noopener noreferrer" className="btn-brasa">
                Pedir por la app
              </a>
            ) : (
              // PENDIENTE: app de delivery sin confirmar. Se activa solo al completar CONFIG.deliveryUrl
              <button
                type="button"
                disabled
                className="btn cursor-not-allowed border-2 border-maderaclaro text-crema/80"
              >
                Próximamente
              </button>
            )}
          </OrderCard>
        </ul>
      </div>
    </section>
  );
}
