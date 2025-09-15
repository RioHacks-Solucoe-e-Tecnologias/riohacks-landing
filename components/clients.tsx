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

// Imagens da NortePlay
import Norteplay0 from "@/public/images/norteplay/norteplay0.png";
import Norteplay1 from "@/public/images/norteplay/norteplay1.jpg";
import Norteplay2 from "@/public/images/norteplay/norteplay2.jpeg";

// Imagens da AlterdoChaoWine
import Alterdochao0 from "@/public/images/alterdochaowine/alterdochaowine0.jpg";
import Alterdochao1 from "@/public/images/alterdochaowine/alterdochaowine1.jpg";
import Alterdochao2 from "@/public/images/alterdochaowine/alterdochaowine2.png";

// Imagens da DrRegulariza
import Drregulariza0 from "@/public/images/drregulariza/drregulariza0.png";
import Drregulariza1 from "@/public/images/drregulariza/drregulariza1.png";
import Drregulariza2 from "@/public/images/drregulariza/drregulariza2.jpeg";
import Drregulariza3 from "@/public/images/drregulariza/drregulariza3.png";

// Imagens da DuNorte Cred
import Dunortecred0 from "@/public/images/dunortecred/dunortecred0.jpg";
import Dunortecred1 from "@/public/images/dunortecred/dunortecred1.jpg";
import Dunortecred2 from "@/public/images/dunortecred/dunortecred2.jpg";
import Dunortecred3 from "@/public/images/dunortecred/dunortecred3.jpg";

// Imagens da LbIn
import LbIn0 from "@/public/images/lbin/lbin0.png";
import LbIn1 from "@/public/images/lbin/lbin1.png";
import LbIn2 from "@/public/images/lbin/lbin2.png";

// Imagens da ServeApp
import Serveapp0 from "@/public/images/serveapp/serveapp0.jpg";
import Serveapp1 from "@/public/images/serveapp/serveapp1.jpeg";
import Serveapp2 from "@/public/images/serveapp/serveapp2.jpeg";
import Serveapp3 from "@/public/images/serveapp/serveapp3.jpeg";
import Serveapp4 from "@/public/images/serveapp/serveapp4.png";

// Imagens do Mirantes
import Mirantes0 from "@/public/images/mirante/mirante0.png";
import Mirantes1 from "@/public/images/mirante/mirante1.png";
import Mirantes2 from "@/public/images/mirante/mirante2.png";
import Mirantes3 from "@/public/images/mirante/mirante3.png";

// Imagens do CorrerIA
import CorrerIA0 from "@/public/images/correria/correria0.jpeg";
import CorrerIA1 from "@/public/images/correria/correria1.jpeg";
import CorrerIA2 from "@/public/images/correria/correria2.jpeg";

// Imagens do Gui360
import Gui360_0 from "@/public/images/gui360/gui0.png";
import Gui360_1 from "@/public/images/gui360/gui1.png";
import Gui360_2 from "@/public/images/gui360/gui2.png";
import Gui360_3 from "@/public/images/gui360/gui3.png";

// Imagens da Amelia
import Amelias0 from "@/public/images/amelias/amelias0.jpg";
import Amelias1 from "@/public/images/amelias/amelias1.jpg";
import Amelias2 from "@/public/images/amelias/amelias2.jpg";
import Amelias3 from "@/public/images/amelias/amelias3.jpg";

// Imagens da CasadoIvo
import CasadoIvo0 from "@/public/images/casadoivo/casadoivo0.png";
import CasadoIvo1 from "@/public/images/casadoivo/casadoivo1.png";
import CasadoIvo2 from "@/public/images/casadoivo/casadoivo2.jpg";

// Imagens da Vivervideos
import Vivervideos0 from "@/public/images/vivervideos/vivervideos0.jpg";
import Vivervideos1 from "@/public/images/vivervideos/vivervideos1.jpeg";
import Vivervideos2 from "@/public/images/vivervideos/vivervideos2.jpeg";

// Imagens da AutSeg
import AutSeg0 from "@/public/images/autseg/autseg0.png";
import AutSeg1 from "@/public/images/autseg/autseg1.png";
import AutSeg2 from "@/public/images/autseg/autseg2.png";

export default function Clients() {
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clientLogos = [
    { 
      src: ClientLogo01, 
      alt: "Norteplay", 
      description: `
        A Norteplay é uma empresa que, através do seu app, conecta atletas para competir e interagir.

        <strong>Ranking Exclusivo:</strong> Dispute posições em rankings dinâmicos e mostre sua evolução.  
        <strong>Descubra Eventos:</strong> Acesse eventos esportivos próximos e participe diretamente pela plataforma.

        Para <strong>Organizadores de Eventos</strong>:
        <ul style="text-align:left; display:inline-block; margin: 0 auto;">  
          <li>• <strong>Gestão Completa:</strong> Crie, gerencie e promova seus eventos esportivos com facilidade.</li> 
          <li>• <strong>Divulgação Direcionada:</strong> Alcance seu público-alvo diretamente na plataforma.</li>
          <li>• <strong>Inscrições Simplificadas:</strong> Todo o processo de inscrição e pagamento é feito online, de forma prática e segura.</li>
        </ul>

        Para <strong>Donos de Times e Clubes</strong>:
        <ul style="text-align:left; display:inline-block; margin: 0 auto;">  
          <li>• <strong>Encontre Novos Talentos:</strong> Acompanhe rankings e descubra atletas promissores.</li>  
          <li>• <strong>Gestão de Clubes e Equipes:</strong> Organize seus times, cadastre jogadores e gerencie competições internas.</li> 
          <li>• <strong>Conexão e Visibilidade:</strong> Fortaleça sua presença no cenário esportivo amador.</li>
        </ul>

        A Rio Hacks desenvolveu <strong>o app</strong> e <strong>o site de divulgação</strong>.
        `,
      images: [Norteplay0, Norteplay1, Norteplay2]
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
      description: "Soluções jurídicas especializadas em regularização de documentos.",
      images: [Drregulariza0, Drregulariza1, Drregulariza2, Drregulariza3]
    },
    { 
      src: ClientLogo04, 
      alt: "DuNorteCred", 
      description: "Sistema financeiro cooperativo para a região norte.",
      images: [Dunortecred0, Dunortecred1, Dunortecred2, Dunortecred3]
    },
    { 
      src: ClientLogo05, 
      alt: "LBIN", 
      description: "Laboratório de inovação e tecnologia da Amazônia.",
      images: [LbIn0, LbIn1, LbIn2]
    },
    { 
      src: ClientLogo06, 
      alt: "ServeApp", 
      description: "Plataforma de delivery e serviços locais.",
      images: [Serveapp0, Serveapp1, Serveapp2, Serveapp3, Serveapp4]
    },
    { 
      src: ClientLogo07, 
      alt: "Mirante", 
      description: "Sistema de monitoramento e segurança patrimonial.",
      images: [Mirantes0, Mirantes1, Mirantes2, Mirantes3]
    },
    { 
      src: ClientLogo08, 
      alt: "Correr IA", 
      description: "Soluções em inteligência artificial para negócios.",
      images: [CorrerIA0, CorrerIA1, CorrerIA2]
    },
    { 
      src: ClientLogo09, 
      alt: "Gui360", 
      description: "Guia turístico digital com realidade aumentada.",
      images: [Gui360_0, Gui360_1, Gui360_2, Gui360_3]
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
      description: "Hospitalidade e turismo com tecnologia integrada.",
      images: [CasadoIvo0, CasadoIvo1, CasadoIvo2]
    },
    { 
      src: ClientLogo12, 
      alt: "Viver Vídeos", 
      description: "Produção audiovisual e marketing digital.",
      images: [Vivervideos0, Vivervideos1, Vivervideos2]
    },
    { 
      src: ClientLogo13, 
      alt: "Aut Seg", 
      description: "Sistemas de automação e segurança eletrônica.",
      images: [AutSeg0, AutSeg1, AutSeg2]
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