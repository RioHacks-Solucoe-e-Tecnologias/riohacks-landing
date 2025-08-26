import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Soluções de Negócios & Inovação & Tecnologia
            </h1>

            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex justify-center gap-3 text-sm text-indigo-200/70" data-aos="fade-up" data-aos-delay={150}>
                <span className="rounded-full bg-indigo-700/10 px-3 py-1">Alavanque seu Negócio</span>
                <span className="rounded-full bg-indigo-700/10 px-3 py-1">Otimize seus Processos</span>
                <span className="rounded-full bg-indigo-700/10 px-3 py-1">Aumente seu Faturamento</span>
              </div>

              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Na RioHacks utilizamos tecnologia de ponta e estratégias inovadoras para oferecer soluções diferenciadas. Não se limite ao comum! Conte conosco para transformar seu negócio ou projeto.
              </p>

              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-medium text-white rounded-xl bg-gradient-to-r from-[#0b1a44] via-[#12285f] to-[#1c3a80] hover:from-[#1c3a80] hover:via-[#12285f] hover:to-[#0b1a44] transition-all duration-300 shadow-lg"
                    href="https://wa.me/5593991963307"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      Falar no WhatsApp
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">-&gt;</span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#contact"
                  >
                    Solicitar uma proposta
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
