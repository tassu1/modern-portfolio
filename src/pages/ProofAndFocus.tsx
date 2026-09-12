import React from 'react';
import { Github, Linkedin, Code, FileText, ArrowUpRight } from 'lucide-react';
import { profile, currentlyExploring } from '../data/portfolio';

const ProofAndFocus: React.FC = () => {
  const proof = [
    { name: 'GitHub', sub: 'Repositories · Source Code · Projects', icon: <Github size={18} />, link: profile.github },
    { name: 'LeetCode', sub: '300+ problems solved', icon: <Code size={18} />, link: profile.leetcode },
    { name: 'LinkedIn', sub: 'Professional profile', icon: <Linkedin size={18} />, link: profile.linkedin },
    { name: 'Resume', sub: 'Experience · Education · Skills', icon: <FileText size={18} />, link: profile.resumeUrl },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-[#1F232B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14">

          <div>
            <div className="text-xs font-mono text-[#5C616B] tracking-widest uppercase mb-3">06 · Proof of Work</div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#EDEDED] mb-8">
              Verify it yourself
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {proof.map((p) => (
                <a
                  key={p.name}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-[#1F232B] bg-[#111318] p-5 flex flex-col hover:border-[#5B8DFF]/40 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[#5B8DFF]">{p.icon}</span>
                    <ArrowUpRight size={15} className="text-[#5C616B] group-hover:text-[#5B8DFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                  <div className="text-[#EDEDED] font-medium mb-1">{p.name}</div>
                  <div className="text-xs text-[#8B8F98]">{p.sub}</div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-[#5C616B] tracking-widest uppercase mb-3">07 · Current Focus</div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#EDEDED] mb-8">
              Currently exploring
            </h2>
            <div className="rounded-xl border border-[#1F232B] bg-[#111318] p-6 font-mono text-sm">
              {currentlyExploring.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 py-3 ${i !== currentlyExploring.length - 1 ? 'border-b border-[#1F232B]' : ''}`}
                >
                  <span className="text-[#5B8DFF]">→</span>
                  <span className="text-[#C4C8CF]">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProofAndFocus;
