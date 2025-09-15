"use client";

import { useState } from "react";
import Image from "next/image";
import ClientLogo01 from "@/public/images/logo-norteplay.png";
import ClientLogo02 from "@/public/images/logo-alterdochaowine.png";
import ClientLogo03 from "@/public/images/logo-drregulariza.png";
import ClientLogo04 from "@/public/images/logo-dunortecred.png";
import ClientLogo05 from "@/public/images/logo-lbin.png";
import ClientLogo06 from "@/public/images/logo-serveapp.png";
import ClientLogo07 from "@/public/images/logo-mirante.png";
import ClientLogo08 from "@/public/images/logo-correria.png";
import ClientLogo09 from "@/public/images/logo-gui360.png";
import ClientLogo10 from "@/public/images/logo-amelias.png";
import ClientLogo11 from "@/public/images/logo-casadoivo.png";
import ClientLogo12 from "@/public/images/logo-vivervideos.png";
import ClientLogo13 from "@/public/images/logo-autseg.png";
import ClientModal from "@/components/clientmodal";

// Imagens da AlterdoChaoWine
import Alterdochao0 from "@/public/images/alterdochaowine/alterdochaowine0.jpg";
import Alterdochao1 from "@/public/images/alterdochaowine/alterdochaowine1.jpg";
import Alterdochao2 from "@/public/images/alterdochaowine/alterdochaowine2.png";

// Imagens da Amelia
import Amelias0 from "@/public/images/amelias/amelias0.jpg";
import Amelias1 from "@/public/images/amelias/amelias1.jpg";
import Amelias2 from "@/public/images/amelias/amelias2.jpg";
import Amelias3 from "@/public/images/amelias/amelias3.jpg";

// Adicione imagens adicionais para o carrossel se desejar
// import ExemploImagem1 from "@/public/images/exemplo1.jpg";
// import ExemploImagem2 from "@/public/images/exemplo2.jpg";

export default function Clients() {
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clientLogos = [
    { 
      src: ClientLogo01, 
      alt: "Norteplay", 
      description: "Plataforma de streaming regional com tecnologia avançada.",
      // images: [ClientLogo01, ExemploImagem1, ExemploImagem2] // Adicione mais imagens se quiser
    },
    { 
      src: ClientLogo02, 
      alt: "Alter do Chão Wine", 
      description: "Vinícola premium com foco em experiências enogastronômicas.",
      images: [Alterdochao0, Alterdochao1, Alterdochao2]
    },
    { 
      src: ClientLogo03, 
      alt: "Dr Regulariza", 
      description: "Soluções jurídicas especializadas em regularização de documentos."
    },
    { 
      src: ClientLogo04, 
      alt: "DuNorteCred", 
      description: "Sistema financeiro cooperativo para a região norte."
    },
    { 
      src: ClientLogo05, 
      alt: "LBIN", 
      description: "Laboratório de inovação e tecnologia da Amazônia."
    },
    { 
      src: ClientLogo06, 
      alt: "ServeApp", 
      description: "Plataforma de delivery e serviços locais."
    },
    { 
      src: ClientLogo07, 
      alt: "Mirante", 
      description: "Sistema de monitoramento e segurança patrimonial."
    },
    { 
      src: ClientLogo08, 
      alt: "Correr IA", 
      description: "Soluções em inteligência artificial para negócios."
    },
    { 
      src: ClientLogo09, 
      alt: "Gui360", 
      description: "Guia turístico digital com realidade aumentada."
    },
    { 
      src: ClientLogo10, 
      alt: "Amélias da Amazônia", 
      description: "Artesanato sustentável e cultura regional.",
      images: [Amelias0, Amelias1, Amelias2, Amelias3]
    },
    { 
      src: ClientLogo11, 
      alt: "Casa do Ivo", 
      description: "Hospitalidade e turismo com tecnologia integrada."
    },
    { 
      src: ClientLogo12, 
      alt: "Viver Vídeos", 
      description: "Produção audiovisual e marketing digital."
    },
    { 
      src: ClientLogo13, 
      alt: "Aut Seg", 
      description: "Sistemas de automação e segurança eletrônica."
    },
  ];

  const handleClientClick = (client: any) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-8 text-center">
            <section id="clientes">
              <h2 className="text-3xl font-semibold">Nossos Clientes</h2>
            </section>
          </div>

          <div className="mx-auto grid max-w-lg grid-cols-2 gap-6 sm:max-w-none sm:grid-cols-3 md:grid-cols-4">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-md border border-gray-800/40 p-8 transition-all hover:scale-105 hover:border-indigo-500/30 cursor-pointer"
                onClick={() => handleClientClick(client)}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={100}
                    height={40}
                    className="h-16 w-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedClient && (
            <ClientModal
              client={selectedClient}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          )}
        </div>
      </div>
    </section>
  );
}