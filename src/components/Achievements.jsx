import React from 'react';

const achievements = [
  {
    title: 'Top 5 Academic Performer',
    org: 'IIT Patna',
    desc: 'Maintained a cumulative GPA of 8.72/10, achieving a standout 9.64 SGPA in the 3rd semester to rank among the top 5 students in the AI & Data Science branch.',
    date: '2024 - Present',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
    )
  },
  {
    title: '2nd Place - HACKMATRIX 2.0',
    org: 'Healthcare Hackathon',
    desc: 'Secured a podium finish in a national-level healthcare hackathon by developing "Jilo," an AI-powered engine for clinical entity extraction and RCM normalization.',
    date: 'March 2026',
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
    )
  },
  {
    title: 'Inter IIT Tech Meet 14.0',
    org: 'IIT Patna Contingent',
    desc: 'Selected as a core member to represent the institute, architecting an agentic query-processing chatbot for the ObservAI challenge using advanced priority queue routing.',
    date: 'April 2026',
    icon: (
      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )
  },
  {
    title: 'Top 2% Global DSA Ranker',
    org: 'LeetCode & Codeforces',
    desc: 'Solved 600+ problems, ranking 125,000 out of 5M+ users on LeetCode. Also achieved Pupil status (1200+ rating) on Codeforces.',
    date: 'Active',
    icon: (
      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  }
];

const Achievements = () => {
  return (
    <div className="bg-transparent min-h-screen pt-8 pb-16 px-4 md:px-12 flex flex-col items-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-5">
          <h1 className="text-6xl font-serif text-gray-900 mb-4 text-center">Achievements</h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed text-center mx-auto">
   A curated timeline of academic excellence, competitive programming milestones, and award-winning engineering solutions developed.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 border border-white flex flex-col h-full">
              <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 block">{item.date}</span>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-blue-500 text-sm font-medium mb-4">{item.org}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              {/* <div className="mt-6 pt-6 border-t border-gray-50 flex justify-end">
                 <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
