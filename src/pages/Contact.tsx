import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';

const Contact: React.FC = () => {
  const links = [
    { name: 'Email', value: profile.email, icon: <Mail size={18} />, link: `mailto:${profile.email}` },
    { name: 'GitHub', value: profile.githubHandle, icon: <Github size={18} />, link: profile.github },
    { name: 'LinkedIn', value: 'md-tahseen-alam', icon: <Linkedin size={18} />, link: profile.linkedin },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#1F232B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
          </span>
          <span className="text-xs font-mono text-[#5C616B] tracking-widest uppercase">
            SYSTEM.STATUS ~{profile.status}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold text-[#EDEDED] mb-4 max-w-2xl leading-tight">
          Have a system worth building?
        </h2>
        <p className="text-[#8B8F98] text-base sm:text-lg max-w-xl mb-12">
          Open to full time roles and freelance work. Email is fastest I usually reply within 24 hours.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-[#1F232B] bg-[#111318] p-5 flex flex-col hover:border-[#5B8DFF]/40 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[#5B8DFF]">{l.icon}</span>
                <ArrowUpRight size={16} className="text-[#5C616B] group-hover:text-[#5B8DFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </div>
              <div className="text-[#EDEDED] font-medium mb-1">{l.name}</div>
              <div className="text-xs font-mono text-[#8B8F98] truncate">{l.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
