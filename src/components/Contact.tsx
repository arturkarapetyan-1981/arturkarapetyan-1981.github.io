"use client";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { FC, useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const contactEmail = "frontdevarturkar@gmail.com";

type ContactPayload = {
  to_email: string;
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
};

const isEmailServiceAuthError = (error: unknown) => {
  const providerMessage =
    error instanceof EmailJSResponseStatus
      ? error.text
      : error instanceof Error
        ? error.message
        : "";
  const normalizedMessage = providerMessage.toLowerCase();

  return (
    normalizedMessage.includes("gmail_api") ||
    normalizedMessage.includes("invalid grant") ||
    normalizedMessage.includes("reconnect your gmail account")
  );
};

const buildMailtoHref = ({ from_name, reply_to, subject, message }: ContactPayload) => {
  const body = [message, "", `From: ${from_name}`, `Reply to: ${reply_to}`]
    .filter(Boolean)
    .join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(
    subject || "Website contact"
  )}&body=${encodeURIComponent(body)}`;
};

const resolveSendErrorMessage = (error: unknown) => {
  const fallbackMessage = "Failed to send message. Please try again.";
  const providerMessage =
    error instanceof EmailJSResponseStatus
      ? error.text
      : error instanceof Error
        ? error.message
        : "";

  if (isEmailServiceAuthError(error)) {
    return "The email service is temporarily unavailable. Opening your email app so you can send the message directly.";
  }

  return providerMessage || fallbackMessage;
};

const Contact: FC = () => {
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: ContactPayload = {
      to_email: contactEmail,
      from_name: String(formData.get("from_name") ?? "").trim(),
      reply_to: String(formData.get("reply_to") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusType("error");
      setStatusMessage("Email service is not configured. Please try again later.");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatusMessage("");
      setStatusType(null);

      await emailjs.send(serviceId, templateId, payload, {
        publicKey,
      });

      setStatusType("success");
      setStatusMessage("Message sent successfully.");
      form.reset();
    } catch (error) {
      setStatusType("error");
      if (isEmailServiceAuthError(error)) {
        setStatusMessage(resolveSendErrorMessage(error));
        window.location.href = buildMailtoHref(payload);
        return;
      }

      setStatusMessage(resolveSendErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-gradient-to-r from-cyan-900 to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-200">Contact</h2>
          <p className="mt-2 text-white max-w-2xl mx-auto text-sm sm:text-base italic px-2">
            Honesty is the cornerstone of all success, without which confidence
            and ability to perform shall cease to exist. — Mary Kay Ash
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-in">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <MapPin className="text-pink-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Location:</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  123-11 Arno Babajanyan Street, Yerevan, Armenia
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <Mail className="text-pink-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email:</h4>
                <p className="text-gray-600 text-sm sm:text-base break-words">
                  {contactEmail}
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <Phone className="text-pink-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Call:</h4>
                <p>
                  <a
                    href="tel:0037494662370"
                    className="text-pink-600 hover:underline text-sm sm:text-base"
                  >
                    +374 94 662 370
                  </a>
                </p>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.036682422285!2d44.441061314753625!3d40.1637369789121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abe77b1428553%3A0x476151f2b3b86987!2s123%20Arno%20Babajanyan%20St%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1664626924564!5m2!1sen!2s"
              title="Map of my office"
              className="rounded-2xl w-full h-56 sm:h-72 border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            id="contact-form"
            onSubmit={sendEmail}
            className="bg-white shadow-md rounded-2xl p-4 sm:p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  className="w-full p-2 sm:p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500 text-sm sm:text-base text-slate-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                  Your Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="email"
                  required
                  className="w-full p-2 sm:p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500 text-sm sm:text-base text-slate-900"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-900">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="w-full p-2 sm:p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500 text-sm sm:text-base text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full p-2 sm:p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-500 text-sm sm:text-base text-slate-900"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[var(--red)] text-white font-semibold rounded-lg hover:bg-[var(--dark-red)] transition cursor-pointer text-sm sm:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {statusMessage && (
              <div
                className={`text-center text-sm mt-2 ${
                  statusType === "success" ? "text-green-700" : "text-red-700"
                }`}
                aria-live="polite"
              >
                <p>{statusMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


