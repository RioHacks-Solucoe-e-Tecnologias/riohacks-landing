"use client";
import effect from "@/public/images/cod-effect.gif";

export default function BackgroundEffect() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      // fallback de cor de fundo para além do GIF
      style={{
        background:
          "linear-gradient(to bottom, #030712 0%, #030712 15%, #02040b 85%, #02040b 100%)",
      }}
    >
      {/* GIF com máscara em cima e embaixo */}
      <img
        src={effect.src}
        alt="Efeito de fundo"
        className="
          w-full h-full object-contain object-top opacity-100
          [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)]
        "
      />
    </div>
  );
}