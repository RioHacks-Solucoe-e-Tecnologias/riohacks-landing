export default function Services() {
  const services = [
    "Desenvolvimento de Sistemas sob Medida",
    "Integração de Sistemas",
    "Consultoria em Transformação Digital",
    "Gestão de tráfego pago (Google e Meta)",
    "Soluções em Inteligência Artificial e Machine Learning",
    "Desenvolvimento de Sites e E-commerce",
    "Chatbot e CRM Personalizados",
    "Capacitação e Treinamento Personalizados",
    "Realização de Eventos Técnicos",
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-8 text-center">
            <h2 className="text-3xl font-semibold">O que fazemos</h2>
            <p className="mt-3 text-indigo-200/65">
              Serviços pensados para acelerar a transformação digital da sua
              empresa.
            </p>
          </div>

          <div className="mx-auto grid max-w-lg grid-cols-1 gap-4 sm:max-w-none sm:grid-cols-2 md:grid-cols-3">
            {services.map((s) => (
              <div key={s} className="rounded-md border border-gray-800/40 p-4">
                <h3 className="mb-2 font-semibold">{s}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
