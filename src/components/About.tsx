"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const [age, setAge] = useState<number | null>(null);

  // Calculate age automatically
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
    <section
      className="min-h-screen flex items-center bg-linear-to-r from-cyan-900 to-blue-900 text-white px-6 lg:px-20 py-12"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white pt-16">About</h2>
          <p className="text-lg italic text-gray-200">
            In order to be irreplaceable, one must always be different – Coco Chanel
          </p>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Image */}
          <div className="lg:col-span-4 flex justify-center">
            <Image
              src="/avatar.jpeg"
              alt="My Photo"
              width={350}
              height={350}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Developer &amp; Web Designer
            </h3>
            <p className="italic text-gray-200">
              “Experience is the name everyone gives to their mistakes.” – Oscar Wilde
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li>
                  <strong>Birthday:</strong> <span>29 October 1981</span>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://portfolio-nb75.vercel.app/"
                    className="text-gray-300 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Portfolio website
                  </a>
                </li>
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/arturkarapetyan-1981"
                    className="text-gray-300 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/arturkarapetyan-1981
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/artur-karapetyan-b24a26235/"
                    className="text-gray-300 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.linkedin.com/in/artur-karapetyan-b24a26235/
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:0037494662370"
                    className="text-gray-300 hover:underline"
                  >
                    +374 94 662 370
                  </a>
                </li>
                <li>
                  <strong>City:</strong> <span>Yerevan, Armenia</span>
                </li>
              </ul>

              <ul className="space-y-3">
                <li>
                  <strong>Age:</strong>{" "}
                  <span>{age !== null ? age : "Loading..."}</span>
                </li>
                <li>
                  <strong>Degree:</strong> <span>Middle</span>
                </li>
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:arturkarapetyanforwork@gmail.com"
                    className="text-gray-200 hover:underline"
                  >
                    arturkarapetyanforwork@gmail.com
                  </a>
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




