export const metadata = {
  title: "Riohacks – Soluções tecnológicas",
  description:
    "Na RioHacks utilizamos tecnologia de ponta e estratégias inovadoras para oferecer soluções diferenciadas. Não se limite ao comum! Conte conosco para transformar seu negócio ou projeto.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Marquee from "@/components/marquee";
import Services from "@/components/services";
import Clients from "@/components/clients";
import Workflows from "@/components/workflows";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Cta from "@/components/cta";
import BackgroundEffect from "@/components/backgroundeffect";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <BackgroundEffect />
        </div>
        <PageIllustration />
        <Hero />
        <Marquee />
      </section>
      <main className="relative z-10">
        <Services />
        <Clients />
        <Workflows />
        <Testimonials />
        <Contact />
        <Cta />
      </main>
    </div>
  );
}
