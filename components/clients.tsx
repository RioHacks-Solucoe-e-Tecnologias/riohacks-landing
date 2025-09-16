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
import LbIn3 from "@/public/images/lbin/lbin3.png";

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
          • <strong>Gestão Completa:</strong> Crie, gerencie e promova seus eventos esportivos com facilidade.
          • <strong>Divulgação Direcionada:</strong> Alcance seu público-alvo diretamente na plataforma.
          • <strong>Inscrições Simplificadas:</strong> Todo o processo de inscrição e pagamento é feito online, de forma prática e segura.
        </ul>

        Para <strong>Donos de Times e Clubes</strong>:
        <ul style="text-align:left; display:inline-block; margin: 0 auto;">  
          • <strong>Encontre Novos Talentos:</strong> Acompanhe rankings e descubra atletas promissores. 
          • <strong>Gestão de Clubes e Equipes:</strong> Organize seus times, cadastre jogadores e gerencie competições internas. 
          • <strong>Conexão e Visibilidade:</strong> Fortaleça sua presença no cenário esportivo amador.
        </ul>

        A Rio Hacks desenvolveu <strong>o app</strong> e <strong>o site de divulgação</strong>.
        `,
      images: [Norteplay0, Norteplay1, Norteplay2]
    },
    { 
      src: ClientLogo02, 
      alt: "Alter do Chão Wine", 
      description: `
      <strong>Do coração da Amazônia para o Mundo!</strong>

      Somos o <strong>primeiro vinho feito a partir da polpa do açaí</strong>, com 20% de sua composição oriunda dos resíduos do açaí — um grande fator de <strong>sustentabilidade</strong>

      Com muito orgulho somos da cidade de <strong>Santarém</strong>, no Estado do <strong>Pará</strong>.

      Somos uma <strong>Startup</strong> que nasceu com esse propósito nobre e fortemente ligado à <strong>Amazônia</strong>.

      Com <strong>coloração intensa</strong>, <strong>textura aveludada</strong> e um <strong>aroma característico do açaí</strong>, o <strong>Alter do Chão Wine</strong> surpreende ao harmonizar a tradição amazônica com a sofisticação dos melhores vinhos.

      A linha <strong>Açaí Tinto Seco</strong> revela um sabor autêntico e envolvente, ideal para brindar momentos inesquecíveis.

      A <strong>Rio Hacks</strong> foi responsável pelo <strong>site de divulgação</strong> e <strong>E-Commerce</strong>.
      `,
      images: [Alterdochao0, Alterdochao1, Alterdochao2]
    },
    { 
      src: ClientLogo03, 
      alt: "Dr Regulariza", 
      description: `
      <strong>Dr. Regulariza</strong> é uma empresa familiar que, há mais de <strong>6 anos</strong>, vem construindo uma trajetória sólida no <strong>mercado imobiliário</strong>.

      Desde o início, o propósito sempre foi ir além da simples prestação de serviços: <strong>oferecer confiança, segurança e realização</strong> para cada cliente.

      Atuando em <strong>Santarém e região</strong>, a empresa se destaca na <strong>compra, venda e locação de imóveis</strong>, tanto de terceiros quanto da própria imobiliária, sempre prezando pela <strong>transparência</strong> e pela <strong>valorização de cada negociação</strong>.

      A <strong>Rio Hacks</strong> foi responsável pelo <strong>sistema de Dashboard Financeiro</strong> e pelo <strong>site de divulgação</strong>.
      `,
      images: [Drregulariza0, Drregulariza1, Drregulariza2, Drregulariza3]
    },
    { 
      src: ClientLogo04, 
      alt: "DuNorteCred", 
      description: `
      <strong>DuNorte Cred</strong> oferece <strong>soluções financeiras</strong> com total <strong>transparência</strong> e <strong>taxas justas</strong>.

      Seja para <strong>antecipar seu FGTS</strong>, obter <strong>crédito para trabalhadores CLT</strong> ou garantir <strong>condições especiais para aposentados e pensionistas</strong>, a DuNorte Cred está pronta para ajudar.

      Também trabalhamos com <strong>empréstimos usando o limite do seu cartão de crédito</strong>, sempre com <strong>confiança e agilidade</strong> para que você possa realizar seus planos com tranquilidade.

      A <strong>Rio Hacks</strong> foi responsável pelo <strong>site de divulgação</strong> e pelo <strong>Chatbot</strong>.
      `,
      images: [Dunortecred0, Dunortecred1, Dunortecred2, Dunortecred3]
    },
    { 
      src: ClientLogo05, 
      alt: "LBIN", 
      description: `
      <strong>LB IN</strong> é uma <strong>incorporadora</strong> que vem deixando sua marca ao entregar
      <strong>empreendimentos inovadores, modernos, confortáveis e bem localizados</strong> em Santarém/PA.

      Nosso diferencial está na <strong>proximidade com o cliente</strong> e no <strong>profundo entendimento das suas necessidades</strong>.
      Buscamos conhecer o perfil de cada pessoa para garantir a entrega de <strong>experiências únicas</strong> dentro e fora do canteiro de obras.

      A <strong>Rio Hacks</strong> foi responsável pelo desenvolvimento do <strong>sistema de Dashboard Financeiro</strong> e o <strong> sistema de atendimento<?strong>.
      `,
      images: [LbIn0, LbIn1, LbIn2, LbIn3]
    },
    { 
      src: ClientLogo06, 
      alt: "ServeApp", 
      description: `
      <strong>ServeApp</strong> nasceu como um <strong>aplicativo de contratação de serviços</strong>, 
      conectando clientes e prestadores de maneira simples e ágil.

      O grande diferencial é sua proposta de ser um <strong>Super App</strong>: 
      além da contratação de serviços, oferece <strong>Marketplace</strong>, 
      <strong>carteira digital</strong> e diversos outros recursos que 
      serão incorporados continuamente, tornando-se uma plataforma cada vez mais completa.

      A <strong>Rio Hacks</strong> foi responsável pelo <strong>desenvolvimento do aplicativo</strong>.
      `,
      images: [Serveapp0, Serveapp1, Serveapp2, Serveapp3, Serveapp4]
    },
    { 
      src: ClientLogo07, 
      alt: "Mirante", 
      description: `
      <strong>Mirante Residence</strong> é um <strong>empreendimento imobiliário de alto padrão</strong> em Santarém – PA, 
      onde <strong>sofisticação</strong>, <strong>conforto</strong> e <strong>inovação</strong> se encontram para oferecer 
      uma experiência única de morar bem.

      Com design moderno e espaços planejados para o máximo de bem-estar, 
      o Mirante Residence representa um novo patamar de qualidade de vida na região.

      A <strong>Rio Hacks</strong> foi responsável pelo <strong>desenvolvimento do site de divulgação</strong>.
      `,
      images: [Mirantes0, Mirantes1, Mirantes2, Mirantes3]
    },
    { 
      src: ClientLogo08, 
      alt: "Correr IA", 
      description: `
      <strong>Correr.IA</strong> é uma <strong>plataforma de inteligência artificial</strong> voltada para potencializar negócios.

      Sua missão é <strong>simplificar a complexidade da IA</strong>, tornando-a acessível a todos. 
      Com o conhecimento e as ferramentas certas, a Correr.IA acredita ser possível <strong>transformar o tempo em um recurso valioso</strong> e <strong>impulsionar o faturamento de empresas</strong> de diferentes segmentos.
      
      A <strong>Rio Hacks</strong> foi responsável pelo <strong>desenvolvimento do Dashboard Financeiro</strong>.
      `,
      images: [CorrerIA0, CorrerIA1, CorrerIA2]
    },
    { 
      src: ClientLogo09, 
      alt: "Gui360", 
      description: `
      O <strong>GUI360</strong> é uma plataforma de <strong>gestão clínica</strong> especializada no atendimento de pacientes com transtornos do neurodesenvolvimento (<strong>TDAH</strong>, <strong>TEA</strong>).

      O sistema oferece funcionalidades completas para clínicas e profissionais independentes, incluindo:
      <ul style="text-align:left; display:inline-block; margin:0 auto;">
        <strong>Cadastro de pacientes</strong>
        <strong>Agendamentos</strong>
        <strong>Prontuários eletrônicos</strong>
        <strong>Planos terapêuticos</strong>
        <strong>Gestão financeira</strong>
      </ul>

      Proporciona uma solução robusta e flexível que atende desde <strong>clínicas de grande porte</strong> até <strong>profissionais autônomos</strong>, priorizando a <strong>eficiência operacional</strong> e a <strong>qualidade do atendimento centrado no paciente</strong>.

      A <strong>Rio Hacks</strong> foi responsável pela <strong>criação do sistema web</strong>.
      `,
      images: [Gui360_0, Gui360_1, Gui360_2, Gui360_3]
    },
    { 
      src: ClientLogo10, 
      alt: "Amélias da Amazônia", 
      description: `
      <strong>Amélias da Amazônia</strong> é uma associação que preserva saberes tradicionais, transformando sementes nativas como <strong>andiroba</strong> e <strong>copaíba</strong>
      em <strong>óleos naturais poderosos</strong>.

      De forma artesanal e cuidadosa, esses óleos se tornam a base de <strong>sabonetes, cremes, velas, incensos</strong> e outros produtos que carregam o aroma, a força e o espírito da floresta.

      Ao longo dos anos, o grupo estruturou-se, firmou parcerias e conquistou reconhecimento pela sua atuação na <strong>conservação dos recursos da Amazônia</strong>.
      Com <strong>16 membros</strong> — a maioria mulheres — as Amélias representam a <strong>força feminina</strong> à frente de um trabalho coletivo e afetuoso, em que <strong>cada produto carrega uma história de resistência e renovação</strong>.

      A <strong>Rio Hacks</strong> foi responsável pelo <strong>desenvolvimento do site de Divulgação</strong>.
      `,
      images: [Amelias0, Amelias1, Amelias2, Amelias3]
    },
    { 
      src: ClientLogo11, 
      alt: "Casa do Ivo", 
      description: `
      <strong>Pousadas Casa do Ivo</strong> reúnem <strong>conforto, comodidades e atendimento diferenciado</strong> em <strong>cinco unidades</strong> especialmente preparadas para receber você.

      Seja para <strong>relaxar à beira da praia</strong>, aproveitar momentos inesquecíveis em família ou <strong>explorar a cultura e a beleza amazônica</strong>, temos o lugar ideal para a sua estadia.

      A <strong>Rio Hacks</strong> foi responsável pelo <strong>desenvolvimento do site de divulgação</strong>.
      `,
      images: [CasadoIvo0, CasadoIvo1, CasadoIvo2]
    },
    { 
      src: ClientLogo12, 
      alt: "Viver Vídeos", 
      description: `
      <strong>Viver Vídeos</strong> é uma <strong>agência de comunicação especializada em audiovisual</strong>, com mais de <strong>15 anos de experiência</strong> em gravação e edição de vídeos profissionais.  

      A equipe oferece <strong>serviços ágeis</strong>, <strong>consultoria personalizada</strong> e <strong>atendimento 100% online</strong> para pessoas físicas e jurídicas.  

      O propósito é <strong>ajudar pessoas a compartilhar sua essência através do vídeo</strong> e construir uma <strong>empresa autossustentável</strong>, contribuindo para o bem-estar da equipe e da sociedade.

      A <strong>Rio Hacks</strong> foi responsável pela <strong>criação do site de divulgação</strong>.
      `,
      images: [Vivervideos0, Vivervideos1, Vivervideos2]
    },
    { 
      src: ClientLogo13, 
      alt: "Aut Seg", 
      description: `
      <strong>Autseg</strong> oferece <strong>soluções completas em monitoramento</strong>, <strong>portaria remota</strong>, <strong>sonorização ambiente</strong> e <strong>automação patrimonial</strong>, garantindo mais segurança e comodidade para empresas e residências.  

      Os clientes podem solicitar uma <strong>cotação gratuita e personalizada</strong>, de acordo com suas necessidades específicas de proteção e tecnologia.  

      A <strong>Rio Hacks</strong> foi responsável pelo <strong>desenvolvimento do site de divulgação</strong>.
      `,
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