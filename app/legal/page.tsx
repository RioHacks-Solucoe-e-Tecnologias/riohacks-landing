import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade - RioHacks",
  description: "Política de Privacidade, Termos de Uso e Política de Cookies da RioHacks",
};

export default function LegalPage() {
  return (
    <>
      {/* Background com gradiente similar ao da landing page */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <section className="relative min-h-screen">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
          
          {/* Header da página */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="flex items-center justify-center gap-3 pb-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-200/50"></div>
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Documentos Legais
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-200/50"></div>
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Política de Privacidade
            </h1>
            <p className="text-lg text-indigo-200/65">
              Transparência e proteção dos seus dados é nossa prioridade.
            </p>
          </div>

          {/* Menu de navegação interno */}
          <div className="mx-auto max-w-4xl mb-8">
            <nav className="flex flex-wrap justify-center gap-4 p-4 bg-gray-800/30 rounded-2xl">
              <a 
                href="#politica-privacidade" 
                className="px-4 py-2 text-sm text-indigo-200 hover:text-white transition-colors border border-indigo-500/30 rounded-lg hover:bg-indigo-500/20"
              >
                Política de Privacidade
              </a>
              <a 
                href="#termos-uso" 
                className="px-4 py-2 text-sm text-indigo-200 hover:text-white transition-colors border border-indigo-500/30 rounded-lg hover:bg-indigo-500/20"
              >
                Termos de Uso
              </a>
              <a 
                href="#politica-cookies" 
                className="px-4 py-2 text-sm text-indigo-200 hover:text-white transition-colors border border-indigo-500/30 rounded-lg hover:bg-indigo-500/20"
              >
                Política de Cookies
              </a>
            </nav>
          </div>

          {/* Conteúdo principal */}
          <div className="mx-auto max-w-4xl space-y-12">
            
            {/* Seção 1: Política de Privacidade */}
            <section id="politica-privacidade" className="scroll-mt-20">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-indigo-500/30 pb-3">
                Política de Privacidade
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                </p>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-4">1. Informações que Coletamos</h3>
                <p className="text-gray-300 mb-4">
                  A RioHacks coleta informações que você nos fornece diretamente, como quando você:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Entra em contato conosco através do nosso site</li>
                  <li>Solicita orçamentos ou informações sobre nossos serviços</li>
                  <li>Se inscreve em nossa newsletter ou eventos</li>
                  <li>Interage com nossas redes sociais</li>
                </ul>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">2. Como Usamos suas Informações</h3>
                <p className="text-gray-300 mb-4">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Responder às suas solicitações e dúvidas</li>
                  <li>Enviar informações relevantes sobre nossos serviços</li>
                  <li>Personalizar sua experiência em nosso site</li>
                </ul>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">3. Compartilhamento de Informações</h3>
                <p className="text-gray-300 mb-4">
                  Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem seu consentimento, exceto conforme descrito nesta política.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">4. Segurança dos Dados</h3>
                <p className="text-gray-300 mb-4">
                  Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </div>
            </section>

            {/* Seção 2: Termos de Uso */}
            <section id="termos-uso" className="scroll-mt-20">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-indigo-500/30 pb-3">
                Termos de Uso
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">1. Aceitação dos Termos</h3>
                <p className="text-gray-300 mb-4">
                  Ao acessar e usar o site da RioHacks, você concorda em cumprir estes termos de uso e todas as leis e regulamentos aplicáveis.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">2. Uso do Site</h3>
                <p className="text-gray-300 mb-4">
                  Você pode usar nosso site para:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Visualizar informações sobre nossos serviços</li>
                  <li>Entrar em contato conosco</li>
                  <li>Solicitar orçamentos e propostas</li>
                </ul>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">3. Propriedade Intelectual</h3>
                <p className="text-gray-300 mb-4">
                  Todo o conteúdo deste site, incluindo textos, gráficos, logotipos e imagens, é propriedade da RioHacks e está protegido por leis de direitos autorais.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">4. Limitação de Responsabilidade</h3>
                <p className="text-gray-300 mb-4">
                  A RioHacks não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso deste site.
                </p>
              </div>
            </section>

            {/* Seção 3: Política de Cookies */}
            <section id="politica-cookies" className="scroll-mt-20">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b border-indigo-500/30 pb-3">
                Política de Cookies
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">1. O que são Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita nosso site. Eles nos ajudam a melhorar sua experiência.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">2. Tipos de Cookies que Usamos</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</li>
                  <li><strong>Cookies de Performance:</strong> Nos ajudam a entender como você usa o site</li>
                  <li><strong>Cookies de Funcionalidade:</strong> Lembram suas preferências</li>
                </ul>

                <h3 className="text-xl font-medium text-white mt-6 mb-4">3. Gerenciamento de Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Você pode gerenciar ou desativar cookies através das configurações do seu navegador. No entanto, isso pode afetar a funcionalidade do nosso site.
                </p>
              </div>
            </section>

            {/* Seção de Contato */}
            <section className="bg-gray-800/30 rounded-2xl p-6 mt-12">
              <h2 className="text-xl font-semibold text-white mb-4">Dúvidas sobre esta Política?</h2>
              <p className="text-gray-300 mb-4">
                Se você tiver dúvidas sobre nossa Política de Privacidade, entre em contato conosco:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> contato@riohacks.com.br</p>
                <p><strong>Endereço:</strong> Av. Mendonça Furtado, 2417, Aldeia, Santarém/PA</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}