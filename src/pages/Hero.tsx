import React, { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, FileDown, ArrowRight } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

interface HeroProps {
  isDarkMode?: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode = false, className = '' }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const snapshot = [
    { label: "Internships", value: "02" },
    { label: "Projects Built", value: "05" },
    { label: "Live Products", value: "04" },
    { label: "DSA Problems", value: "300+" }
  ];

  const currentFocus = ["Redis", "BullMQ", "AWS", "AI Systems"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleViewWork = (): void => {
    const element = document.querySelector('#projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = (): void => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/tassu1", icon: <Github size={19} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/md-tahseen-alam-892317263/", icon: <Linkedin size={19} /> },
    { name: "LeetCode", href: "https://leetcode.com/u/tahseen_/", icon: <SiLeetcode size={17} /> },
    { name: "Email", href: "mailto:tassutahsee@gmail.com", icon: <Mail size={19} /> }
  ];

  // Editorial color scheme
  const bgClasses = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]';
  const textClasses = isDarkMode ? 'text-[#F5F5F5]' : 'text-[#141414]';
  const subtextClasses = isDarkMode ? 'text-[#A1A1AA]' : 'text-[#5A5A5A]';
  const panelBg = isDarkMode ? 'bg-[#12151A]' : 'bg-white';
  const panelBorder = isDarkMode ? 'border-[#22252B]' : 'border-[#E5E5E5]';
  const monoClasses = isDarkMode ? 'text-[#A1A1AA]' : 'text-[#6A6A6A]';

  const primaryBtnClasses = isDarkMode
    ? 'bg-[#6C8CFF] hover:bg-[#7C93FF] text-[#0A0A0A]'
    : 'bg-[#4F46E5] hover:bg-[#4338CA] text-white';

  const secondaryBtnClasses = isDarkMode
    ? 'border border-[#2A2D33] text-[#F5F5F5] hover:border-[#6C8CFF] hover:text-[#6C8CFF]'
    : 'border border-[#E0E0E0] text-[#141414] hover:border-[#4F46E5] hover:text-[#4F46E5]';

  return (
    <section id="home" className={`min-h-screen flex items-center pt-24 pb-16 ${bgClasses} ${className} relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">

          {/* Left: headline + copy + CTAs */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span className={`text-xs font-mono ${monoClasses} tracking-widest uppercase`}>
                STATUS: OPEN_TO_WORK
              </span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-semibold ${textClasses} leading-[1.1] tracking-tight mb-6`}>
              I build products where the frontend is only the beginning.
            </h1>

            <p className={`text-lg sm:text-xl ${subtextClasses} leading-relaxed max-w-xl mb-10`}>
              Backend-focused Full Stack Developer building scalable web applications
              with Node.js, TypeScript, Redis and cloud infrastructure — taking systems
              from database design through deployment.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={handleViewWork}
                className={`group px-7 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 flex items-center gap-2 ${primaryBtnClasses}`}
              >
                <span>View Work</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-7 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 flex items-center gap-2 ${secondaryBtnClasses}`}
              >
                <FileDown size={17} />
                <span>Resume</span>
              </a>

              <button
                onClick={handleContact}
                className={`px-7 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 flex items-center gap-2 ${secondaryBtnClasses}`}
              >
                <Mail size={17} />
                <span>Contact</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`p-2.5 rounded-lg border transition-all duration-300 ${
                    isDarkMode
                      ? 'border-[#22252B] text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#6C8CFF]'
                      : 'border-[#E5E5E5] text-[#5A5A5A] hover:text-[#141414] hover:border-[#4F46E5]'
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Engineering Snapshot panel */}
          <div className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <div className={`rounded-2xl border ${panelBorder} ${panelBg} p-6 sm:p-7 shadow-sm`}>
              <div className={`text-xs font-mono ${monoClasses} tracking-widest uppercase mb-6 pb-4 border-b ${panelBorder}`}>
                Engineering Snapshot
              </div>

              <div className="grid grid-cols-2 gap-y-6 mb-6">
                {snapshot.map((item, index) => (
                  <div key={index}>
                    <div className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? 'text-[#6C8CFF]' : 'text-[#4F46E5]'} font-mono`}>
                      {item.value}
                    </div>
                    <div className={`text-xs ${subtextClasses} tracking-wide uppercase mt-1`}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`pt-5 border-t ${panelBorder}`}>
                <div className={`text-xs font-mono ${monoClasses} tracking-widest uppercase mb-3`}>
                  Current Focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentFocus.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md ${
                        isDarkMode ? 'bg-[#1A1D23] text-[#A1A1AA]' : 'bg-[#F5F5F7] text-[#5A5A5A]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
