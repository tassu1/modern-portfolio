import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, MessageCircle, ExternalLink, Code } from 'lucide-react';

interface ContactProps {
  isDarkMode?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode = false }) => {
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
  const cardBg = isDarkMode ? 'bg-[#121212] hover:bg-[#1A1A1A]' : 'bg-white hover:bg-[#F7F7F7]';
  const borderColor = isDarkMode ? 'border-[#2A2A2A]' : 'border-[#EAEAEA]';

  // Contact methods
  const contactMethods = [
    {
      name: "Email",
      icon: <Mail size={24} />,
      value: "tassutahsee@gmail.com",
      link: "mailto:tassutahsee@gmail.com",
      color: "from-blue-500 to-blue-600",
      description: "Send me an email directly"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      value: "Linkedin",
      link: "https://www.linkedin.com/in/md-tahseen-alam-892317263/",
      color: "from-blue-600 to-blue-700",
      description: "Connect professionally"
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      value: "Github",
      link: "https://github.com/tassu1",
      color: "from-gray-700 to-gray-800",
      description: "View my projects"
    },
    {
      name: "LeetCode",
      icon: <Code size={24} />,
      value: "Leetcode",
      link: "https://leetcode.com/u/tahseen_/",
      color: "from-amber-500 to-amber-600",
      description: "Check my coding solutions"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={24} />,
      value: "+91 9117391745",
      link: "https://wa.me/919117391745",
      color: "from-green-500 to-green-600",
      description: "Message me directly"
    }
  ];

  return (
    <section id="contact" className={`py-16 ${bgClasses} relative w-full overflow-hidden`}>
      
      {/* Background elements matching the hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-gradient-to-br from-[#9B2226] to-[#D72638] rounded-full opacity-10 blur-3xl animate-orb-float-1" />
        <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-gradient-to-br from-[#10B981] to-[#047857] rounded-full opacity-10 blur-3xl animate-orb-float-2" />
        
        {/* Geometric shapes */}
        <div className={`absolute top-20 right-20 w-40 h-40 border-2 ${isDarkMode ? 'border-[#9B2226]' : 'border-[#D72638]'} opacity-10 rotate-45`} />
        <div className={`absolute bottom-20 left-20 w-32 h-32 border-2 ${isDarkMode ? 'border-[#10B981]' : 'border-[#10B981]'} opacity-10 rotate-12`} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className={`text-4xl sm:text-5xl font-semibold ${textClasses} mb-4 tracking-normal`}>
            Let's <span className={accentColor}>Connect</span>
          </h2>
          <p className={`${subtextClasses} text-xl max-w-2xl mx-auto mb-6`}>
            I'm always open to collaborations, opportunities, or just a friendly chat about tech.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D72638] to-[#9B2226] mx-auto rounded-full"></div>
        </div>

        {/* Contact Methods Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-xl p-5 ${cardBg} border ${borderColor} shadow-md transition-all duration-300 hover:scale-102 hover:shadow-lg`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <ExternalLink size={16} className={subtextClasses} />
                </div>
                
                <div className="flex-grow">
                  <h3 className={`text-lg font-semibold ${textClasses} mb-1`}>
                    {method.name}
                  </h3>
                  <p className={`text-sm ${subtextClasses} mb-2`}>
                    {method.description}
                  </p>
                </div>
                
                <p className={`text-xs font-mono ${isDarkMode ? 'text-blue-300' : 'text-blue-600'} truncate`}>
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className={`text-center transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#047857] text-white mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium">Available for new opportunities</span>
          </div>
          
          <p className={`${subtextClasses} max-w-2xl mx-auto`}>
            Feel free to reach out through any platform above. I typically respond within 24 hours and 
            I'm always excited to discuss new projects, collaborations, or tech innovations.
          </p>
        </div>
      </div>

      {/* Add custom animations to match hero section */}
      <style>
        {`
          @keyframes orb-float-1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -30px) rotate(5deg); }
          }
          @keyframes orb-float-2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(20px, 30px) rotate(-5deg); }
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

export default Contact;