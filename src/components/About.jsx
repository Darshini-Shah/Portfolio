import React from 'react';

const About = () => {
  const leadership = [
    {
      title: 'Design Team Coordinator',
      org: 'TEDxIITPatna',
      desc: 'Leading the creative direction for event-wide branding and promotional assets. I manage a team of designers to translate complex ideas into high-impact visual narratives using Figma and Adobe Photoshop.',
      icon: (
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
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
              I am a B.Tech student in <span className="font-bold text-gray-900">Artificial Intelligence and Data Science</span> at <span className="font-bold text-gray-900">IIT Patna</span>, maintaining a <span className="font-bold text-gray-900 underline decoration-teal-300">CGPA of 8.72</span> with a recent peak <span className="font-bold text-gray-900">SGPA of 9.64</span>. My work sits at the intersection of complex algorithmic problem-solving and scalable AI deployment. From ranking as a Codeforces Pupil to architecting Advanced RAG systems with parallel retrieval and reranking, I focus on building systems that don't just process data—they understand it. I bridge the gap between competitive coding rigor and full-stack engineering to create tools like Jilo, which transforms unstructured clinical chaos into structured FHIR standards.
            </p>

          </div>
        </div>

        {/* Right Column - Leadership */}
        <div>
          
          
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

            {/* Relevant Courses Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-white mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                Relevant Courses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Data Structures and Algorithms",
                  "AI Concepts",
                  "Optimization Techniques",
                  "Digital Logic and Computer Organization",
                  "Discrete Mathematics",
                  "Database and Management System"
                ].map((course, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
