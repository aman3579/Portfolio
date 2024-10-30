import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Aman
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Full Stack Developer crafting beautiful digital experiences
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With a passion for creating intuitive and impactful web
              applications, I bring ideas to life through clean code and modern
              design.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-indigo-300 to-purple-100 overflow-hidden">
              <img
                src="/src/components/aman.jpg"
                alt="Profile"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
