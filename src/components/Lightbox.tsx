// components/Lightbox.tsx
"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  state: { isOpen: boolean; images: string[]; index: number };
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ state, onClose, onPrev, onNext }: LightboxProps) {
  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <button
        className="absolute top-5 right-5 text-white p-2 rounded-full bg-black/40 hover:bg-black/70"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>

      <button
        className="absolute left-5 text-white p-2 rounded-full bg-black/40 hover:bg-black/70"
        onClick={onPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="max-w-4xl max-h-[80vh]">
        <Image
          src={state.images[state.index]}
          alt="Zoomed"
          width={1200}
          height={800}
          className="object-contain rounded-lg"
        />
      </div>

      <button
        className="absolute right-5 text-white p-2 rounded-full bg-black/40 hover:bg-black/70"
        onClick={onNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
