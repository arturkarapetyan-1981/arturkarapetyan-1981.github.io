"use client";

import React, { useEffect, useState } from "react";

const roles: string[] = ["Freelancer", "Software Developer", "Web-designer"];

interface MatrixItem {
  left: string;
  delay: string;
  duration: string;
  text: string;
}

const generateRandomCodeString = (length: number): string => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

const generateMatrixData = (): MatrixItem[] => {
  return Array.from({ length: 30 }).map((_, i) => ({
    left: `${i * 3.3}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 6 + 6}s`,
    text: generateRandomCodeString(60),
  }));
};

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ placeholders (deterministic, no random = no hydration error)
  const placeholderData: MatrixItem[] = Array.from({ length: 30 }).map((_, i) => ({
    left: `${i * 3.3}%`,
    delay: "0s",
    duration: "10s",
    text: "|", // simple line until hydration
  }));

  const [matrixData, setMatrixData] = useState<MatrixItem[]>(placeholderData);

  // ✅ replace placeholders with random after hydration
  useEffect(() => {
    setMatrixData(generateMatrixData());
  }, []);

  // Typing effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      const fullText = roles[roleIndex];

      if (!isDeleting && charIndex < fullText.length) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center min-h-screen w-full text-center overflow-hidden bg-black text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {matrixData.map((item, i) => (
            <span
              key={i}
              className="plain-code"
              style={{
                left: item.left,
                animationDuration: item.duration,
                animationDelay: item.delay,
              }}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]"></div>

      {/* Hero Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Artur Karapetyan
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          I am a{" "}
          <span className="text-[var(--light-blue)] font-semibold">{currentText}</span>
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;






