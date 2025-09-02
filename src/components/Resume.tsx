"use client";

import React from "react";
import Link from 'next/link'

const Resume: React.FC = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-linear-to-r from-cyan-900 to-blue-900 text-white py-32"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>
          <p className="max-w-2xl mx-auto italic">
            Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today. – Malcolm X
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Summary */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-pink-300 mb-4">
                Summary
              </h3>
              <h4 className="text-xl font-bold">Artur Karapetyan</h4>
              <p className="italic text-gray-200">
                Front-End Developer & Web Designer with 4 years experience.
              </p>
              <ul className="mt-4 space-y-2">
                <li>📍 Yerevan, Armenia</li>
                <li>
                  📞{" "}
                  <Link
                    href="tel:0037494662370"
                    className="text-pink-300 hover:underline"
                  >
                    (+374) 94 662 370
                  </Link>
                </li>
                <li>✉️ 
                  <Link
                    href= "mailto: arturkarapetyanforwork@gmail.com"
                    className="text-pink-300 hover:underline"
                  >
                    arturkarapetyanforwork@gmail.com
                  </Link>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-pink-300 mb-6">
                Education
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg">Self-learned</h4>
                  <h5 className="text-sm text-gray-200">2020 Mar – 2022 Feb</h5>
                  <p className="italic">HTML5, CSS3</p>
                  <p className="mt-2 text-gray-200">
                    Learned through online lessons and reading, then created
                    websites from scratch.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">HS Rocket</h4>
                  <h5 className="text-sm text-gray-200">2022 May – 2022 Nov</h5>
                  <p className="italic">JavaScript</p>
                  <p className="mt-2 text-gray-200">
                    Intensive training with real projects, monthly exams, and
                    deep practice in OOP, Webpack, Gulp, Babel, Git & GitHub.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Picsart Academy</h4>
                  <h5 className="text-sm text-gray-200">2023 Jan – 2024 Nov</h5>
                  <p className="italic">
                    OOP, JavaScript, React.js, Redux, TypeScript, Next.js, Linux
                  </p>
                  <p className="mt-2 text-gray-200">
                    Currently studying and interning at Code Republic Lab of
                    Picsart Academy as a Frontend Developer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-pink-300 mb-6">
                Professional Experience
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg">Upwork</h4>
                  <h5 className="text-sm text-gray-200">2021 May – Present</h5>
                  <p className="italic">Freelancer</p>
                  <p className="mt-2 text-gray-200">
                    Successfully delivered freelance projects for international
                    clients.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    Code Republic Lab, Picsart Academy
                  </h4>
                  <h5 className="text-sm text-gray-200">2023 Jan – 2024 Feb</h5>
                  <p className="italic">Software Developer</p>
                  <p className="mt-2 text-gray-200">
                    Built real-world projects in parallel with studies at
                    Picsart Academy.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Full Learning</h4>
                  <h5 className="text-sm text-gray-200">2025 June – 2025 Aug</h5>
                  <p className="italic">Software Developer</p>
                  <p className="mt-2 text-gray-200">
                    Contributed to multiple innovative projects in a united
                    group.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
