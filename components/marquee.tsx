export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4 text-xl font-semibold text-indigo-200/70">
          + MAIS CLIENTES + RESULTADOS + FATURAMENTO + MAIS CLIENTES +
          RESULTADOS + FATURAMENTO + MAIS CLIENTES + RESULTADOS + FATURAMENTO +
          MAIS CLIENTES + RESULTADOS + FATURAMENTO
        </span>
      </div>
    </div>
  );
}
