export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-4 bg-transparent">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-xl font-semibold text-indigo-200/70">
          + MAIS CLIENTES + RESULTADOS + FATURAMENTO + MAIS CLIENTES +
          RESULTADOS + FATURAMENTO + MAIS CLIENTES + RESULTADOS + FATURAMENTO +
          MAIS CLIENTES + RESULTADOS + FATURAMENTO
        </span>
      </div>

      {/* Gradientes laterais */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0a0a0a]/80 to-transparent"></div>
    </div>
  );
}