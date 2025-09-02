"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Certificates: React.FC = () => {
  const images = [
    "/certificates/certificate-1.jpg",
    "/certificates/certificate-2.jpg",
    "/certificates/certificate-3.jpg",
    "/certificates/certificate-4.jpg",
    "/certificates/certificate-5.jpg",
    "/certificates/certificate-6.jpg",
    "/certificates/certificate-7.jpg",
    "/certificates/certificate-8.jpg",
    "/certificates/certificate-9.png",
    "/certificates/certificate-10.jpg",
    "/certificates/certificate-11.jpg",
    "/certificates/certificate-12.jpg",
  ];

  const certificates = [
    { title: "HTML", source: "Sololearn", link: "https://www.sololearn.com/certificates/CT-MWLFWBVS" },
    { title: "HTML", source: "Galent" },
    { title: "CSS", source: "Sololearn", link: "https://www.sololearn.com/certificates/CT-UVCD2TGI" },
    { title: "CSS", source: "Galent" },
    { title: "Web Dev. Fund.", source: "Sololearn", link: "https://www.sololearn.com/certificates/CT-EEUPMSTN" },
    { title: "Java Script", source: "Sololearn", link: "https://www.sololearn.com/certificates/CT-95RKMGHG" },
    { title: "Java Script", source: "HS Rocket" },
    { title: "C", source: "Sololearn", link: "https://www.sololearn.com/certificates/CC-RLAFTRKN" },
    { title: "Game Dev.", source: "Sololearn", link: "https://www.sololearn.com/certificates/CT-50JMFCVH" },
    { title: "jQuery", source: "Sololearn", link: "https://www.sololearn.com/certificates/CT-AXSJ9D8J" },
    { title: "React+Redux", source: "Sololearn", link: "https://www.sololearn.com/certificates/CT-BVTRRSEH" },
    { title: "Resp. Web Design", source: "Sololearn", link: "https://www.sololearn.com/certificates/CT-FFOQR9XD" },
    { title: "Frontend & Backend", source: "Picsart Academy", link: "https://picsartacademy.am/" },
  ];

  return (
    <section
      id="certificates"
      className="w-full min-h-screen flex items-center bg-linear-to-r from-cyan-900 to-blue-900 py-32"
    >
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Image Slider */}
        <div className="w-full flex justify-center">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="w-full max-w-lg shadow-lg rounded-xl overflow-hidden"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt={`certificate-${index}`}
                  width={800}
                  height={600}
                  className="object-contain w-full h-[400px] lg:h-[500px] bg-white rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Certificates Info */}
        <div className="w-full space-y-6">
          <h2 className="text-3xl font-bold text-white border-b-4 border-white inline-block pb-2">
            My Certificates
          </h2>
          <ul className="space-y-3 text-lg text-gray-200">
            {certificates.map((cert, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="font-semibold text-white">{cert.title}:</span>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:underline"
                  >
                    {cert.source}
                  </a>
                ) : (
                  <span>{cert.source}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Certificates;

