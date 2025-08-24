import React, { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, BookOpen } from 'lucide-react';

interface HeroProps {
  isDarkMode?: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode = false, className = '' }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentTagline, setCurrentTagline] = useState<number>(0);

  const taglines: string[] = [
    "Fullstack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Creative Coder"
  ];

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Rotating taglines with crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const handleViewGithub = (): void => {
    window.open('https://github.com/Tahseen-Alam', '_blank');
  };

  const handleContact = (): void => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Updated Minimal & Elegant color scheme
  const bgClasses = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]';
  const textClasses = isDarkMode ? 'text-[#F1F1F1]' : 'text-[#1A1A1A]';
  const subtextClasses = isDarkMode ? 'text-[#A9A9A9]' : 'text-[#5A5A5A]';
  
  const primaryBtnClasses = isDarkMode 
    ? 'bg-gradient-to-r from-[#9B2226] to-[#D72638] hover:from-[#7A1B1E] hover:to-[#B52130] text-white shadow-lg shadow-red-900/30 hover:shadow-red-900/50' 
    : 'bg-gradient-to-r from-[#D72638] to-[#9B2226] hover:from-[#E53949] hover:to-[#B52130] text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50';
  
  const secondaryBtnClasses = isDarkMode 
    ? 'border border-[#9B2226] text-[#9B2226] hover:bg-[#9B2226] hover:text-[#F1F1F1]' 
    : 'border border-[#D72638] text-[#D72638] hover:bg-[#D72638] hover:text-white';

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center pt-16 ${bgClasses} ${className} relative overflow-hidden`}>
      
      {/* Premium background with depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-gradient-to-br from-[#9B2226] to-[#D72638] rounded-full opacity-10 blur-3xl animate-orb-float-1" />
        <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-gradient-to-br from-[#10B981] to-[#047857] rounded-full opacity-10 blur-3xl animate-orb-float-2" />
        
        {/* Geometric shapes */}
        <div className={`absolute top-20 right-20 w-40 h-40 border-2 ${isDarkMode ? 'border-[#9B2226]' : 'border-[#D72638]'} opacity-10 rotate-45`} />
        <div className={`absolute bottom-20 left-20 w-32 h-32 border-2 ${isDarkMode ? 'border-[#10B981]' : 'border-[#10B981]'} opacity-10 rotate-12`} />
        
        {/* Animated connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <line x1="20%" y1="80%" x2="40%" y2="30%" stroke={isDarkMode ? "#9B2226" : "#D72638"} strokeWidth="1" className="animate-line-draw" />
          <line x1="70%" y1="20%" x2="90%" y2="60%" stroke={isDarkMode ? "#10B981" : "#10B981"} strokeWidth="1" className="animate-line-draw-2" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Intro Line */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
                <div className="absolute -inset-1.5 rounded-full bg-[#10B981] animate-ping opacity-30" />
              </div>
              <span className={`text-sm font-medium ${isDarkMode ? 'text-[#A9A9A9]' : 'text-[#5A5A5A]'} tracking-wider uppercase`}>
                Available for new opportunities
              </span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-semibold ${textClasses} leading-tight mb-4 tracking-normal`}>
              Hello, I'm{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#D72638] via-[#D72638] to-[#D72638] bg-clip-text text-transparent bg-300% animate-gradient">
                  Tahseen
                </span>
              </span>
            </h1>

            {/* Student Information */}
            <div className={`flex items-center justify-center gap-2 mb-6 ${subtextClasses}`}>
              <BookOpen size={18} />
              <span className="text-sm font-medium">Final Year Computer Science Student</span>
            </div>
          </div>

          {/* Rotating Tagline */}
          <div className={`transform transition-all duration-1000 ease-out delay-300 mb-8 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="h-14 sm:h-16 md:h-20 overflow-hidden flex justify-center mb-4">
              {taglines.map((tagline, index) => (
                <h2 
                  key={index}
                  className={`text-2xl sm:text-3xl md:text-4xl font-medium ${
                    isDarkMode ? 'text-[#A9A9A9]' : 'text-[#5A5A5A]'
                  } absolute transition-all duration-700 ease-in-out whitespace-nowrap ${
                    index === currentTagline 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                >
                  {tagline}
                </h2>
              ))}
            </div>
            <div className="relative w-32 h-1 mx-auto rounded-full bg-gray-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D72638] to-[#9B2226] animate-progress"></div>
            </div>
          </div>

          {/* Description */}
          <div className={`transform transition-all duration-1000 ease-out delay-500 mb-10 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className={`text-lg sm:text-xl font-medium ${subtextClasses} leading-relaxed max-w-2xl mx-4`}>
              A passionate developer building <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#D72638] to-[#9B2226]">innovative digital solutions</span> that blend cutting-edge technology with intuitive design. Currently completing my final year in Computer Science while working on real-world projects.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transform transition-all duration-1000 ease-out delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center px-4">
              <button
                onClick={handleViewGithub}
                className={`group px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 ${primaryBtnClasses} relative overflow-hidden`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <Github size={22} />
                <span>View Projects</span>
                <ExternalLink size={18} />
              </button>
              
              <button
                onClick={handleContact}
                className={`group px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 ${secondaryBtnClasses} relative overflow-hidden`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <Mail size={22} />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to tailwind config */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes line-draw {
            0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
            100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
          }
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          @keyframes orb-float-1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -30px) rotate(5deg); }
          }
          @keyframes orb-float-2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(20px, 30px) rotate(-5deg); }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
            background-size: 200% 200%;
          }
          .animate-line-draw {
            animation: line-draw 3s ease-in-out infinite alternate;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          .animate-line-draw-2 {
            animation: line-draw 4s ease-in-out infinite alternate-reverse;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          .animate-progress {
            animation: progress 2.5s ease-in-out infinite alternate;
          }
          .animate-orb-float-1 {
            animation: orb-float-1 15s ease-in-out infinite;
          }
          .animate-orb-float-2 {
            animation: orb-float-2 18s ease-in-out infinite;
          }
          .bg-300% {
            background-size: 300% 300%;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;