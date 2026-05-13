import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#F5EDE3]">
      {/* Dynamic Mesh Gradient */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-out opacity-40"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(75, 46, 30, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(141, 110, 99, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${mousePos.y}% ${100 - mousePos.x}%, rgba(161, 136, 127, 0.1) 0%, transparent 50%)
          `
        }}
      />

      {/* Floating Geometric Lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4b2e1e_1px,transparent_1px),linear-gradient(to_bottom,#4b2e1e_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-pulse" />
      </div>

      {/* Slowly Rotating Soft Halo */}
      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] border-[1px] border-[#4b2e1e]/5 rounded-[40%] animate-spin-slow pointer-events-none" />
      <div className="absolute top-[-10%] left-[-20%] w-[130%] h-[130%] border-[1px] border-[#8d6e63]/5 rounded-[30%] animate-spin-slow-reverse pointer-events-none" />
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default AnimatedBackground;
