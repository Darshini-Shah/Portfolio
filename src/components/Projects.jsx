import React, { useState, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Jilo',
    subtitle: 'AI-Powered RCM Normalization Engine',
    description: 'Built an end-to-end pipeline to process unstructured hospital documents using OCR and Gemini-based extraction. Generated HL7 FHIR (R4) bundles with a FastAPI backend and a React-based clinical dashboard.',
    tags: ['FastAPI', 'React', 'OCR', 'LLMs', 'FHIR'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    //paperLink: '#',
    repoLink: '#'
  },
  {
    id: 2,
    title: 'Advanced RAG System',
    subtitle: 'Hybrid Retrieval & Evaluation Pipeline',
    description: 'Developed a sophisticated retrieval system combining vector search (ChromaDB) and keyword search (BM25). Implemented query decomposition, Cohere reranking, and timestamped citation linking for high-reliability responses.',
    tags: ['LangChain', 'ChromaDB', 'Gemini', 'Python', 'RAG'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    //paperLink: '#',
    repoLink: 'https://github.com/Darshini-Shah/RAG'
  },
  {
    id: 3,
    title: 'Smart Allocator',
    subtitle: 'Geospatial Volunteer Management',
    description: 'Architected an AI-driven allocation system using geospatial filtering and skill matching for resource distribution. Integrated Gemini-based OCR with MongoDB GridFS for automated role assignment and real-time coordination.',
    tags: ['MongoDB', 'Geospatial AI', 'Node.js', 'System Design'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    //paperLink: '#',
    repoLink: 'https://github.com/Darshini-Shah/DBW_PROJECT'
  },
  {
    id: 4,
    title: 'Campus Connect',
    subtitle: 'IIT Patna Super-App',
    description: 'A centralized hub featuring live bus navigation with real-time telemetry and a student marketplace. Built with a fully Dockerized PostgreSQL/Prisma backend and a high-performance React frontend using Socket.io for real-time chat functionality.',
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'Socket.io', 'Prisma'],
    image: '/Images/Campus_connect.png',
    paperLink: '#',
    repoLink: 'https://github.com/Ayushman404/Campus_Connect'
  },
  {
    id: 5,
    title: 'Potato Disease Classifier',
    subtitle: 'Deep Learning Plant Pathology',
    description: 'Developed a Convolutional Neural Network (CNN) to automate the detection of agricultural diseases. The model distinguishes between healthy and diseased leaves with high precision to assist in early-stage crop management.',
    tags: ['Python', 'Deep Learning', 'CNN', 'Computer Vision', 'TensorFlow'],
    image: '/Images/Potato_classification.png',
    paperLink: '#',
    repoLink: 'https://github.com/Darshini-Shah/Potato_disease_classification'
  },
  {
    id: 6,
    title: 'Secure Resume Builder',
    subtitle: 'Full-Stack Application with Multi-Factor Auth',
    description: 'A security-focused web app for generating professional resumes. Features 2FA via OTP-based authentication, JWT session management, and Multer-based profile image processing. Includes high-quality PDF export via custom CSS print rules.',
    tags: ['React', 'SQLite', 'JWT', 'Express', 'bcrypt'],
    image: '/Images/Resume.png',
    //image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    paperLink: '#',
    repoLink: 'https://github.com/Darshini-Shah/Resume-builder'
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-[460px] rounded-[2rem] overflow-hidden shadow-sm transition-all duration-500 cursor-pointer group border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img 
        src={project.image} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Dynamic Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'bg-white' : 'bg-black/30'}`} />

      {/* Default View: Professional Title */}
      <div className={`absolute bottom-6 left-8 right-8 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-white text-xl font-bold tracking-wide drop-shadow-md">
          {project.title}
        </h3>
      </div>

      {/* Hover View: Spread Content */}
      <div className={`absolute inset-0 p-8 flex flex-col transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-600">Case Study</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-[11px] font-bold text-teal-500 mb-6 tracking-widest uppercase">{project.subtitle}</p>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-[9px] font-bold text-gray-400 uppercase">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-100">
            <a href={project.repoLink} className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-teal-600 transition-colors uppercase tracking-[0.2em]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-transparent min-h-screen pt-4 pb-20 px-8 md:px-16 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-serif text-gray-900 mb-3">My Projects</h1>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Exploring the frontiers of AI, RAG architectures, and full-stack systems.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
