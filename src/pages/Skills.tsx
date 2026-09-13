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
  FaCss3Alt,
  FaGoogle
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
  SiOpenai,
  SiCplusplus,
  SiRedux,
  SiSocketdotio,
  SiRedis,
  SiJsonwebtokens,
  SiRender,
  SiCloudinary,
  SiPostman,
  SiMongoose
} from 'react-icons/si';
import { Shield, Workflow, KeyRound, ListOrdered, UploadCloud, Database } from 'lucide-react';

interface SkillsProps {
  isDarkMode?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode = false }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Color scheme 
  const bgClasses = isDarkMode ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]';
  const textClasses = isDarkMode ? 'text-[#F1F1F1]' : 'text-[#1A1A1A]';
  const subtextClasses = isDarkMode ? 'text-[#A9A9A9]' : 'text-[#5A5A5A]';
  const skillCardBg = isDarkMode ? 'bg-[#121212] hover:bg-[#1A1A1A]' : 'bg-white hover:bg-[#F7F7F7]';
  const borderColor = isDarkMode ? 'border-[#2A2A2A]' : 'border-[#EAEAEA]';

  // Skill categories — mirrors resume, backend-first to reflect backend-heavy full stack focus
  const skillCategories = [
    {
      title: "Backend & APIs",
      icon: "⚙️",
      featured: true,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={24} />, level: "Proficient" },
        { name: "Express.js", icon: <SiExpress size={24} />, level: "Proficient" },
        { name: "REST APIs", icon: <Workflow size={24} className="text-[#6C8CFF]" />, level: "Proficient" },
        { name: "JWT", icon: <SiJsonwebtokens className="text-[#D63AFF]" size={24} />, level: "Proficient" },
        { name: "RBAC", icon: <Shield size={24} className="text-[#10B981]" />, level: "Proficient" },
        { name: "Socket.IO", icon: <SiSocketdotio size={24} />, level: "Intermediate" },
        { name: "Redis", icon: <SiRedis className="text-[#DC382D]" size={24} />, level: "Intermediate" },
        { name: "BullMQ", icon: <ListOrdered size={24} className="text-[#4F46E5]" />, level: "Intermediate" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      featured: true,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={24} />, level: "Proficient" },
        { name: "Mongoose", icon: <SiMongoose className="text-[#F04D35]" size={24} />, level: "Proficient" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" size={24} />, level: "Intermediate" },
        { name: "Schema Design", icon: <Database size={24} className="text-[#10B981]" />, level: "Proficient" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      featured: true,
      skills: [
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" size={24} />, level: "Intermediate" },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={24} />, level: "Proficient" },
        { name: "GitHub", icon: <FaGithub size={24} />, level: "Proficient" },
        { name: "CI/CD", icon: <Workflow size={24} className="text-[#4F46E5]" />, level: "Intermediate" },
        { name: "AWS (EC2/S3/CloudFront)", icon: <FaAws className="text-[#FF9900]" size={24} />, level: "Intermediate" },
        { name: "Vercel", icon: <SiVercel size={24} />, level: "Proficient" },
        { name: "Render", icon: <SiRender size={24} />, level: "Intermediate" }
      ]
    },
    {
      title: "Languages",
      icon: "🧠",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" size={24} />, level: "Proficient" },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={24} />, level: "Proficient" },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" size={24} />, level: "Intermediate" },
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" size={24} />, level: "Intermediate" }
      ]
    },
    {
      title: "Frontend",
      icon: "🖥️",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={24} />, level: "Proficient" },
        { name: "Next.js", icon: <SiNextdotjs size={24} />, level: "Intermediate" },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" size={24} />, level: "Intermediate" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={24} />, level: "Proficient" },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" size={24} />, level: "Proficient" },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" size={24} />, level: "Proficient" }
      ]
    },
    {
      title: "AI & Integrations",
      icon: "🤖",
      skills: [
        { name: "OpenRouter API", icon: <SiOpenai size={24} />, level: "Intermediate" },
        { name: "Google OAuth", icon: <FaGoogle className="text-[#4285F4]" size={24} />, level: "Intermediate" },
        { name: "NextAuth", icon: <KeyRound size={24} className="text-[#4F46E5]" />, level: "Intermediate" },
        { name: "Cloudinary", icon: <SiCloudinary className="text-[#3448C5]" size={24} />, level: "Proficient" },
        { name: "Multer", icon: <UploadCloud size={24} className="text-[#10B981]" />, level: "Proficient" },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" size={24} />, level: "Proficient" }
      ]
    }
  ];

  

  return (
    <section id="skills" className={`py-20 ${bgClasses} relative w-full overflow-hidden`}>
      

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
    
        <div className="absolute top-1/4 -right-10 w-80 h-80 bg-gradient-to-br from-[#4F46E5] to-[#6C8CFF] rounded-full opacity-10 blur-3xl animate-orb-float-1" />
        <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-gradient-to-br from-[#10B981] to-[#047857] rounded-full opacity-10 blur-3xl animate-orb-float-2" />
        
        {/* Geometric shapes */}
        <div className={`absolute top-20 left-20 w-40 h-40 border-2 ${isDarkMode ? 'border-[#4F46E5]' : 'border-[#6C8CFF]'} opacity-10 rotate-45`} />
        <div className={`absolute bottom-20 right-20 w-32 h-32 border-2 ${isDarkMode ? 'border-[#10B981]' : 'border-[#10B981]'} opacity-10 rotate-12`} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`mb-14 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className={`text-xs font-mono ${subtextClasses} tracking-widest uppercase mb-3`}>
            03 · How I Build
          </div>
          <h2 className={`text-3xl sm:text-4xl font-semibold ${textClasses} mb-3`}>
            My toolkit, grouped by what each layer does
          </h2>
          <p className={`${subtextClasses} text-base max-w-2xl`}>
            Backend and infrastructure first that's where most of the engineering decisions happen — with a matching frontend skillset on top.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`rounded-2xl p-6 ${skillCardBg} border ${
                category.featured ? (isDarkMode ? 'border-[#6C8CFF]/50' : 'border-[#6C8CFF]/40') : borderColor
              } shadow-lg relative`}
            >
              {category.featured && (
                <span className="absolute -top-3 right-4 text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-[#6C8CFF] to-[#4F46E5] text-white shadow">
                  Core Layer
                </span>
              )}
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

export default Skills;