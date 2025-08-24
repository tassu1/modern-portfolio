import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  isDarkMode?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode = false }) => {
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


  // Projects data
  const projects = [
    {
      title: "InnerLight",
      description: "A fullstack mental wellness platform designed to support mental health through AI therapy, journaling, self-help resources, and wellness tracking. Built with modular architecture and secure data management.",
      tags: ["MERN", "Cloudinary", "JWT Auth", "Modular Backend"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "CodeSnip",
      description: "A simple, minimal, and fast code snippet manager for developers to organize, filter, and retrieve their code instantly. Designed with a focus on productivity and clean user experience.",
      tags: ["MERN", "TypeScript", "React", "Tailwind"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "TheraEase",
      description: "A responsive landing page built for a therapy and wellness platform. Designed with accessibility and clean UI in mind, featuring smooth animations and modern design principles.",
      tags: ["React", "Tailwind", "Framer Motion", "Responsive"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "SmartCall",
      description: "A video conferencing application offering real-time video/audio calls, chat, and meeting scheduling. Built with WebRTC technology for seamless communication experiences.",
      tags: ["WebRTC", "Node.js", "Socket.io", "React"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className={`py-16 ${bgClasses} relative w-full overflow-hidden`}>
      
      {/* Background elements matching the hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -right-10 w-80 h-80 bg-gradient-to-br from-[#9B2226] to-[#D72638] rounded-full opacity-10 blur-3xl animate-orb-float-1" />
        <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-gradient-to-br from-[#10B981] to-[#047857] rounded-full opacity-10 blur-3xl animate-orb-float-2" />
        
        {/* Geometric shapes */}
        <div className={`absolute top-20 left-20 w-40 h-40 border-2 ${isDarkMode ? 'border-[#9B2226]' : 'border-[#D72638]'} opacity-10 rotate-45`} />
        <div className={`absolute bottom-20 right-20 w-32 h-32 border-2 ${isDarkMode ? 'border-[#10B981]' : 'border-[#10B981]'} opacity-10 rotate-12`} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className={`text-4xl sm:text-5xl font-semibold ${textClasses} mb-4 tracking-normal`}>
            Projects
          </h2>
          <p className={`${subtextClasses} text-lg sm:text-xl max-w-2xl mx-auto`}>
            A showcase of apps I've built — blending innovation with impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D72638] to-[#9B2226] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid - Improved for mobile */}
        <div className="space-y-16 sm:space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-1000 ease-out delay-${300 + index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 sm:gap-8 items-center`}>
                
                {/* Project Image - Improved for mobile */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    {/* Mobile-friendly laptop mockup */}
                    <div className="relative mx-auto max-w-md">
                      <div className="bg-gray-800 rounded-lg p-1.5 sm:p-2 shadow-xl">
                        <div className="bg-gray-900 rounded-t-lg p-1">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 sm:h-64 md:h-80 rounded-b-lg overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-[#D72638]/20 to-[#9B2226]/20 flex items-center justify-center">
                            <span className="text-white text-sm sm:text-base font-semibold">Project Preview</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[#D72638]/30 to-[#9B2226]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a href={project.liveUrl} className={`p-3 rounded-full ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'} text-${isDarkMode ? 'white' : '[#1A1A1A]'} transition-transform duration-300 hover:scale-110`}>
                          <ExternalLink size={20} />
                        </a>
                        <a href={project.githubUrl} className={`p-3 rounded-full ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'} text-${isDarkMode ? 'white' : '[#1A1A1A]'} transition-transform duration-300 hover:scale-110`}>
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  

                  </div>
                </div>

                {/* Project Content - Improved for mobile */}
                <div className="w-full lg:w-1/2">
                  {project.featured && (
                    <span className={`inline-block px-3 py-1 text-xs sm:text-sm rounded-full ${isDarkMode ? 'bg-[#D72638]/20 text-[#D72638]' : 'bg-[#D72638]/10 text-[#9B2226]'} mb-3 sm:mb-4`}>
                      Featured Project
                    </span>
                  )}
                  
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold ${textClasses} mb-3 sm:mb-4`}>
                    {project.title}
                  </h3>
                  
                  <p className={`${subtextClasses} text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-2.5 py-1 text-xs sm:text-sm rounded-full ${isDarkMode ? 'bg-[#1A1A1A] text-[#A9A9A9]' : 'bg-[#F7F7F7] text-[#5A5A5A]'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={project.liveUrl} 
                      className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#D72638] to-[#9B2226] text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <ExternalLink size={16} className="sm:size-5 mr-1.5 sm:mr-2" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg border ${isDarkMode ? 'border-[#2A2A2A] text-[#F1F1F1] hover:bg-[#1A1A1A]' : 'border-[#EAEAEA] text-[#1A1A1A] hover:bg-[#F7F7F7]'} text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105`}
                    >
                      <Github size={16} className="sm:size-5 mr-1.5 sm:mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-12 sm:mt-16 transform transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className={`${subtextClasses} text-sm sm:text-base mb-4 sm:mb-6`}>
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/Tahseen-Alam" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#D72638] to-[#9B2226] text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <Github size={18} className="sm:size-5 mr-2 sm:mr-3" />
            View More on GitHub
          </a>
        </div>
      </div>

      {/* Add custom animations to match hero section */}
      <style>
        {`
          @keyframes orb-float-1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(20px, -30px) rotate(5deg); }
          }
          @keyframes orb-float-2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, 30px) rotate(-5deg); }
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

export default Projects;