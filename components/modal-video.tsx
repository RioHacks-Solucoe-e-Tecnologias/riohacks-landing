"use client";

import { useState, useRef } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";
import BackgroundImage from "@/public/images/background.png";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative">
      {/* Secondary illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>

      {/* Video thumbnail - RESPONSIVO MELHORADO */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 w-full"
        onClick={() => {
          setModalOpen(true);
        }}
        aria-label="Watch the video"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <figure className="relative overflow-hidden rounded-2xl w-full max-w-none before:absolute before:inset-0 before:-z-10 before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
          <Image
            className="grayscale w-full h-auto object-cover"
            src={BackgroundImage}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
          <div className="absolute inset-0 bg-gray-700/50"></div>
        </figure>
        {/* Play icon - RESPONSIVO */}
        <span className="pointer-events-none absolute p-2 sm:p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950 before:duration-300 group-hover:before:scale-110">
          <span className="relative flex items-center gap-2 sm:gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
              fill="none"
            >
              <path
                fill="url(#pla)"
                fillRule="evenodd"
                d="M8 16c4.418 0 8-3.582 8-8S12.418 0 8 0 0 3.582 0 8s3.582 8 8 8Zm2.8-8L7 5.2v5.6L10.8 8Z"
                clipRule="evenodd"
              />
              <defs>
                <linearGradient
                  id="pla"
                  x1={8}
                  x2={8}
                  y1={0}
                  y2={16}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ffffffff" />
                  <stop offset={1} stopColor="#090c37" stopOpacity=".72" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xs sm:text-sm font-medium leading-tight text-gray-300">
              <span className="hidden sm:inline">Assista o vídeo</span>
              <span className="sm:hidden">Play</span>
              <span className="text-gray-600"> - </span>
              0:14
            </span>
          </span>
        </span>
      </button>
      {/* End: Video thumbnail */}

      <Dialog
        initialFocus={videoRef}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 z-99999 bg-black/80 transition-opacity duration-300 ease-out data-closed:opacity-0"
        />
        {/* CONTAINER RESPONSIVO MELHORADO */}
        <div className="fixed inset-0 z-99999 flex p-2 sm:p-4 lg:p-6">
          <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-center">
            <DialogPanel
              transition
              className="relative max-h-full w-full overflow-hidden rounded-lg sm:rounded-2xl bg-black shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
              style={{
                // Aspect ratio responsivo
                aspectRatio: `${videoWidth}/${videoHeight}`,
                maxWidth: '100%',
                maxHeight: '90vh', // Altura máxima responsiva
              }}
            >
              {/* Botão de fechar - MOBILE FRIENDLY */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 rounded-full bg-black/50 p-1.5 sm:p-2 text-white hover:bg-black/70 transition-all"
                aria-label="Fechar vídeo"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* VÍDEO TOTALMENTE RESPONSIVO */}
              <video
                ref={videoRef}
                width={videoWidth}
                height={videoHeight}
                loop
                controls
                className="h-full w-full object-contain"
                style={{
                  aspectRatio: `${videoWidth}/${videoHeight}`,
                  minHeight: '200px', // Altura mínima em mobile
                }}
                controlsList="nodownload" // Remove opção de download
                playsInline // Importante para iOS
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}