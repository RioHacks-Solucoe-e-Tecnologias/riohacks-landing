import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features-rio.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <section id="oque-fazemos">
                <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  Conheça nossos serviços
                </span>
              </section>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              O que fazemos
            </h2>
            <p className="text-lg text-indigo-200/65">
              Serviços pensados para acelerar a transformação digital da sua empresa.
            </p>
          </div>
          
          {/* IMAGEM RESPONSIVA - ALTERAÇÃO AQUI */}
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
              <Image
                className="w-full h-auto object-contain rounded-lg"
                src={FeaturesImage}
                width={1104}
                height={384}
                alt="Features"
                priority
              />
            </div>
          </div>
          
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            
            {/* Desenvolvimento de Sistemas sob Medida */}
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M7 2H17C18.1 2 19 2.9 19 4V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V4C5 2.9 5.9 2 7 2Z" fillOpacity="0.3"/>
                <path d="M8 6h8M8 8h8M8 10h5"/>
                <rect x="9" y="14" width="6" height="4" rx="1"/>
                <circle cx="12" cy="16" r="1"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Desenvolvimento de Sistemas sob Medida
              </h3>
              <p className="text-indigo-200/65">
                Criamos software exclusivo para atender suas necessidades específicas e processos únicos. Soluções escaláveis e seguras, do conceito à implantação e manutenção.
              </p>
            </article>

            {/* Integração de Sistemas */}
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <circle cx="8" cy="12" r="6" fillOpacity="0.2"/>
                <circle cx="16" cy="12" r="6" fillOpacity="0.2"/>
                <circle cx="8" cy="12" r="2"/>
                <circle cx="16" cy="12" r="2"/>
                <path d="M10 12h4" strokeWidth="2"/>
                <path d="M6 10l-2-2M6 14l-2 2M18 10l2-2M18 14l2 2" strokeWidth="1"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Integração de Sistemas
              </h3>
              <p className="text-indigo-200/65">
                Conectamos todas as suas plataformas e softwares em um ecossistema unificado. Eliminamos ilhas de informação e automatizamos fluxos entre diferentes sistemas.
              </p>
            </article>

            {/* Consultoria em Transformação Digital */}
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <rect x="3" y="3" width="18" height="18" rx="2" fillOpacity="0.1"/>
                <path d="M7 14l3-3 2 2 5-5" strokeWidth="2" fill="none"/>
                <circle cx="7" cy="14" r="1"/>
                <circle cx="10" cy="11" r="1"/>
                <circle cx="12" cy="13" r="1"/>
                <circle cx="17" cy="8" r="1"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Consultoria em Transformação Digital
              </h3>
              <p className="text-indigo-200/65">
                Acompanhamos sua empresa na jornada de digitalização de processos e operações. Estratégias personalizadas para modernização tecnológica e inovação contínua.
              </p>
            </article>

            {/* Gestão de Tráfego Pago */}
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <circle cx="12" cy="12" r="10" fillOpacity="0.1"/>
                <circle cx="12" cy="12" r="6" fillOpacity="0.2"/>
                <circle cx="12" cy="12" r="2"/>
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeWidth="1"/>
                <path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M17.66 6.34l-2.83 2.83M9.17 14.83l-2.83 2.83" strokeWidth="1"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Gestão de Tráfego Pago
              </h3>
              <p className="text-indigo-200/65">
                Estratégias de anúncios online para atrair o público certo e maximizar seu ROI. Campanhas otimizadas no Google, Meta e outras plataformas para converter cliques em clientes.
              </p>
            </article>

            {/* Soluções em IA e ML */}
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <circle cx="12" cy="12" r="8" fillOpacity="0.1"/>
                <circle cx="9" cy="10" r="1"/>
                <circle cx="15" cy="10" r="1"/>
                <path d="M12 3v2M21 12h-2M12 21v-2M3 12h2" strokeWidth="2"/>
                <path d="M8 8l1.5 1.5M16 8l-1.5 1.5M8 16l1.5-1.5M16 16l-1.5-1.5" strokeWidth="2"/>
                <ellipse cx="12" cy="15" rx="3" ry="1" fillOpacity="0.3"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Soluções em Inteligência Artificial e Machine Learning
              </h3>
              <p className="text-indigo-200/65">
                Desenvolvemos modelos preditivos e sistemas inteligentes personalizados para seu negócio. Análise de dados, automação de processos e insights estratégicos sob medida.
              </p>
            </article>

            {/* Desenvolvimento de Sites e E-commerce */}
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <rect x="2" y="3" width="20" height="14" rx="2" fillOpacity="0.1"/>
                <rect x="4" y="6" width="16" height="8" fillOpacity="0.2"/>
                <path d="M8 10h8M8 12h6" strokeWidth="1"/>
                <circle cx="6" cy="8" r="0.5"/>
                <circle cx="7.5" cy="8" r="0.5"/>
                <circle cx="9" cy="8" r="0.5"/>
                <rect x="6" y="19" width="12" height="2" rx="1"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Desenvolvimento de Sites e E-commerce
              </h3>
              <p className="text-indigo-200/65">
                Criação de plataformas digitais modernas, responsivas e de alta conversão. Lojas virtuais completas com integração de pagamentos e gestão de pedidos.
              </p>
            </article>

            {/* Chatbot e CRM Personalizados */}
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <rect x="4" y="8" width="16" height="10" rx="3" fillOpacity="0.2"/>
                <circle cx="10" cy="12" r="1"/>
                <circle cx="14" cy="12" r="1"/>
                <path d="M9 15s1 1 3 1 3-1 3-1" strokeWidth="1" fill="none"/>
                <circle cx="12" cy="5" r="2" fillOpacity="0.3"/>
                <rect x="2" y="13" width="2" height="3" rx="1"/>
                <rect x="20" y="13" width="2" height="3" rx="1"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Chatbot e CRM Personalizados
              </h3>
              <p className="text-indigo-200/65">
                Sistemas de atendimento inteligente que automatizam conversas e organizam dados de clientes. Integração completa com seus canais de comunicação para melhor experiência.
              </p>
            </article>

            {/* Capacitação e Treinamento Personalizados */}
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <rect x="3" y="4" width="18" height="12" rx="2" fillOpacity="0.1"/>
                <path d="M7 8h10M7 10h8M7 12h6" strokeWidth="1"/>
                <circle cx="20" cy="18" r="3" fillOpacity="0.3"/>
                <path d="M18 18h4M20 16v4" strokeWidth="1"/>
                <rect x="10" y="16" width="4" height="6" fillOpacity="0.2"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Capacitação e Treinamento Personalizados
              </h3>
              <p className="text-indigo-200/65">
                Programas de treinamento desenvolvidos especificamente para sua equipe e tecnologias. Desenvolvimento de habilidades técnicas e gestão do conhecimento organizacional.
              </p>
            </article>

            {/* Realização de Eventos Técnicos */}
            <article>
              <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <circle cx="12" cy="12" r="8" fillOpacity="0.1"/>
                <rect x="8" y="8" width="8" height="8" rx="1" fillOpacity="0.2"/>
                <circle cx="10" cy="10" r="1"/>
                <circle cx="14" cy="10" r="1"/>
                <circle cx="10" cy="14" r="1"/>
                <circle cx="14" cy="14" r="1"/>
                <path d="M7 7l10 10M17 7L7 17" strokeWidth="0.5" fillOpacity="0.5"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Realização de Eventos Técnicos
              </h3>
              <p className="text-indigo-200/65">
                Organização completa de workshops, hackathons e conferências tecnológicas. Desde a concepção temática até a gestão de participantes e infraestrutura.
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}