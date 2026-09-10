import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Layers, Zap, Users } from 'lucide-react';

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

  // Projects data — backend-heavy systems first, matches resume
 const projects = [
  {
    title: "EduManage",
    description:
      "A multi-tenant school management platform with 5 role-specific dashboards, school-level data isolation, and a modular REST API backend covering attendance, exams, timetables, and messaging.",
    tags: ["MERN", "Multi-Tenancy", "RBAC", "Socket.io", "OpenRouter AI", "JWT"],
    highlights: [
      { icon: <Users size={14} />, label: "5 roles · 35+ demo accounts" },
      { icon: <Layers size={14} />, label: "10+ MongoDB data models" }
    ],
    image: "edumanage.png",
    liveUrl: "https://edumanageai.vercel.app/",
    githubUrl: "https://github.com/tassu1/edumanage",
    featured: true
  },
  {
    title: "MockMate",
    description:
      "An AI mock-interview platform where an LLM asks resume-grounded questions by role and experience level, streaming replies over SSE and generating structured reports via a background job queue.",
    tags: ["MERN", "BullMQ", "Redis", "OpenRouter AI", "SSE", "JWT"],
    highlights: [
      { icon: <Zap size={14} />, label: "Auto-retry job queue (3x backoff)" },
      { icon: <Layers size={14} />, label: "Separate API + worker services" }
    ],
    image: "mockmate.png",
    liveUrl: "",
    githubUrl: "https://github.com/tassu1/mockmate",
    featured: true
  },
  {
    title: "Lexica AI",
    description:
      "An AI-powered document generation platform that turns ideas into structured business, academic, and professional documents, with AI prompt enhancement and PDF/DOCX export.",
    tags: ["Next.js", "TypeScript", "OpenRouter AI", "NextAuth", "PDF/DOCX"],
    highlights: [
      { icon: <Zap size={14} />, label: "AI prompt enhancement" },
      { icon: <Layers size={14} />, label: "Multi-format document export" }
    ],
    image: "lexicaai.jpg",
    liveUrl: "https://lexicaai.vercel.app/",
    githubUrl: "https://github.com/tassu1/Lexica",
    featured: true
  },
  {
    title: "InnerLight",
    description:
      "An AI-powered wellness platform combining mood tracking, journaling, and conversational AI, built on a modular backend with secure, role-aware authentication.",
    tags: ["MERN", "AI", "JWT", "Cloudinary", "REST API"],
    highlights: [
      { icon: <Layers size={14} />, label: "Modular backend architecture" },
      { icon: <Zap size={14} />, label: "Conversational AI journaling" }
    ],
    image: "innerlight.png",
    liveUrl: "https://innerlightai.vercel.app/",
    githubUrl: "https://github.com/tassu1/innerlight",
    featured: false
  },
  {
    title: "DevSnip",
    description:
      "A developer-focused code snippet manager for saving, organizing, filtering, and instantly reusing frequently used code, with authenticated snippet management.",
    tags: ["MERN", "JWT", "MongoDB", "REST API", "Tailwind CSS"],
    highlights: [
      { icon: <Layers size={14} />, label: "Filterable snippet library" },
      { icon: <Zap size={14} />, label: "Auth-protected CRUD" }
    ],
    image: "devsnip.png",
    liveUrl: "https://devsnipa.vercel.app/",
    githubUrl: "https://github.com/tassu1/devsnip",
    featured: false
  }
];

  return (
    <section id="projects" className={`py-16 ${bgClasses} relative w-full overflow-hidden`}>
      
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
 
        <div className="absolute top-1/4 -right-10 w-80 h-80 bg-gradient-to-br from-[#9B2226] to-[#D72638] rounded-full opacity-10 blur-3xl animate-orb-float-1" />
        <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-gradient-to-br from-[#10B981] to-[#047857] rounded-full opacity-10 blur-3xl animate-orb-float-2" />
      
        <div className={`absolute top-20 left-20 w-40 h-40 border-2 ${isDarkMode ? 'border-[#9B2226]' : 'border-[#D72638]'} opacity-10 rotate-45`} />
        <div className={`absolute bottom-20 right-20 w-32 h-32 border-2 ${isDarkMode ? 'border-[#10B981]' : 'border-[#10B981]'} opacity-10 rotate-12`} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
       
        <div className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className={`text-4xl sm:text-5xl font-semibold ${textClasses} mb-4 tracking-normal`}>
            Projects
          </h2>
          <p className={`${subtextClasses} text-lg sm:text-xl max-w-2xl mx-auto`}>
            A showcase of apps I've built blending innovation with impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D72638] to-[#9B2226] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden border ${isDarkMode ? 'border-[#2A2A2A] bg-[#121212] hover:bg-[#161616]' : 'border-[#EAEAEA] bg-white hover:bg-[#FCFCFC]'} shadow-lg transition-all duration-500 flex flex-col ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Screenshot */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#D72638] to-[#9B2226] text-white shadow">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className={`text-lg sm:text-xl font-semibold ${textClasses} mb-2`}>
                  {project.title}
                </h3>

                <p className={`${subtextClasses} text-sm leading-relaxed mb-4`}>
                  {project.description}
                </p>

                {/* Highlight metrics pulled from real project outcomes */}
                <div className="flex flex-col gap-1.5 mb-4">
                  {project.highlights.map((h, hIndex) => (
                    <div key={hIndex} className={`flex items-center gap-2 text-xs sm:text-sm ${subtextClasses}`}>
                      <span className={isDarkMode ? 'text-[#D72638]' : 'text-[#9B2226]'}>{h.icon}</span>
                      {h.label}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-2.5 py-1 text-xs rounded-full ${isDarkMode ? 'bg-[#1A1A1A] text-[#A9A9A9]' : 'bg-[#F7F7F7] text-[#5A5A5A]'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#D72638] to-[#9B2226] text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink size={15} className="mr-1.5" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-lg border ${isDarkMode ? 'border-[#2A2A2A] text-[#F1F1F1] hover:bg-[#1A1A1A]' : 'border-[#EAEAEA] text-[#1A1A1A] hover:bg-[#F7F7F7]'} text-sm font-medium transition-all duration-300 hover:scale-105`}
                  >
                    <Github size={15} className="mr-1.5" />
                    GitHub
                  </a>
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
            href="https://github.com/tassu1" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#D72638] to-[#9B2226] text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <Github size={18} className="sm:size-5 mr-2 sm:mr-3" />
            View More on GitHub
          </a>
        </div>
      </div>

 
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