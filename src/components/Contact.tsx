"use client";

import { FC, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact: FC = () => {
  const [statusMessage, setStatusMessage] = useState<string>("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      setStatusMessage("✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatusMessage("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 bg-gray-50 bg-gradient-to-r from-cyan-900 to-blue-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-white max-w-2xl mx-auto italic">
            Honesty is the cornerstone of all success, without which confidence
            and ability to perform shall cease to exist. — Mary Kay Ash
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8" data-aos="fade-in">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4">
              <MapPin className="text-pink-500 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Location:</h4>
                <p className="text-gray-600">
                  123-11 Arno Babajanyan Street, Yerevan, Armenia
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4">
              <Mail className="text-pink-500 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Email:</h4>
                <p className="text-gray-600">arturkarapetyanforwork@gmail.com</p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-4">
              <Phone className="text-pink-500 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Call:</h4>
                <p>
                  <a
                    href="tel:0037494662370"
                    className="text-pink-600 hover:underline"
                  >
                    +374 94 662 370
                  </a>
                </p>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.036682422285!2d44.441061314753625!3d40.1637369789121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abe77b1428553%3A0x476151f2b3b86987!2s123%20Arno%20Babajanyan%20St%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1664626924564!5m2!1sen!2s"
              title="Map of my office"
              className="rounded-2xl w-full h-72 border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            id="contact-form"
            onSubmit={sendEmail}
            className="bg-white shadow-md rounded-2xl p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="email"
                  required
                  className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-[var(--red)] text-white font-semibold rounded-lg hover:bg-[var(--dark-red)] transition cursor-pointer"
              >
                Send Message
              </button>
            </div>
            {statusMessage && (
              <p className="text-center text-sm mt-2">{statusMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
