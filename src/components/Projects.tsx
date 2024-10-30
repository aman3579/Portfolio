import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Examining Cellular Heterogenity',
    description:
      'Developed a project involving the reduction of dimensionality of a large dataset of gene expressions using Principal Component Analysis (65 samples, 13,000 genes).Employed regression algorithms, including Bayesian Ridge Regression, Linear Regression, and Random Forest, to model the relationship between principal components and the number of cell types.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/aman3579/Cellular-heterogeity',
  },
  {
    title: 'LTE Schedulers algorithms in NS3',
    description:
      'Implemented an LTE scheduling algorithm in C++, the algorithm simulated Downlink (DL) and Uplink (UL) transmissions within a 5G NR (New Radio) network environment.The project encompassed setting up network topologies, integrating mobility models, and incorporating error models for realistic simulations.  Through extensive analysis, the algorithms performance was evaluated, measuring metrics including throughput, delay, and packet loss rate',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
    tags: ['C++', 'NS3'],
    github: 'https://github.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
