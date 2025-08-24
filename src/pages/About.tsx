import React, { useState, useEffect } from 'react';

interface AboutProps {
  isDarkMode?: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode = false }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Color scheme matching the hero section exactly
  const bgClasses = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]';
  const textClasses = isDarkMode ? 'text-[#F1F1F1]' : 'text-[#1A1A1A]';
  const subtextClasses = isDarkMode ? 'text-[#A9A9A9]' : 'text-[#5A5A5A]';
  const accentColor = isDarkMode ? 'text-[#D72638]' : 'text-[#9B2226]';

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center py-16 ${bgClasses} relative overflow-hidden`}>
      
      {/* Matching background elements from hero */}
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

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Title */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className={`text-4xl sm:text-5xl font-semibold ${textClasses} mb-4`}>
            About <span className={accentColor}>Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D72638] to-[#9B2226] mx-auto rounded-full"></div>
        </div>

        {/* Main Content - Full width with flowing text */}
        <div className={`w-full max-w-none transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          
          {/* Flowing paragraph without breaks */}
          <div className={`mb-8 transform transition-all duration-700 ease-out delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <p className={`${subtextClasses} text-lg sm:text-xl leading-relaxed text-justify`}>
              I'm a <span className="font-medium ${accentColor}">Fullstack Developer</span> passionate about turning ideas into products that actually solve problems. I've built projects like <span className="font-medium">DevSnip</span> (a personal code snippet manager) and <span className="font-medium">InnerLight</span> (a mental wellness platform), which reflect my love for creating tools that are practical and meaningful.
            </p>
          </div>
          
          {/* Second flowing paragraph */}
          <div className={`mb-8 transform transition-all duration-700 ease-out delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <p className={`${subtextClasses} text-lg sm:text-xl leading-relaxed text-justify`}>
              What excites me the most is building real-world applications that blend creativity with technology — from crafting smooth user experiences to architecting robust backends. Beyond coding, I enjoy learning new concepts in <span className="font-medium">DevOps, AI, and system design</span>, always looking for ways to sharpen my skills and grow.
            </p>
          </div>

          {/* Philosophy section with subtle emphasis */}
          <div className={`mb-8 p-6 border-l-4 ${isDarkMode ? 'border-[#D72638]' : 'border-[#D72638]'} bg-gradient-to-r ${isDarkMode ? 'from-[#1A1A1A]' : 'from-[#F7F7F7]'} transform transition-all duration-700 ease-out delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <p className={`${subtextClasses} text-lg sm:text-xl leading-relaxed font-medium italic`}>
              For me, development isn't just about writing code — it's about <span className="font-semibold ${accentColor}">building impact</span> and constantly improving myself as both a <span className="font-semibold">creator and problem-solver</span>.
            </p>
          </div>

          {/* Personal touch */}
          <div className={`transform transition-all duration-700 ease-out delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <p className={`${subtextClasses} text-lg sm:text-xl leading-relaxed text-justify`}>
              When I'm not immersed in code, you'll find me cheering for RCB, exploring new technologies, or refining my craft — because I believe that great products emerge when passion meets persistence.
            </p>
          </div>
        </div>
      </div>

      {/* Add custom animations to match hero section */}
      <style>
        {`
          @keyframes line-draw {
            0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
            100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
          }
          @keyframes orb-float-1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -30px) rotate(5deg); }
          }
          @keyframes orb-float-2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(20px, 30px) rotate(-5deg); }
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
          .animate-orb-float-1 {
            animation: orb-float-1 15s ease-in-out infinite;
          }
          .animate-orb-float-2 {
            animation: orb-float-2 18s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default About;