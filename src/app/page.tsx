import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Rooms } from "@/components/Rooms";
import { Amenities } from "@/components/Amenities";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Gallery = dynamic(
  () => import("@/components/Gallery").then((m) => ({ default: m.Gallery })),
  { loading: () => <section className="min-h-[400px]" /> }
);
const Proximity = dynamic(
  () =>
    import("@/components/Proximity").then((m) => ({ default: m.Proximity })),
  { loading: () => <section className="min-h-[400px]" /> }
);
const MapSection = dynamic(
  () =>
    import("@/components/MapSection").then((m) => ({ default: m.MapSection })),
  { loading: () => <section className="min-h-[300px]" /> }
);
const Testimonials = dynamic(
  () =>
    import("@/components/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { loading: () => <section className="min-h-[300px]" /> }
);
const Contact = dynamic(
  () => import("@/components/Contact").then((m) => ({ default: m.Contact })),
  { loading: () => <section className="min-h-[400px]" /> }
);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Proximity />
        <MapSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
