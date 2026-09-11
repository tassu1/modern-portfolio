import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Layers, Zap, Users } from 'lucide-react';

interface ProjectsProps {
  isDarkMode?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode = false }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Editorial color scheme
  const bgClasses = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]';
  const textClasses = isDarkMode ? 'text-[#F5F5F5]' : 'text-[#141414]';
  const subtextClasses = isDarkMode ? 'text-[#A1A1AA]' : 'text-[#5A5A5A]';
  const monoClasses = isDarkMode ? 'text-[#A1A1AA]' : 'text-[#6A6A6A]';
  const cardBg = isDarkMode ? 'bg-[#12151A]' : 'bg-white';
  const cardBorder = isDarkMode ? 'border-[#22252B]' : 'border-[#E5E5E5]';
  const accent = isDarkMode ? 'text-[#6C8CFF]' : 'text-[#4F46E5]';
  const chipBg = isDarkMode ? 'bg-[#1A1D23] text-[#A1A1AA]' : 'bg-[#F5F5F7] text-[#5A5A5A]';

  // Featured systems — insight-first headlines instead of feature-list descriptions
  const featured = [
    {
      title: "EduManage",
      insight: "Building a school platform was easy. Keeping five schools' data from mixing was the interesting part.",
      tags: ["Multi-School", "RBAC", "Socket.IO", "AWS EC2"],
      highlights: [
        { icon: <Users size={14} />, label: "5 roles · 35+ demo accounts across 4 schools" },
        { icon: <Layers size={14} />, label: "10+ MongoDB models · JWT + RBAC pipeline" }
      ],
      image: "edumanage.png",
      liveUrl: "https://edumanageai.vercel.app/",
      githubUrl: "https://github.com/tassu1/edumanage",
      size: "large"
    },
    {
      title: "MockMate",
      insight: "An AI interview system where report generation doesn't block the user.",
      tags: ["Redis", "BullMQ", "SSE", "OpenRouter AI"],
      highlights: [
        { icon: <Zap size={14} />, label: "Background jobs, 3x retry with backoff" }
      ],
      image: "mockmate.png",
      liveUrl: "",
      githubUrl: "https://github.com/tassu1/mockmate",
      size: "small"
    },
    {
      title: "Lexica AI",
      insight: "Turning a single prompt into a structured, exportable document.",
      tags: ["Next.js", "TypeScript", "NextAuth", "AI Generation"],
      highlights: [
        { icon: <Zap size={14} />, label: "Prompt enhancement · PDF/DOCX export" }
      ],
      image: "lexicaai.jpg",
      liveUrl: "https://lexicaai.vercel.app/",
      githubUrl: "https://github.com/tassu1/Lexica",
      size: "small"
    }
  ];

  // Secondary work — smaller footprint, still real & deployed
  const secondary = [
    {
      title: "InnerLight",
      insight: "A wellness app that listens — journaling and mood tracking on a modular API.",
      tags: ["MERN", "JWT", "Cloudinary"],
      image: "innerlight.png",
      liveUrl: "https://innerlightai.vercel.app/",
      githubUrl: "https://github.com/tassu1/innerlight"
    },
    {
      title: "DevSnip",
      insight: "A snippet manager built for how developers actually search their own code.",
      tags: ["MERN", "JWT", "MongoDB"],
      image: "devsnip.png",
      liveUrl: "https://devsnipa.vercel.app/",
      githubUrl: "https://github.com/tassu1/devsnip"
    }
  ];

  return (
    <section id="projects" className={`py-20 sm:py-28 ${bgClasses} relative`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className={`mb-14 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <div className={`text-xs font-mono ${monoClasses} tracking-widest uppercase mb-3`}>
            02 · Selected Work
          </div>
          <h2 className={`text-3xl sm:text-4xl font-semibold ${textClasses}`}>
            Selected engineering work
          </h2>
        </div>

        {/* Bento: EduManage large, MockMate + Lexica beside/below */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Large featured card */}
          <div className={`lg:row-span-2 rounded-2xl border ${cardBorder} ${cardBg} overflow-hidden flex flex-col transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <div className="relative aspect-video overflow-hidden">
              <img src={featured[0].image} alt={featured[0].title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <h3 className={`text-xl sm:text-2xl font-semibold ${textClasses} mb-3`}>{featured[0].title}</h3>
              <p className={`${subtextClasses} text-base leading-relaxed mb-5`}>{featured[0].insight}</p>
              <div className="flex flex-col gap-2 mb-5">
                {featured[0].highlights.map((h, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${subtextClasses}`}>
                    <span className={accent}>{h.icon}</span>{h.label}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {featured[0].tags.map((tag, i) => (
                  <span key={i} className={`px-2.5 py-1 text-xs font-mono rounded-md ${chipBg}`}>{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                {featured[0].liveUrl && (
                  <a href={featured[0].liveUrl} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${isDarkMode ? 'bg-[#6C8CFF] text-[#0A0A0A] hover:bg-[#7C93FF]' : 'bg-[#4F46E5] text-white hover:bg-[#4338CA]'}`}>
                    <ExternalLink size={15} className="mr-1.5" /> Live Product
                  </a>
                )}
                <a href={featured[0].githubUrl} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 rounded-lg border text-sm font-medium transition-all ${isDarkMode ? 'border-[#22252B] text-[#F5F5F5] hover:border-[#6C8CFF]' : 'border-[#E5E5E5] text-[#141414] hover:border-[#4F46E5]'}`}>
                  <Github size={15} className="mr-1.5" /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Two smaller cards stacked in the second column */}
          {featured.slice(1).map((project, index) => (
            <div key={index} className={`rounded-2xl border ${cardBorder} ${cardBg} overflow-hidden flex flex-col sm:flex-row transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: `${150 + index * 150}ms` }}>
              <div className="relative sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className={`text-lg font-semibold ${textClasses} mb-2`}>{project.title}</h3>
                <p className={`${subtextClasses} text-sm leading-relaxed mb-3`}>{project.insight}</p>
                {project.highlights.map((h, i) => (
                  <div key={i} className={`flex items-center gap-2 text-xs ${subtextClasses} mb-3`}>
                    <span className={accent}>{h.icon}</span>{h.label}
                  </div>
                ))}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-2 py-0.5 text-[11px] font-mono rounded ${chipBg}`}>{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-all ${isDarkMode ? 'bg-[#6C8CFF] text-[#0A0A0A] hover:bg-[#7C93FF]' : 'bg-[#4F46E5] text-white hover:bg-[#4338CA]'}`}>
                      <ExternalLink size={12} className="mr-1" /> Live
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center px-3 py-1.5 rounded-md border text-xs font-medium transition-all ${isDarkMode ? 'border-[#22252B] text-[#F5F5F5] hover:border-[#6C8CFF]' : 'border-[#E5E5E5] text-[#141414] hover:border-[#4F46E5]'}`}>
                    <Github size={12} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary work — smaller, quieter */}
        <div className={`transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <div className={`text-xs font-mono ${monoClasses} tracking-widest uppercase mb-4`}>
            Also shipped
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {secondary.map((project, index) => (
              <div key={index} className={`rounded-xl border ${cardBorder} ${cardBg} p-5 flex items-start justify-between gap-4`}>
                <div>
                  <h4 className={`text-base font-semibold ${textClasses} mb-1.5`}>{project.title}</h4>
                  <p className={`${subtextClasses} text-sm leading-relaxed mb-3`}>{project.insight}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-2 py-0.5 text-[11px] font-mono rounded ${chipBg}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    aria-label={`${project.title} live`}
                    className={`p-2 rounded-md border transition-all ${isDarkMode ? 'border-[#22252B] text-[#A1A1AA] hover:text-[#6C8CFF] hover:border-[#6C8CFF]' : 'border-[#E5E5E5] text-[#5A5A5A] hover:text-[#4F46E5] hover:border-[#4F46E5]'}`}>
                    <ExternalLink size={14} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    aria-label={`${project.title} github`}
                    className={`p-2 rounded-md border transition-all ${isDarkMode ? 'border-[#22252B] text-[#A1A1AA] hover:text-[#6C8CFF] hover:border-[#6C8CFF]' : 'border-[#E5E5E5] text-[#5A5A5A] hover:text-[#4F46E5] hover:border-[#4F46E5]'}`}>
                    <Github size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-14 transform transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <a
            href="https://github.com/tassu1"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg border text-sm font-semibold transition-all ${isDarkMode ? 'border-[#22252B] text-[#F5F5F5] hover:border-[#6C8CFF]' : 'border-[#E5E5E5] text-[#141414] hover:border-[#4F46E5]'}`}
          >
            <Github size={16} className="mr-2" />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
