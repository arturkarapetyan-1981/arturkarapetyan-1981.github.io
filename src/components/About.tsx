"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const birthDate = new Date("1981-10-29");
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      years--;
    }
    setAge(years);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-cyan-900 to-blue-900 text-white px-4 sm:px-6 lg:px-20 py-12">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white pt-12 sm:pt-16">
            About
          </h2>
          <p className="text-base sm:text-lg italic text-gray-200 px-2">
            In order to be irreplaceable, one must always be different – Coco
            Chanel
          </p>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* Left Image */}
          <div className="lg:col-span-4 flex justify-center">
            <Image
              src="/avatar.jpeg"
              alt="My Photo"
              width={350}
              height={350}
              className="rounded-lg shadow-lg object-cover w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-6 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Software Developer &amp; Web Designer
            </h3>
            <p className="italic text-gray-200 text-sm sm:text-base">
              “Experience is the name everyone gives to their mistakes.” – Oscar Wilde
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <strong>Birthday:</strong> <span>29 October 1981</span>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <Link
                    href="https://portfolio-nb75.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:underline break-words"
                  >
                    Portfolio website
                  </Link>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <Link
                    href="https://github.com/arturkarapetyan-1981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:underline break-words"
                  >
                    github.com/arturkarapetyan-1981
                  </Link>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <Link
                    href="https://www.linkedin.com/in/artur-karapetyan-b24a26235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:underline break-words"
                  >
                    linkedin.com/in/artur-karapetyan-b24a26235
                  </Link>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <Link href="tel:0037494662370" className="text-gray-300 hover:underline">
                    +374 94 662 370
                  </Link>
                </li>
                <li>
                  <strong>City:</strong> <span>Yerevan, Armenia</span>
                </li>
              </ul>

              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <strong>Age:</strong>{" "}
                  <span>{age !== null ? age : "Loading..."}</span>
                </li>
                <li>
                  <strong>Degree:</strong> <span>Middle</span>
                </li>
                <li>
                  <strong>E-mail:</strong>{" "}
                  <Link
                    href="mailto:arturkarapetyanforwork@gmail.com"
                    className="text-gray-200 hover:underline break-words"
                  >
                    arturkarapetyanforwork@gmail.com
                  </Link>
                </li>
                <li>
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;





