"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, ExternalLink } from "lucide-react";
import Lightbox from "./Lightbox";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  images: string[];
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Calculator",
    category: "App",
    images: ["/app/app-1-1.png", "/app/app-1-2.png", "/app/app-1-3.png"],
    link: "https://calculator-three-brown.vercel.app/",
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    category: "Games",
    images: ["/games/game-1.png", "/games/game-1-1.png", "/games/game-1-2.png", "/games/game-1-3.png"],
    link: "https://tic-tac-toe-next-theta.vercel.app/",
  },
  {
    id: 3,
    title: "Welcome To Cyprus",
    category: "Web",
    images: ["/web/web-1.png", "/web/web-1-1.png", "/web/web-1-2.png", "/web/web-1-3.png"],
    link: "https://welcometo-cyprus-8g19.vercel.app/",
  },
  {
    id: 4,
    title: "Natours",
    category: "Template",
    images: ["/templates/temp-1.png", "/templates/temp-1-1.png", "/templates/temp-1-2.png", "/templates/temp-1-3.png", "/templates/temp-1-4.png", "/templates/temp-1-5.png", "/templates/temp-1-6.png"],
    link: "https://natours-website-sass.vercel.app/",
  },
  {
    id: 5,
    title: "Battleship",
    category: "Games",
    images: ["/games/game-2.png", "/games/game-2-1.png", "/games/game-2-2.png", "/games/game-2-3.png"],
    link: "https://naval-clash-game.vercel.app/",
  },
  {
    id: 6,
    title: "Global HR Advisors",
    category: "Web",
    images: ["/web/web-2.png", "/web/web-2-1.png", "/web/web-2-2.png", "/web/web-2-3.png"],
    link: "https://globalhradvisors.com/",
  },
  {
    id: 7,
    title: "Lyma - E-commerce Site",
    category: "Template",
    images: ["/templates/temp-2.png", "/templates/temp-2-1.png", "/templates/temp-2-2.png", "/templates/temp-2-3.png"],
    link: "https://lyma-website.vercel.app/",
  },
  {
    id: 8,
    title: "Abaro - Customs brokerage service",
    category: "Web",
    images: ["/web/web-3.png", "/web/web-3-1.png", "/web/web-3-2.png", "/web/web-3-3.png"],
    link: "https://abaro.am/indexEng.html#",
  },
  {
    id: 9,
    title: "Unsplash Image Search",
    category: "App",
    images: ["/app/app-2.png", "/app/app-2-1.png", "/app/app-2-2.png", "/app/app-2-3.png"],
    link: "https://upolad-images-react.vercel.app/",
  },
  {
    id: 10,
    title: "Real Construction",
    category: "Web",
    images: ["/web/web-4.png", "/web/web-4-1.png", "/web/web-4-2.png", "/web/web-4-3.png", "/web/web-4-4.png", "/web/web-4-5.png", "/web/web-4-6.png", "/web/web-4-7.png", "/web/web-4-8.png", "/web/web-4-9.png", "/web/web-4-10.png", "/web/web-4-11.png", "/web/web-4-12.png"],
    link: "https://private-page-five.vercel.app/",
  },
  {
    id: 11,
    title: "Toy store",
    category: "Template",
    images: ["/templates/temp-3.png", "/templates/temp-3-1.png", "/templates/temp-3-2.png"],
    link: "https://toy-store-template.vercel.app/",
  },
  {
    id: 12,
    title: "Glossy Touch",
    category: "Template",
    images: ["/templates/temp-4.png", "/templates/temp-4-1.png", "/templates/temp-4-2.png", "/templates/temp-4-3.png"],
    link: "https://glossy-touch-template.vercel.app/",
  },
  {
    id: 13,
    title: "Tiya Golf Club",
    category: "Template",
    images: ["/templates/temp-5.png", "/templates/temp-5-1.png", "/templates/temp-5-2.png", "/templates/temp-5-3.png", "/templates/temp-5-4.png", "/templates/temp-5-5.png"],
    link: "https://tiya-golf-club-template.vercel.app/",
  },
  {
    id: 14,
    title: "Student",
    category: "Web",
    images: ["/web/web-5.png", "/web/web-5-1.png", "/web/web-5-2.png", "/web/web-5-3.png"],
    link: "https://student-house-2ika.vercel.app/",
  },
  {
    id: 15,
    title: "Pacman",
    category: "Games",
    images: ["/games/game-3.png", "/games/game-3-1.png", "/games/game-3-2.png", "/games/game-3-3.png"],
    link: "https://pacman-js-one.vercel.app/",
  },
  {
    id: 16,
    title: "TTS Audio Generator",
    category: "App",
    images: ["/app/app-3.png", "/app/app-3-1.png", "/app/app-3-2.png", "/app/app-3-3.png", "/app/app-3-4.png", "/app/app-3-5.png"],
    link: "https://tts-audio-generator.vercel.app/",
  },
  {
    id: 17,
    title: "QR Code Generator",
    category: "App",
    images: ["/app/app-4.png", "/app/app-4-1.png", "/app/app-4-2.png", "/app/app-4-3.png"],
    link: "https://qr-code-generator-9tfi.vercel.app/",
  },
  {
    id: 18,
    title: "Todo List",
    category: "App",
    images: ["/app/app-5.png", "/app/app-5-1.png", "/app/app-5-2.png", "/app/app-5-3.png"],
    link: "https://todo-app-react-nac5.vercel.app/",
  },
  {
    id: 19,
    title: "Gallery of Metal Art",
    category: "Web",
    images: ["/web/web-6.png", "/web/web-6-1.png", "/web/web-6-2.png", "/web/web-6-3.png", "/web/web-6-4.png", "/web/web-6-5.png", "/web/web-6-6.png"],
    link: "https://sculpture-website-m261.vercel.app/",
  },
  {
    id: 20,
    title: "Photo Editor",
    category: "App",
    images: ["/app/app-6.png", "/app/app-6-1.png", "/app/app-6-2.png", "/app/app-6-3.png", "/app/app-6-4.png", "/app/app-6-5.png"],
    link: "https://photo-editor-js-ten.vercel.app/",
  },


];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("*");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [] as string[],
    index: 0,
  });

  const filters = ["*", "App", "Games", "Web", "Template"]; // ✅ removed Professional books

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ isOpen: true, images, index });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen py-16 bg-linear-to-r from-cyan-900 to-blue-900"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white pt-20">
          My Portfolio
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(6); // reset visible count on filter change
              }}
              className={`px-5 py-2 rounded-full border transition cursor-pointer ${
                activeFilter === filter
                  ? "bg-[var(--red)] text-white border-none"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {filter === "*" ? "All" : filter}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                <button
                  onClick={() => openLightbox(item.images, 0)}
                  className="p-3 bg-white rounded-full hover:bg-gray-100"
                >
                  <Plus className="w-6 h-6 text-gray-800" />
                </button>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full"
                >
                  <ExternalLink className="w-6 h-6 text-gray-800" />
                </a>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More button */}
        {visibleCount < filteredItems.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-6 py-3 bg-[var(--red)] text-white rounded-full hover:bg-[var(--dark-red)] transition cursor-pointer"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      <Lightbox
        state={lightbox}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
}





