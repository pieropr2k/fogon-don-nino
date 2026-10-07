import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import PromoBanners from "./components/PromoBanners";
import HowToOrder from "./components/HowToOrder";
import Reservations from "./components/Reservations";
import HoursAndLocation from "./components/HoursAndLocation";
import Story from "./components/Story";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      {/* Bloque fijo: barra de aviso (36 px) + header (80 px) = 116 px */}
      <div className="fixed inset-x-0 top-0 z-50">
        <AnnouncementBar />
        <Header />
      </div>

      <main className="pt-[116px]">
        <Hero />
        <Menu />
        <PromoBanners />
        <HowToOrder />
        <Reservations />
        <HoursAndLocation />
        <Story />
        <Faq />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
