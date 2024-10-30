import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const skills = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Frontend Development',
    description:
      'Creating responsive and interactive user interfaces with modern frameworks and tools.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Backend Development',
    description: 'Building scalable server-side applications and RESTful APIs.',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Event Management',
    description: 'Conducting educational workshops on various technical topics',
    technologies: [
      'Web Development',
      'Cryptography',
      'Networking',
      'Prototyping',
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with experience in building modern web
            applications. I love learning new technologies and solving complex
            problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <p className="text-gray-600 mb-6">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
