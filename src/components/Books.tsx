"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface BookItem {
  id: number;
  title: string;
  author: string;
  category: string;
  images: string[];
  link: string;
  language: "English" | "Russian";
}

const bookItems: BookItem[] = [
  {
    id: 1,
    title: "Изучайте Java простым способом",
    author: "Брайсона Пейна",
    category: "Java",
    images: ["/books/russian/book-1.jpg"],
    link: "https://drive.google.com/file/d/1bBItPIcICVJcRt8trgHvUpPpQ-OjxPL4/view?usp=drive_link",
    language: "Russian",
  },
  {
    id: 2,
    title: "Java: руководство для начинающих",
    author: "Герберт Шильдт",
    category: "Java",
    images: ["/books/russian/book-2.jpg"],
    link: "https://drive.google.com/file/d/10XrzI6P1q95kxQCh_V4LxbmPqawm6rGT/view?usp=drive_link",
    language: "Russian",
  },
  {
    id: 3,
    title: "Learn Three.js, Fourth Edition",
    author: "Jos Dirksen",
    category: "Java Script",
    images: ["/books/english/book-3.jpg"],
    link: "https://drive.google.com/file/d/1YbxKcm1JD8r777hwJWX7R0iZySfYjbsG/view?usp=sharing",
    language: "English",
  },
  {
    id: 4,
    title: "Functional Programming in Javascript",
    author: "Luis Atencio",
    category: "Java Script",
    images: ["/books/english/book-4.jpg"],
    link: "https://drive.google.com/file/d/101JCPXZhrUGIV_X6bJKd7qJvApV-r8s-/view?usp=sharing",
    language: "English",
  },
  {
    id: 5,
    title: "Что такое ТЕСТИРОВАНИЕ",
    author: "Ольга Назина",
    category: "Testing",
    images: ["/books/russian/book-5.jpg"],
    link: "https://drive.google.com/file/d/1KH9p8KxklRfExP5OJOqNWnUuiatIwZnV/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 6,
    title: "JavaScript: Полное руководство, 7-е издание",
    author: "Дэвид Фланаган",
    category: "Java Script",
    images: ["/books/russian/book-6.jpg"],
    link: "https://drive.google.com/file/d/1UaGj61eYZB2rtMeGqirlvmWsqQERLe25/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 7,
    title: "Java: оптимизация программ",
    author: "Бенджамин Дж. Эванс, Джеймс Гоф, Крис Ньюланд",
    category: "Java",
    images: ["/books/russian/book-7.jpg"],
    link: "https://drive.google.com/file/d/1JXiJPG6iXUbJWnMBHQKy9kDZhZTRaF4V/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 8,
    title: "Многопоточный JavaScript",
    author: "Томас Хантер II, Брайан Инглиш",
    category: "Java Script",
    images: ["/books/russian/book-8.jpg"],
    link: "https://drive.google.com/file/d/1c8Mqz6PnliYs5zrWdCTFsbBMl3dxXFnp/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 9,
    title: "React в действии",
    author: "Томас Марк Тиленс",
    category: "Java Script",
    images: ["/books/russian/book-9.jpg"],
    link: "https://drive.google.com/file/d/1FwRkXCNF7QD5sScmraKbKSuJ2AsFbQC2/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 10,
    title: "Practical MongoDB Aggregations",
    author: "Paul Done",
    category: "Database",
    images: ["/books/english/book-10.jpg"],
    link: "https://drive.google.com/file/d/1RCml8yrX3fq-d-NPMSCpnLKmgzQqpLnH/view?usp=sharing",
    language: "English",
  },
  {
    id: 11,
    title: "Microsoft Visual C# Step by Step, Ninth Edition",
    author: "John Sharp",
    category: "C#",
    images: ["/books/english/book-11.jpg"],
    link: "https://drive.google.com/file/d/1VQB--xaoEGvsSM2jAe-nFKCUgbYCZTHL/view?usp=sharing",
    language: "English",
  },
  {
    id: 12,
    title: "Graphic Javascript Algorithms",
    author: "Yang Hu",
    category: "Java Script",
    images: ["/books/english/book-12.jpg"],
    link: "https://drive.google.com/file/d/1aZvMfwYgXnlHvGwfolYXBD4B3wfwEnD0/view?usp=sharing",
    language: "English",
  },
  {
    id: 13,
    title: "C# 7 и .NET Core",
    author: "Марк Дж. Прайс",
    category: "C#",
    images: ["/books/russian/book-13.jpg"],
    link: "https://drive.google.com/file/d/1IT8Jeh8GGNjKpx098WcIVAsx-iNOLEH2/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 14,
    title: "Fullstack Vue 3",
    author: "Hassan Djirdeh, Nate Murray, and Ari Lerner",
    category: "Java Script",
    images: ["/books/english/book-14.jpg"],
    link: "https://drive.google.com/file/d/1luvM5u73NU7586g8NPVcU1wEVq-8cS0W/view?usp=sharing",
    language: "English",
  },
  {
    id: 15,
    title: "React - Сборник рецептов",
    author: "Дэвид Гриффитс, Дон Гриффитс",
    category: "Java Script",
    images: ["/books/russian/book-15.jpg"],
    link: "https://drive.google.com/file/d/1lP40wJfGQaCH1nSskiiK2umZtn0hII0X/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 16,
    title: "Система модулей Java",
    author: "Парлог Николай",
    category: "Java",
    images: ["/books/russian/book-16.jpg"],
    link: "https://drive.google.com/file/d/1IxvnvYkJf5dck_mccF-EUg3dE2Bniee9/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 17,
    title: "JavaScript Design Patterns",
    author: "Hugo Di Francesco",
    category: "Java Script",
    images: ["/books/english/book-17.jpeg"],
    link: "https://drive.google.com/file/d/1nBdMboCNMQHABuVUs5nhwew6bcdu-pjm/view?usp=sharing",
    language: "English",
  },
  {
    id: 18,
    title: "Front-End Development Projects with Vue.js",
    author: "Raymond Camden, Hugo Di Francesco, Clifford Gurney, Philip Kirkbride, and Maya Shavin",
    category: "Java Script",
    images: ["/books/english/book-18.jpg"],
    link: "https://drive.google.com/file/d/1atXmU9xF2oo_NZ7_38S5wmewkz2K2FS_/view?usp=sharing",
    language: "English",
  },
  {
    id: 19,
    title: "JavaScript для FrontEnd-разработчиков",
    author: "Кириченко А. В.",
    category: "Java Script",
    images: ["/books/russian/book-19.jpg"],
    link: "https://drive.google.com/file/d/1PGhfnM5fzU31XEwpmWGdyPsQHBuZHjWt/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 20,
    title: "Изучаем TypeScript 3",
    author: "Натан Розенталс",
    category: "Java Script",
    images: ["/books/russian/book-20.jpg"],
    link: "https://drive.google.com/file/d/1ihbf-78H1o0Dbb5cBJKBfAercU6SXW2A/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 21,
    title: "Network Science with Python",
    author: "David Knickerbocker",
    category: "Python",
    images: ["/books/english/book-21.jpg"],
    link: "https://drive.google.com/file/d/1tbtzD7er_RC4i4SHxfJRG0UwoyKtUutj/view?usp=sharing",
    language: "English",
  },
  {
    id: 22,
    title: "Секреты javascript ниндзя. 2-е изд.",
    author: "Джон Резиг, Беар Бибо, Йосик Марас",
    category: "Java Script",
    images: ["/books/russian/book-22.jpg"],
    link: "https://drive.google.com/file/d/1MQbb8tZ4lQ07oii7JvI-PrCpfRN61fY0/view?usp=sharing",
    language: "Russian",
  },
  {
    id: 23,
    title: "Функциональное программирование на JavaScript",
    author: "Луис Атенсио",
    category: "Java Script",
    images: ["/books/russian/book-23.jpg"],
    link: "https://drive.google.com/file/d/1VoNNYIR1PayqKw4AzcHFjs7ns-MwBAcQ/view?usp=sharing",
    language: "Russian",
  }
];

export default function Books() {
  const [activeLanguage, setActiveLanguage] = useState<string>("*");
  const [activeCategory, setActiveCategory] = useState<string>("*");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const languages = ["*", "English", "Russian"];
  const categories = ["*", "Java", "Java Script", "Testing", "Database", "C#", "Python"];

  // Filter logic
  const filteredItems = bookItems.filter((item) => {
    const matchLanguage = activeLanguage === "*" || item.language === activeLanguage;
    const matchCategory = activeCategory === "*" || item.category === activeCategory;
    return matchLanguage && matchCategory;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <section
      id="books"
      className="min-h-screen py-16 bg-gradient-to-r from-cyan-900 to-blue-900"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white pt-20">
          Free professional literature
        </h2>

        {/* Language Filter */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setActiveLanguage(lang);
                setVisibleCount(6);
              }}
              className={`px-5 py-2 rounded-full border transition cursor-pointer ${
                activeLanguage === lang
                  ? "bg-[var(--red)] text-white border-none"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {lang === "*" ? "All Languages" : lang}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveCategory(filter);
                setVisibleCount(6);
              }}
              className={`px-5 py-2 rounded-full border transition cursor-pointer ${
                activeCategory === filter
                  ? "bg-[var(--red)] text-white border-none"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {filter === "*" ? "All Categories" : filter}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                width={400}
                height={600}
                className="object-cover aspect-[3/4] w-[250px] h-72 m-auto transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
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
                <p className="text-sm text-gray-600">
                  {item.language === "English" ? `by ${item.author}` : `автор: ${item.author}`}
                </p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-gray-400 italic">{item.language}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
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
    </section>
  );
}



