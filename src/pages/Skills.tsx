import React, { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaGithub, 
  FaDocker, 
  FaAws,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiVercel,
  SiOpenai
} from 'react-icons/si';

interface SkillsProps {
  isDarkMode?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode = false }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Color scheme matching the hero section
  const bgClasses = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]';
  const textClasses = isDarkMode ? 'text-[#F1F1F1]' : 'text-[#1A1A1A]';
  const subtextClasses = isDarkMode ? 'text-[#A9A9A9]' : 'text-[#5A5A5A]';
  const skillCardBg = isDarkMode ? 'bg-[#121212] hover:bg-[#1A1A1A]' : 'bg-white hover:bg-[#F7F7F7]';
  const borderColor = isDarkMode ? 'border-[#2A2A2A]' : 'border-[#EAEAEA]';

  // Skill categories
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🖥️",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={24} />, level: "Proficient" },
        { name: "Next.js", icon: <SiNextdotjs size={24} />, level: "Proficient" },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={24} />, level: "Proficient" },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={24} />, level: "Proficient" },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={24} />, level: "Proficient" },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={24} />, level: "Proficient" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={24} />, level: "Proficient" }
      ]
    },
    {
      title: "Backend & DevOps",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={24} />, level: "Proficient" },
        { name: "Express.js", icon: <SiExpress size={24} />, level: "Proficient" },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={24} />, level: "Proficient" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" size={24} />, level: "Intermediate" },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={24} />, level: "Proficient" },
        { name: "GitHub", icon: <FaGithub size={24} />, level: "Proficient" },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" size={24} />, level: "Intermediate" },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" size={24} />, level: "Learning" },
        { name: "Vercel", icon: <SiVercel size={24} />, level: "Proficient" }
      ]
    },
    {
      title: "AI & Tools",
      icon: "🤖",
      skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" size={24} />, level: "Intermediate" },
        { name: "Open Router", icon: <SiOpenai size={24} />, level: "Learning" },
        { name: "LangChain", icon: <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>, level: "Learning" },
        { name: "VS Code", icon: <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>, level: "Proficient" },
        { name: "Postman", icon: <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>, level: "Proficient" }
      ]
    }
  ];

  

  return (
    <section id="skills" className={`py-20 ${bgClasses} relative w-full overflow-hidden`}>
      
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
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className={`text-4xl sm:text-5xl font-semibold ${textClasses} mb-4`}>
            💻 My Skills
          </h2>
          <p className={`${subtextClasses} text-xl max-w-2xl mx-auto`}>
            Technologies and tools I use to build scalable, modern applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D72638] to-[#9B2226] mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`rounded-2xl p-6 ${skillCardBg} border ${borderColor} shadow-lg`}>
              <h3 className={`text-xl font-semibold ${textClasses} mb-6 flex items-center`}>
                <span className="mr-2 text-2xl">{category.icon}</span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-[#F7F7F7]'} border ${borderColor} transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
                  >
                    <div className="flex items-center justify-center mb-2">
                      {skill.icon}
                    </div>
                    <h4 className={`text-sm font-medium ${textClasses} text-center mb-1`}>
                      {skill.name}
                    </h4>
                    <div className={`text-xs ${skill.level === 'Proficient' ? 'text-green-500' : skill.level === 'Intermediate' ? 'text-yellow-500' : 'text-blue-500'} text-center`}>
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Exploring Section */}
       
      </div>

      {/* Add custom animations */}
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

export default Skills;