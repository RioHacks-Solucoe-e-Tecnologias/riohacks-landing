import Link from "next/link";
import Image from "next/image";
import ClientLogo01 from "@/public/images/logo-norteplay.png";
import ClientLogo02 from "@/public/images/client-logo-02.svg";
import ClientLogo03 from "@/public/images/client-logo-03.svg";
import ClientLogo04 from "@/public/images/client-logo-04.svg";
import ClientLogo05 from "@/public/images/client-logo-05.svg";
import ClientLogo06 from "@/public/images/client-logo-06.svg";
import ClientLogo07 from "@/public/images/client-logo-07.svg";
import ClientLogo08 from "@/public/images/client-logo-08.svg";
import ClientLogo09 from "@/public/images/client-logo-09.svg";

export default function Clients() {
  const clientLogos = [
    { src: ClientLogo01, alt: "Aetha", link: "https://aetha.com.br" },
    { src: ClientLogo02, alt: "Casa do Ivo", link: "https://casadoivo.com.br" },
    { src: ClientLogo03, alt: "LBIN", link: "https://lbin.com.br" },
    { src: ClientLogo04, alt: "Mirantel", link: "https://mirantelp.com.br" },
    { src: ClientLogo05, alt: "Nossa Saúde", link: "https://nossasaude.site" },
    { src: ClientLogo06, alt: "Rede Riba", link: "https://rederiba.org" },
    { src: ClientLogo07, alt: "RioHacks", link: "https://riohacks.com.br" },
    {
      src: ClientLogo08,
      alt: "Correr IA",
      link: "https://www.instagram.com/correr_ia",
    },
    { src: ClientLogo09, alt: "Client 9", link: "https://riohacks.com.br" },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-8 text-center">
            <section id="clientes">
              <h2 className="text-3xl font-semibold">Nossos Clientes</h2>
            </section>
          </div>

          <div className="mx-auto grid max-w-lg grid-cols-2 gap-6 sm:max-w-none sm:grid-cols-4 md:grid-cols-4">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-md border border-gray-800/40 p-4 transition-opacity hover:opacity-75"
              >
                <Link
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={100}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
