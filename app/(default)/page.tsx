export const metadata = {
  title: "Home - RioHacks",
  description: "Soluções tecnológicas: desenvolvimento, IA, integração e consultoria",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Services />
      <Workflows />
      <Features />
      <Testimonials />
      <Contact />
      <Cta />
    </>
  );
}
