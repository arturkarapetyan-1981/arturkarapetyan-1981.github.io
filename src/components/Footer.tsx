"use client";

import { FC } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">My Portfolio</h3>
            <p className="text-sm">
              Building modern, responsive, and user-friendly websites with
              creativity and clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#services"
                  className="hover:text-pink-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-pink-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-pink-400 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <p className="text-sm">123-11 Arno Babajanyan St, Yerevan</p>
            <p className="text-sm">Email: arturkarapetyanforwork@gmail.com</p>
            <p className="text-sm">
              Phone:{" "}
              <Link
                href="tel:+37494662370"
                className="hover:text-pink-400 transition-colors"
              >
                +374 94 662 370
              </Link>
            </p>

            {/* Social Media */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start text-xl">
              <Link
                target="_blank"
                href="https://www.facebook.com/artur.karapetyan.54922"
                className="hover:text-pink-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/in/artur-karapetyan-b24a26235/"
                className="hover:text-pink-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                target="_blank"
                href="https://www.upwork.com/freelancers/~0181348e188e66da22"
                className="hover:text-pink-400 transition-colors"
                aria-label="Upwork"
              >
                <SiUpwork />
              </Link>

              <Link
                target="_blank"
                href="https://github.com/arturkarapetyan-1981"
                className="hover:text-pink-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;




