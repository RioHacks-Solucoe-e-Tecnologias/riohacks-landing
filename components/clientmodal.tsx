"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ClientModalProps {
  client: {
    src: any;
    alt: string;
    images?: any[];
    description?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientModal({ client, isOpen, onClose }: ClientModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efeito para auto-rotacionar as imagens
  useEffect(() => {
    if (!client.images || client.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % client.images!.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [client.images]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      client.images && client.images.length > 0 
        ? (prev + 1) % client.images.length 
        : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      client.images && client.images.length > 0 
        ? (prev - 1 + client.images.length) % client.images.length 
        : 0
    );
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 z-50 bg-black/80 transition-opacity duration-300"
      />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <DialogPanel
          transition
          className="w-full max-w-7xl rounded-2xl bg-gray-900 p-3 sm:p-6 shadow-xl max-h-[95vh] overflow-y-auto"
        >
          {/* Título com efeito de gradiente animado */}
          <div className="text-center mb-4 sm:mb-6">
            {/* Linhas laterais com texto roxo */}
            <div className="flex items-center justify-center gap-3 pb-3">
              {/* Linha esquerda */}
              <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-indigo-200/50"></div>
              
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm sm:text-base">
                Cliente em destaque
              </span>
              
              {/* Linha direita */}
              <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-indigo-200/50"></div>
            </div>
            
            {/* Título principal com gradiente animado */}
            <h3 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-2 font-nacelle text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent">
              {client.alt}
            </h3>
          </div>

          {/* Carrossel de Imagens */}
          <div className="relative mb-4 sm:mb-6">
            {client.images && client.images.length > 0 ? (
              <>
                <div className="relative w-full">
                  {/* Container principal do carrossel responsivo */}
                  <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                    
                    {/* Imagem anterior (lateral esquerda) */}
                    {client.images.length > 1 && (
                      <div className="hidden md:flex items-center justify-center w-16 sm:w-20 lg:w-24 opacity-40 hover:opacity-70 transition-all duration-500 cursor-pointer flex-shrink-0">
                        <div className="relative w-full aspect-[3/4] max-h-32 lg:max-h-40">
                          <Image
                            src={client.images[(currentImageIndex - 1 + client.images.length) % client.images.length]}
                            alt={`${client.alt} - Imagem anterior`}
                            fill
                            className="rounded-lg object-contain"
                            onClick={prevImage}
                          />
                        </div>
                      </div>
                    )}

                    {/* Imagem atual (centro) */}
                    <div className="relative z-20 flex-1 max-w-md lg:max-w-lg xl:max-w-xl px-2">
                      <div className="relative w-full bg-black/20 rounded-2xl p-2 sm:p-4">
                        <div className="relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] flex items-center justify-center">
                          <Image
                            src={client.images[currentImageIndex]}
                            alt={`${client.alt} - Imagem ${currentImageIndex + 1}`}
                            fill
                            className="rounded-xl object-contain shadow-2xl"
                            priority
                          />
                        </div>
                      </div>
                    </div>

                    {/* Próxima imagem (lateral direita) */}
                    {client.images.length > 1 && (
                      <div className="hidden md:flex items-center justify-center w-16 sm:w-20 lg:w-24 opacity-40 hover:opacity-70 transition-all duration-500 cursor-pointer flex-shrink-0">
                        <div className="relative w-full aspect-[3/4] max-h-32 lg:max-h-40">
                          <Image
                            src={client.images[(currentImageIndex + 1) % client.images.length]}
                            alt={`${client.alt} - Próxima imagem`}
                            fill
                            className="rounded-lg object-contain"
                            onClick={nextImage}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Setas de navegação */}
                  {client.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/60 p-2 sm:p-3 text-white text-lg sm:text-xl hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                        aria-label="Imagem anterior"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/60 p-2 sm:p-3 text-white text-lg sm:text-xl hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                        aria-label="Próxima imagem"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Indicadores */}
                {client.images.length > 1 && (
                  <div className="mt-4 sm:mt-6 flex justify-center space-x-2 sm:space-x-3">
                    {client.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-gray-500 hover:bg-gray-400'
                        }`}
                        aria-label={`Ver imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Caso tenha apenas uma imagem
              <div className="relative w-full bg-black/20 rounded-2xl p-2 sm:p-4">
                <div className="relative w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="rounded-xl object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Descrição */}
          {client.description && (
            <div
              className="text-center mb-4 sm:mb-6 text-gray-300 text-sm sm:text-base lg:text-lg whitespace-pre-line px-2"
              dangerouslySetInnerHTML={{ __html: client.description }}
            />
          )}

          {/* Botão Fechar */}
          <div className="text-center">
            <button
              onClick={onClose}
              className="rounded-lg bg-indigo-600 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-indigo-700 transition-all duration-300"
            >
              Fechar
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}