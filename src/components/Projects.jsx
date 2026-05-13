import React, { useState, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Autonomous Agentic Offloading',
    subtitle: 'Edge-Cloud Optimization System',
    description: 'An implementable agent-based system that decides between edge vs. cloud execution. Designed the data pipeline and a ReAct-based decision interface for contextual state reasoning.',
    tags: ['Agentic AI', 'ReAct', 'Systems', 'Python'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    paperLink: '#',
    repoLink: '#'
  },
  {
    id: 2,
    title: 'Neural Network Architectures',
    subtitle: 'Deep Learning Research',
    description: 'A comprehensive study of novel neural network architectures for computer vision tasks, focusing on efficiency and real-time performance on mobile devices.',
    tags: ['PyTorch', 'Computer Vision', 'CNN', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    paperLink: '#',
    repoLink: '#'
  },
  {
    id: 3,
    title: 'Cloud-Native Dashboard',
    subtitle: 'Scalable Web Infrastructure',
    description: 'Developed a real-time monitoring dashboard for Kubernetes clusters using Go and React. Implemented custom metrics visualization and automated alerting systems.',
    tags: ['Go', 'Kubernetes', 'React', 'Grafana'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    paperLink: '#',
    repoLink: '#'
  },
  {
    id: 4,
    title: 'Smart Grid Optimization',
    subtitle: 'Energy Systems AI',
    description: 'Applied reinforcement learning to optimize power distribution in smart grids, reducing energy waste by 15% in simulated environments.',
    tags: ['RL', 'Energy', 'Optimization', 'Python'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    paperLink: '#',
    repoLink: '#'
  }
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex-shrink-0 w-[300px] md:w-[400px] h-[550px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img 
        src={project.image} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

      {/* Default View (Vertical Text) */}
      <div className={`absolute bottom-10 left-10 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-white text-3xl font-serif italic">{project.title.split(' ')[0]}</h3>
      </div>

      {/* Hover View (Detail Card) */}
      <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-white rounded-2xl p-6 shadow-2xl h-full flex flex-col">
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-4">
               <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Research Project</span>
               <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/></svg>
               </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
            <p className="text-sm font-medium text-blue-600 mb-4">{project.subtitle}</p>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-md text-[11px] font-medium text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <a href={project.paperLink} className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-black">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Paper
            </a>
            <a href={project.repoLink} className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-black">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              Code / Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5EDE3] min-h-screen pt-8 pb-20 px-4 md:px-12 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 relative">
          {/* Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-4 hover:scale-110 transition-transform hidden md:block"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          
          <h1 className="text-7xl font-serif text-gray-900 mb-6">My Works</h1>
          <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
            Witness the beauty of nature through our lens, as we showcase stunning landscapes that evoke wonder and appreciation for the environment.
          </p>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-4 hover:scale-110 transition-transform hidden md:block"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 px-4 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
