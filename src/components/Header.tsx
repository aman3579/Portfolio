import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="p-2 hover:text-indigo-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="p-2 hover:text-indigo-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your@email.com" className="p-2 hover:text-indigo-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}