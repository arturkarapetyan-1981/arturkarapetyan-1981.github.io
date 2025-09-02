"use client";

import { FC } from "react";
import { CheckSquare } from "lucide-react"; // Instead of Bootstrap icons

interface Service {
  title: string;
  description: string;
  delay?: number;
}

const services: Service[] = [
  {
    title: "Web design",
    description:
      "I have a lot of experience in design and I will be able to meet your expectations.",
  },
  {
    title: "Web development",
    description:
      "I have enough experience in building a website from scratch and I am ready to work with any demanding client.",
    delay: 100,
  },
  {
    title: "Adding information",
    description:
      "If you want to add new articles to your site, I can be helpful.",
    delay: 200,
  },
  {
    title: "Improvement of codes",
    description:
      "Maybe your website was created early and now you want to improve it, make it more responsive. I can help you with that.",
    delay: 300,
  },
  {
    title: "Improvement of individual sections of the website",
    description:
      "You may want to make changes to a specific section of your website. I will be able to help you with that.",
    delay: 400,
  },
  {
    title: "Consultation",
    description: "I will be useful to you to the best of my knowledge.",
    delay: 500,
  },
];

const Services: FC = () => {
  return (
    <section id="services" className="py-32 bg-gray-50 bg-gradient-to-r from-cyan-900 to-blue-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Services</h2>
          <p className="mt-2 text-white max-w-2xl mx-auto italic">
            Productivity is being able to do things that you were never able to
            do before. — Franz Kafka
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={service.delay || 0}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full mb-4">
                <CheckSquare className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
