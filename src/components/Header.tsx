"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#certificates", label: "Certificates" },
    { href: "#books", label: "Books" },
    { href: "#skills", label: "Skills" }, // ✅ Added Skills
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top header (always visible) */}
      <header className="fixed top-0 left-0 w-full z-30 bg-black/40 backdrop-blur">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo instead of text */}
          <a href="#hero" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </a>

          {/* Hamburger (controls sidebar) */}
          <button className="text-white" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Sidebar (appears only when menuOpen is true) */}
      {menuOpen && (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-linear-to-r from-cyan-900 to-blue-900 text-white p-6 z-40 transform animate-slide-in">
          {/* Close button */}
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <X className="text-white" size={28} />
            </button>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center mb-8 mt-4">
            <Image
              width={100}
              height={100}
              src="/avatar.jpeg"
              alt="Avatar"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Artur Karapetyan</h2>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.upwork.com/freelancers/~0181348e188e66da22"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-upwork text-xl"></i>
              </a>
              <a
                href="https://github.com/karart1981"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/artur-karapetyan-b24a26235/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-3 text-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>
      )}

      {/* Optional overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;






