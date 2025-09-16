export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
        <div className="mx-auto max-w-3xl pb-2 text-center md:pb-6">
          {/* Texto roxo com linhas laterais */}
          <div className="flex items-center justify-center gap-3 pb-3">
            {/* Linha esquerda */}
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-200/50"></div>
            
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Entre em contato
            </span>
            
            {/* Linha direita */}
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-200/50"></div>
          </div>
          
          {/* Título com gradiente animado */}
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-2 font-nacelle text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
            Nos contate em:
          </h2>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base text-indigo-200/65 sm:text-lg">E-mail: contato@riohacks.com.br</p>
          <h3 className="mt-6 text-lg font-medium text-gray-200 sm:text-xl">Nos encontre em:</h3>
          <p className="mt-2 text-sm text-indigo-200/65 sm:text-base">Av. Mendonça Furtado, 2417, Aldeia, Santarém/PA</p>
          <div className="mt-6">
            <iframe
              title="mapa"
              src="https://maps.google.com/maps?q=Av.%20Mendon%C3%A7a%20Furtado%2C%202417%2C%20Aldeia%2C%20Santar%C3%A9m%2FPA&t=m&z=16&output=embed&iwloc=near"
              width="100%"
              height="320"
              className="h-60 w-full rounded-md border border-gray-800/30 sm:h-80"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}