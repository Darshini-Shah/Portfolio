import React from 'react';

const About = () => {
  const leadership = [
    {
      title: 'Generative AI & ML Lead',
      org: 'Google Developer Groups (GDG) IIT Patna',
      desc: 'Selected to lead GenAI workshops and mentor students on machine learning projects. I bridge the gap between complex AI theory and practical application for the campus community.',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.593-1.053l-.547-.547z" /></svg>
      )
    },
    {
      title: 'Class Representative',
      org: 'AI & DS Batch, IIT Patna',
      desc: 'Acting as the primary bridge between the faculty and the student body. I streamline academic communication, address batch concerns, and coordinate logistics.',
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
      )
    },
    {
      title: 'Sub-Coordinator',
      org: 'Hexachrome (Puzzle Club)',
      desc: 'Organizing logic-based competitions and weekly puzzle challenges. It fuels my interest in problem solving and algorithm design.',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
      )
    }
  ];

  return (
    <div className="bg-[#F5EDE3] min-h-screen pt-8 pb-20 px-8 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Column - About Me */}
        <div className="flex flex-col justify-start">
          <div className="mb-12">
            <h1 className="text-5xl font-serif text-gray-900 mb-2">About <span className="relative">Me<span className="absolute bottom-0 left-0 w-full h-1 bg-teal-200 opacity-50"></span></span></h1>
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
            <p>
              I am a 3rd-year B.Tech student in <span className="font-bold text-gray-900">Artificial Intelligence and Data Science</span> at 
              Indian Institute of Technology (IIT) Patna, currently at an <span className="font-bold text-gray-900 underline decoration-teal-300">SPI of 9.57</span>. 
              I focus on translating complex AI research into deployable code. My journey is driven by a single question: 
              <span className="italic font-serif ml-1">How can we build code that learns?</span>
            </p>
            
            <p>
              When I am not training models or optimizing algorithms, I am building the full-stack interfaces that make them usable. 
              I believe the best engineers are those who can navigate both the theoretical depths of ML and the practical challenges 
              of Software Engineering.
            </p>

            <div className="bg-white/40 p-8 rounded-2xl border-l-4 border-teal-500 shadow-sm mt-12">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <h3 className="font-bold text-gray-900">Beyond the Screen</h3>
              </div>
              <p className="text-gray-600">
                Off-classroom, you can find me playing basketball, swimming, networking with fellow IITians or volunteering in college events. 
                I thrive in environments that challenge me to be observant, quick-thinking, and creative.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Leadership */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-2">
            Leadership
          </h2>
          
          <div className="space-y-6">
            {leadership.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex gap-6 border border-white">
                <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-blue-500 text-sm font-medium mb-3">{item.org}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
