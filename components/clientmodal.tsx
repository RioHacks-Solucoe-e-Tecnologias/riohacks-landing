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
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full max-w-4xl rounded-2xl bg-gray-900 p-6 shadow-xl max-h-[90vh] overflow-y-auto"
        >
          {/* Título */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-white">{client.alt}</h3>
          </div>

          {/* Carrossel de Imagens */}
          <div className="relative mb-6">
            {client.images && client.images.length > 0 ? (
              <>
                <div className="relative h-80 w-full overflow-hidden">
                  {/* Container do carrossel */}
                  <div className="flex h-full items-center justify-center">
                    {/* Imagem anterior (esmaecida) */}
                    {client.images.length > 1 && (
                      <div className="absolute left-0 z-10 w-1/4 opacity-40 transition-all duration-500">
                        <div className="relative h-56 w-full">
                          <Image
                            src={client.images[(currentImageIndex - 1 + client.images.length) % client.images.length]}
                            alt={`${client.alt} - Imagem anterior`}
                            fill
                            className="rounded-xl object-cover"
                            onClick={prevImage}
                          />
                        </div>
                      </div>
                    )}

                    {/* Imagem atual */}
                    <div className="relative z-20 h-64 w-1/2 transition-all duration-500">
                      <Image
                        src={client.images[currentImageIndex]}
                        alt={`${client.alt} - Imagem ${currentImageIndex + 1}`}
                        fill
                        className="rounded-2xl object-cover shadow-2xl"
                      />
                    </div>

                    {/* Próxima imagem (esmaecida) */}
                    {client.images.length > 1 && (
                      <div className="absolute right-0 z-10 w-1/4 opacity-40 transition-all duration-500">
                        <div className="relative h-56 w-full">
                          <Image
                            src={client.images[(currentImageIndex + 1) % client.images.length]}
                            alt={`${client.alt} - Próxima imagem`}
                            fill
                            className="rounded-xl object-cover"
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
                        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-all duration-300"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 transition-all duration-300"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Indicadores */}
                {client.images.length > 1 && (
                  <div className="mt-6 flex justify-center space-x-3">
                    {client.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-gray-500 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Caso tenha apenas uma imagem
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            )}
          </div>

          {/* Descrição */}
          {client.description && (
            <div
              className="text-center mb-6 text-gray-300 text-lg whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: client.description }}
            />
          )}

          {/* Botão Fechar */}
          <div className="text-center">
            <button
              onClick={onClose}
              className="rounded-lg bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700 transition-all duration-300"
            >
              Fechar
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}