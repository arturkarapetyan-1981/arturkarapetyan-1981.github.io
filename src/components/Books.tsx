"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ZoomIn } from "lucide-react";

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
        link: "https://ia601003.us.archive.org/20/items/java_20250907/%D0%9B%D0%B5%D0%B3%D0%BA%D0%B8%D0%B8%CC%86%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%20%D0%B2%D1%8B%D1%83%D1%87%D0%B8%D1%82%D1%8C%20Java.pdf",
        language: "Russian",
      },
      {
        id: 2,
        title: "Разработка приложений на базе GPТ-4 и ChatGPT",
        author: "Оливье Келен, Мари-Алис Блете",
        category: "AI",
        images: ["/books/russian/book-2.jpg"],
        link: "https://ia601009.us.archive.org/33/items/gpt-4-chat-gpt/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8%CC%86_%D0%BD%D0%B0_%D0%B1%D0%B0%D0%B7%D0%B5_GPT_4_%D0%B8_ChatGPT.pdf",
        language: "Russian",
      },
      {
        id: 3,
        title: "Learn Three.js, Fourth Edition",
        author: "Jos Dirksen",
        category: "Java Script",
        images: ["/books/english/book-3.jpg"],
        link: "https://ia601000.us.archive.org/22/items/learn-three.js/Learn%20Three.js.pdf",
        language: "English",
      },
      {
        id: 4,
        title: "ВЫ ПОКА ЕЩЕ НЕ ЗНАЕТЕ JS",
        author: "КАЙЛ СИМПСОН",
        category: "Java Script",
        images: ["/books/russian/book-4.jpg"],
        link: "https://ia601603.us.archive.org/9/items/simpson-vy-poka-eshche-ne-znaete-js-poznakomtes-java-script-2-e-izdanie/Simpson_Vy_poka_eshche_ne_znaete_JS_Poznakomtes_JavaScript_2_e_izdanie.pdf",
        language: "Russian",
      },
      {
        id: 5,
        title: "Что такое ТЕСТИРОВАНИЕ",
        author: "Ольга Назина",
        category: "Testing",
        images: ["/books/russian/book-5.jpg"],
        link: "https://ia801605.us.archive.org/12/items/chto-takoe-testirovanie/Chto_takoe_testirovanie.pdf",
        language: "Russian",
      },
      {
        id: 6,
        title: "JavaScript: Полное руководство, 7-е издание",
        author: "Дэвид Фланаган",
        category: "Java Script",
        images: ["/books/russian/book-6.jpg"],
        link: "https://ia600206.us.archive.org/28/items/java-script.-7-2021/JavaScript.%20%D0%9F%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5%20%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE%2C%207-%D0%B5%20%D0%B8%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%20%5B2021%5D%20%D0%A4%D0%BB%D1%8D%D0%BD%D0%B0%D0%B3%D0%B0%D0%BD.pdf",
        language: "Russian",
      },
      {
        id: 7,
        title: "Java: оптимизация программ",
        author: "Бенджамин Дж. Эванс, Джеймс Гоф, Крис Ньюланд",
        category: "Java",
        images: ["/books/russian/book-7.jpg"],
        link: "https://ia600902.us.archive.org/15/items/java_optimizaciya_programm_bendzhamin_2019/java_optimizaciya_programm_bendzhamin_2019.pdf",
        language: "Russian",
      },
      {
        id: 8,
        title: "Многопоточный JavaScript",
        author: "Томас Хантер II, Брайан Инглиш",
        category: "Java Script",
        images: ["/books/russian/book-8.jpg"],
        link: "https://ia601009.us.archive.org/16/items/javascript_202509/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D0%BF%D0%BE%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B8%CC%86%20Javascript.pdf",
        language: "Russian",
      },
      {
        id: 9,
        title: "React в действии",
        author: "Томас Марк Тиленс",
        category: "Java Script",
        images: ["/books/russian/book-9.jpg"],
        link: "https://ia601004.us.archive.org/20/items/react-v-deystvii-2019-tomas/React_v_deystvii_2019_Tomas.pdf",
        language: "Russian",
      },
      {
        id: 10,
        title: "Practical MongoDB Aggregations",
        author: "Paul Done",
        category: "Database",
        images: ["/books/english/book-10.jpg"],
        link: "https://ia601005.us.archive.org/0/items/practical.-mongo-db.-aggregations/Practical.MongoDB.Aggregations.pdf",
        language: "English",
      },
      {
        id: 11,
        title: "Microsoft Visual C# Step by Step, Ninth Edition",
        author: "John Sharp",
        category: "C#",
        images: ["/books/english/book-11.jpg"],
        link: "https://ia600207.us.archive.org/9/items/microsoft-visual-c-step-by-step-ninth-edition_202509/Microsoft%20Visual%20C%23%20Step%20by%20Step%2C%20Ninth%20Edition.pdf",
        language: "English",
      },
      {
        id: 12,
        title: "Graphic Javascript Algorithms",
        author: "Yang Hu",
        category: "Java Script",
        images: ["/books/english/book-12.jpg"],
        link: "https://ia601301.us.archive.org/15/items/graphic-javascript-algorithms/Graphic%20Javascript%20Algorithms.pdf",
        language: "English",
      },
      {
        id: 13,
        title: "C# 7 и .NET Core",
        author: "Марк Дж. Прайс",
        category: "C#",
        images: ["/books/russian/book-13.jpg"],
        link: "https://ia801004.us.archive.org/17/items/c_7_i__e2VFmzg/c_7_i__e2VFmzg.pdf",
        language: "Russian",
      },
      {
        id: 14,
        title: "Fullstack Vue 3",
        author: "Hassan Djirdeh, Nate Murray, and Ari Lerner",
        category: "Java Script",
        images: ["/books/english/book-14.jpg"],
        link: "https://ia600909.us.archive.org/0/items/fullstack-vue-3t/Fullstack%20Vue%203t.pdf",
        language: "English",
      },
      {
        id: 15,
        title: "React - Сборник рецептов",
        author: "Дэвид Гриффитс, Дон Гриффитс",
        category: "Java Script",
        images: ["/books/russian/book-15.jpg"],
        link: "https://ia601600.us.archive.org/8/items/1032-react-sbornik-receptov/1032_React-sbornik-receptov.pdf",
        language: "Russian",
      },
      {
        id: 16,
        title: "Система модулей Java",
        author: "Парлог Николай",
        category: "Java",
        images: ["/books/russian/book-16.jpg"],
        link: "https://ia601002.us.archive.org/14/items/java_20250907_202509/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B5%D0%B8%CC%86%20Java.pdf",
        language: "Russian",
      },
      {
        id: 17,
        title: "JavaScript Design Patterns",
        author: "Hugo Di Francesco",
        category: "Java Script",
        images: ["/books/english/book-17.jpeg"],
        link: "https://ia601300.us.archive.org/0/items/di_francesco_h_javascript_design_patterns_deliver_fast_and_e/di_francesco_h_javascript_design_patterns_deliver_fast_and_e.pdf",
        language: "English",
      },
      {
        id: 18,
        title: "Front-End Development Projects with Vue.js",
        author: "Raymond Camden, Hugo Di Francesco, Clifford Gurney, Philip Kirkbride, and Maya Shavin",
        category: "Java Script",
        images: ["/books/english/book-18.jpg"],
        link: "https://ia601301.us.archive.org/12/items/front-end-development-projects-with-vue.js/Front-End%20Development%20Projects%20with%20Vue.js.pdf",
        language: "English",
      },
      {
        id: 19,
        title: "JavaScript для FrontEnd-разработчиков",
        author: "Кириченко А. В.",
        category: "Java Script",
        images: ["/books/russian/book-19.jpg"],
        link: "https://ia601008.us.archive.org/16/items/java-script-front-end-copy/JavaScript%20%D0%B4%D0%BB%D1%8F%20FrontEnd-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%BE%D0%B2%20copy.pdf",
        language: "Russian",
      },
      {
        id: 20,
        title: "Изучаем TypeScript 3",
        author: "Натан Розенталс",
        category: "Java Script",
        images: ["/books/russian/book-20.jpg"],
        link: "https://ia600506.us.archive.org/3/items/izuchaem-type-script-3-2019/Izuchaem_TypeScript_3_%282019%29.pdf",
        language: "Russian",
      },
      {
        id: 21,
        title: "Network Science with Python",
        author: "David Knickerbocker",
        category: "Python",
        images: ["/books/english/book-21.jpg"],
        link: "https://ia600907.us.archive.org/31/items/29623753/29623753.pdf",
        language: "English",
      },
      {
        id: 22,
        title: "Секреты javascript ниндзя. 2-е изд.",
        author: "Джон Резиг, Беар Бибо, Йосик Марас",
        category: "Java Script",
        images: ["/books/russian/book-22.jpg"],
        link: "https://ia601003.us.archive.org/11/items/javascript_20250907/%D0%A1%D0%B5%D0%BA%D1%80%D0%B5%D1%82%D1%8B%20javascript%20%D0%BD%D0%B8%D0%BD%D0%B4%D0%B7%D1%8F.pdf",
        language: "Russian",
      },
      {
        id: 23,
        title: "React и Redux, ФУНКЦИОНАЛЬНАЯ ВЕБ-РАЗРАБОТКА",
        author: "Алекс Бэнкс, Ева Порселло",
        category: "Java Script",
        images: ["/books/russian/book-23.jpg"],
        link: "https://ia601600.us.archive.org/34/items/1424-react-redux/1424_React_Redux.pdf",
        language: "Russian",
      },
      {
        id: 24,
        title: "Just React!",
        author: "Hari Narayn",
        category: "Java Script",
        images: ["/books/english/book-24.jpeg"],
        link: "https://ia601600.us.archive.org/21/items/just-react/Just%20React%21.pdf",
        language: "English",
      },
      {
        id: 25,
        title: "Javascript для начинающих",
        author: "Майк МакГрат",
        category: "Java Script",
        images: ["/books/russian/book-25.jpg"],
        link: "https://ia600907.us.archive.org/32/items/https_coderbooks_rujavascript___6_/https_coderbooks_ruJavascript_%D0%B4%D0%BB%D1%8F_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85_6_%D0%B8%D0%B7%D0%B4.pdf",
        language: "Russian",
      },
      {
        id: 26,
        title: "JavaScript с нуля до профи",
        author: "Лоренс Ларс Свекис, Майке ван Путтен, Роб Персиваль",
        category: "Java Script",
        images: ["/books/russian/book-26.jpg"],
        link: "https://ia601003.us.archive.org/2/items/https-coderbooks.ru-java-script/https___coderbooks.ruJavaScript%20%D1%81%20%D0%BD%D1%83%D0%BB%D1%8F%20%D0%B4%D0%BE%20%D0%BF%D1%80%D0%BE%D1%84%D0%B8.pdf",
        language: "Russian",
      },
      {
        id: 27,
        title: "Тестирование с веб-АРI",
        author: "Джанет Грегори и Лизы Криспин",
        category: "Testing",
        images: ["/books/russian/book-27.jpg"],
        link: "https://ia600905.us.archive.org/3/items/api_20250909/%D0%A2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B2%D0%B5%D0%B1-API.pdf",
        language: "Russian",
      },
      {
        id: 28,
        title: "Классические задачи Computer Science на языке Java",
        author: "Дэвид Копец",
        category: "Java",
        images: ["/books/russian/book-28.jpg"],
        link: "https://ia600903.us.archive.org/29/items/computer-science-java/%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_Computer_Science_%D0%BD%D0%B0_%D1%8F%D0%B7%D1%8B%D0%BA%D0%B5_Java.pdf",
        language: "Russian",
      },
      {
        id: 29,
        title: "SQL Server",
        author: "Дмитрий Короткевич",
        category: "Database",
        images: ["/books/russian/book-29.jpg"],
        link: "https://ia601301.us.archive.org/7/items/sql-server_202509/SQL_Server_%D0%9D%D0%B0%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0_%D0%B8_%D0%BE%D0%BF%D1%82%D0%B8%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F_%D0%B4%D0%BB%D1%8F_%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BE%D0%B2.pdf",
        language: "Russian",
      },
];

export default function Books() {
  const [activeLanguage, setActiveLanguage] = useState<string>("*");
  const [activeCategory, setActiveCategory] = useState<string>("*");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null); // track tapped card on mobile

  const languages = ["*", "English", "Russian"];
  const categories = ["*", "Java", "Java Script", "Testing", "Database", "C#", "Python", "AI"];

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
          {visibleItems.map((item) => {
            const isActive = activeCard === item.id;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() =>
                  setActiveCard(isActive ? null : item.id) // toggle overlay on tap (mobile)
                }
              >
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={400}
                  height={600}
                  className="object-cover aspect-[3/4] w-[250px] h-72 m-auto transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay: hover for desktop, tap for mobile */}
                <div
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${isActive ? "opacity-100" : ""}`}
                >
                  {/* Zoom button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomImage(item.images[0]);
                    }}
                    className="p-3 bg-white rounded-full hover:bg-gray-100 shadow-lg"
                  >
                    <ZoomIn className="w-6 h-6 text-gray-800" />
                  </button>

                  {/* External link */}
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-white rounded-full hover:bg-gray-100 shadow-lg"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-800" />
                  </Link>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    {item.language === "English" ? `by ${item.author}` : `автор: ${item.author}`}
                  </p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-sm text-gray-400 italic">{item.language}</p>
                </div>
              </div>
            );
          })}
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

      {/* Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✕
          </button>
          <Image
            src={zoomImage}
            alt="Zoomed book"
            width={600}
            height={800}
            className="rounded-lg max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
}


