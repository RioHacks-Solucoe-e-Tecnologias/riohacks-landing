export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">Nos contate em:</h2>
          <p className="mt-3 text-indigo-200/65">E-mail: contato@riohacks.com.br</p>
          <h3 className="mt-6 text-xl font-medium">Nos encontre em:</h3>
          <p className="mt-2 text-indigo-200/65">Av. Mendonça Furtado, 2417, Aldeia, Santarém/PA</p>
          <div className="mt-6">
            <iframe
              title="mapa"
              src="https://maps.google.com/maps?q=Av.%20Mendon%C3%A7a%20Furtado%2C%202417%2C%20Aldeia%2C%20Santar%C3%A9m%2FPA&t=m&z=16&output=embed&iwloc=near"
              width="100%"
              height="320"
              className="rounded-md border border-gray-800/30"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
