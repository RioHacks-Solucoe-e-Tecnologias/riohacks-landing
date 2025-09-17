import VideoThumb from "@/public/images/background.png";
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
              <div className="mb-6 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-indigo-200/70" data-aos="fade-up" data-aos-delay={150}>
                <span className="rounded-full bg-indigo-700/10 px-2 py-1 sm:px-3">Alavanque seu Negócio</span>
                <span className="rounded-full bg-indigo-700/10 px-2 py-1 sm:px-3">Otimize seus Processos</span>
                <span className="rounded-full bg-indigo-700/10 px-2 py-1 sm:px-3">Aumente seu Faturamento</span>
              </div>

              <p
                className="mb-8 text-lg sm:text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Na RioHacks utilizamos tecnologia de ponta e estratégias inovadoras para oferecer soluções diferenciadas. Não se limite ao comum! Conte conosco para transformar seu negócio ou projeto.
              </p>

              {/* CONTAINER DOS BOTÕES - SEMPRE LADO A LADO */}
              <div className="flex flex-row items-center justify-center gap-2 sm:gap-4" data-aos="fade-up" data-aos-delay={400}>
                {/* Botão WhatsApp */}
                <a
                  className="group relative inline-flex items-center justify-center px-3 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base font-medium text-white rounded-lg sm:rounded-xl bg-gradient-to-r from-[#0b1a44] via-[#12285f] to-[#1c3a80] hover:from-[#1c3a80] hover:via-[#12285f] hover:to-[#0b1a44] transition-all duration-300 shadow-lg hover:shadow-xl flex-1 max-w-[160px] sm:max-w-none sm:flex-initial"
                  href="https://wa.me/5593991963307"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    <span className="hidden sm:inline">Falar no WhatsApp</span>
                    <span className="sm:hidden">WhatsApp</span>
                    <span className="ml-1 sm:ml-2 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>

                {/* Botão Proposta */}
                <a
                  className="group relative inline-flex items-center justify-center px-3 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base font-medium text-gray-300 rounded-lg sm:rounded-xl bg-gradient-to-b from-gray-800 to-gray-800/60 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl flex-1 max-w-[160px] sm:max-w-none sm:flex-initial"
                  href="#contact"
                >
                  <span className="relative inline-flex items-center">
                    <span className="hidden sm:inline">Solicitar uma proposta</span>
                    <span className="sm:hidden">Proposta</span>
                  </span>
                </a>
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