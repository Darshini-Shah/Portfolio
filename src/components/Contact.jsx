import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#F5EDE3] min-h-screen pt-8 pb-20 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        {/* Right Side: Form */}
        <div className="flex-1 w-[95%] max-w-1xl bg-white p-6 rounded-[2.5rem] shadow-sm border border-white">
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID_HERE" 
            method="POST"
            className="space-y-8"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 ml-1">Your Name</label>
              <input 
                name="name"
                type="text" 
                placeholder="Darshini Shah" 
                required
                className="w-full p-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-gray-300"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 ml-1">Your Email</label>
              <input 
                name="email"
                type="email" 
                placeholder="darshini@example.com" 
                required
                className="w-full p-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2 relative">
              <label className="text-sm font-medium text-gray-700 ml-1">Subject</label>
              <input 
                name="subject"
                type="text" 
                placeholder="General Inquiry" 
                className="w-full p-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-gray-300"
              />
              <div className="absolute right-4 bottom-4 text-gray-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
              <textarea 
                name="message"
                rows="4"
                placeholder="Tell me about your ideas..." 
                required
                className="w-full p-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-gray-300 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-[#3E5855] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#2D4542] transition-colors shadow-lg shadow-teal-900/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform -rotate-12"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Left Side: Info */}
        <div className="flex-1 space-y-10">
          <div className="max-w-md">
            <h1 className="text-5xl font-serif text-gray-900 mb-6">Contact</h1>
          </div>

          <div className="space-y-4 max-w-md">
            {/* Contact Number Card */}
            <div className="bg-white/50 p-4 rounded-3xl flex items-center gap-6 border border-white">
              <div className="bg-[#EDF2F9] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-[#2D455A]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Contact Number</h4>
                <p className="text-gray-500 text-sm">+91 9054446805</p>
              </div>
            </div>
            {/* Email Card */}
            <div className="bg-white/50 p-4 rounded-3xl flex items-center gap-6 border border-white">
              <div className="bg-[#E9F2F0] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-[#2D5A52]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email Me</h4>
                <p className="text-gray-500 text-sm">shahdarshini38@gmail.com</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/50 p-4 rounded-3xl flex items-center gap-6 border border-white">
              <div className="bg-[#F9EDEC] w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-[#C15B54]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Location</h4>
                <p className="text-gray-500 text-sm">Indian Institute of Technology Patna, Bihar, India</p>
              </div>
            </div>

            
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;
