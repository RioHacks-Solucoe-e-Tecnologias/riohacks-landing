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
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Marquee />
      <Services />
      <Clients />
      <Workflows />
      <Features />
      <Testimonials />
      <Contact />
      <Cta />
    </>
  );
}
