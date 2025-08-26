"use client";
import Image from "next/image";
import effect from "@/public/images/cod-effect.gif";

export default function BackgroundEffect() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      // fallback de cor/gradiente que garante continuidade superior/inferior
      style={{
        background:
          "linear-gradient(to bottom, #030712 0%, #030712 15%, #02040b 85%, #02040b 100%)",
      }}
    >
      {/* GIF central (sem otimização do Next para manter qualidade) */}
      <Image
        src={effect}
        alt="Efeito de fundo"
        fill
        className="object-contain object-top w-auto h-full opacity-70"
        priority
        unoptimized
      />

      {/* Blend suave no topo para casar com #030712 */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{
          height: "9rem", // ajuste aqui (ex: '6rem' a '12rem')
          background: "linear-gradient(to bottom, #030712, transparent)",
        }}
      />

      {/* Blend suave no rodapé para casar com #02040b */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: "12rem", // ajuste aqui se precisar cobrir mais/menos
          background: "linear-gradient(to top, #02040b, transparent)",
        }}
      />
    </div>
  );
}