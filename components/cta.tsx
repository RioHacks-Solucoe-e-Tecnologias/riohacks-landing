import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Está pronto para impulsionar seu negócio?
            </h2>
            <p className="mb-8 text-lg text-indigo-200/65">
              Na RioHacks, oferecemos soluções tecnológicas personalizadas que
              atendem às necessidades específicas da sua empresa. Entre em
              contato com nossa equipe e descubra como podemos ajudar sua
              empresa a crescer, inovar e se destacar no mercado. Solicite agora
              um orçamento sem compromisso e descubra o que a tecnologia pode
              fazer pelo seu negócio!
            </p>
            
            {/* CONTAINER DO BOTÃO RESPONSIVO */}
            <div className="flex justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-[#0b1a44] via-[#12285f] to-[#1c3a80] hover:from-[#1c3a80] hover:via-[#12285f] hover:to-[#0b1a44] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group whitespace-nowrap"
                  href="https://wa.me/5593991963307"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Solicitar uma proposta
                    <span className="ml-2 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}