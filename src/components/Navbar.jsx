import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: 'Resume', href: 'https://drive.google.com/file/d/1IgZYoMDPHUsD6j26uA_5ZiP-0xipSZI_/view' },
    { name: 'About', href: '/About' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/Skills' },
    { name: 'Achievements', href: '/Achievements' },
    { name: 'Contact', href: '/Contact' },
  ];

  return (
    <nav className="flex items-center justify-between px-12 py-8 bg-[#F5EDE3]">
      <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
        <div className="w-4 h-4 bg-black rounded-full"></div>
        <span className="text-xl font-medium tracking-tight text-gray-800">Darshini Shah</span>
      </Link>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link, index) => (
          <React.Fragment key={link.name}>
            <Link
              to={link.href}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </Link>
            {index < navLinks.length - 1 && (
              <div className="h-4 w-[1px] bg-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
