import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5EDE3] flex-grow px-12 pt-12 pb-16">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl w-full">
        {/* Profile Image */}
        <div className="relative w-80 h-80 flex-shrink-0">
          <div className="absolute inset-0 bg-white rounded-full shadow-inner overflow-hidden border-8 border-white/50">
            <img 
              src="/Images/personal_photo.jpeg" 
              alt="Darshini Shah" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-6xl font-light tracking-tight text-gray-900 mb-2">
            Hello! I'm Darshini
          </h1>
          <h2 className="text-lg font-medium text-gray-500 mb-8 uppercase tracking-widest">
            Full-Stack Developer & AI Engineer
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl mb-8">
            I am a 3rd-year B.Tech undergraduate in Artificial Intelligence & Data Science at IIT Patna. I specialize in building robust, end-to-end applications by bridging the gap between high-performance logic and modern web architecture. From architecting FastAPI backends and React dashboards to engineering AI-powered normalization engines, I am passionate about creating scalable, full-stack solutions that solve real-world complexities.
          </p>
          
          {/* Download Resume Button */}
          <a 
            href="/Others/Resume_2026.pdf"
            download="Darshini_Shah_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-8 py-3.5 text-sm font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-md inline-block"
          >
            <div className="flex items-center gap-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
