import React from 'react';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      ), 
      href: 'https://www.linkedin.com/in/darshini-shah-59166531a/',
      color: 'hover:text-[#0077B5]'
    },
    { 
      name: 'GitHub', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      ), 
      href: 'https://github.com/Darshini-Shah',
      color: 'hover:text-[#333]'
    },
    { 
      name: 'Gmail', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      ), 
      href: 'mailto:shahdarshini38@gmail.com',
      color: 'hover:text-[#EA4335]'
    },
    { 
      name: 'LeetCode', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.88 9.88a1.374 1.374 0 0 0 0 1.94l6.058 6.057a1.374 1.374 0 0 0 1.94 0l9.88-9.88a1.374 1.374 0 0 0 0-1.94L14.444.414A1.374 1.374 0 0 0 13.483 0zM4.757 11.473l7.352-7.353 3.164 3.164-7.352 7.353-3.164-3.164zm10.743-1.615l.775-.775 3.164 3.164-.775.775-3.164-3.164zm-5.042 10.147l.775-.775 3.164 3.164-.775.775-3.164-3.164z"/></svg>
      ), 
      href: 'https://leetcode.com/u/Darshini_Shah/',
      color: 'hover:text-[#FFA116]'
    },
    
  ];

  return (
    <footer className="bg-transparent py-16 px-12 md:px-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">

        <div className="flex items-center gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 transition-all duration-300 transform hover:scale-110 ${social.color}`}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      <div className="mt-4 text-center text-xs text-gray-400">
        Designed & Built with React + Tailwind CSS by Darshini Shah
      </div>
    </footer>
  );
};

export default Footer;
