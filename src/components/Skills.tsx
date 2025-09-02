"use client";
import React from "react";

interface Skill {
  name: string;
  percentage: number;
}

const skillsLeft: Skill[] = [
  { name: "HTML 5", percentage: 100 },
  { name: "CSS 3", percentage: 100 },
  { name: "JavaScript", percentage: 100 },
  { name: "OOP", percentage: 100 },
  { name: "React", percentage: 90 },
  { name: "Redux", percentage: 80 },
  { name: "Next.js", percentage: 90 },
];

const skillsRight: Skill[] = [
  { name: "Computer Architecture", percentage: 90 },
  { name: "TypeScript", percentage: 90 },
  { name: "Tailwind.css", percentage: 100 },
  { name: "Linux", percentage: 80 },
  { name: "Git", percentage: 100 },
  { name: "Github", percentage: 100 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen py-32 bg-linear-to-r from-cyan-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
          <p className="text-white max-w-2xl mx-auto">
            I am a hard working professional who never stops learning and improving
            his skills. Responsibility and punctuality add value to the quality of my work.
          </p>
        </div>

        {/* Skills Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {skillsLeft.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-white">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[var(--red)] h-3 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {skillsRight.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-white">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[var(--red)] h-3 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
