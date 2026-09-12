import React from 'react';
import { experience, beyondResume } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-[#1F232B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-mono text-[#5C616B] tracking-widest uppercase mb-3">05 · Work</div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#EDEDED] mb-3">
            Experience
          </h2>
        </div>

        <div className="space-y-10">
          {experience.map((role, i) => (
            <div key={i} className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 pb-10 border-b border-[#1F232B] last:border-0 last:pb-0">
              <div className="font-mono text-xs text-[#5C616B] pt-1">{role.period}</div>
              <div>
                <h3 className="text-lg font-semibold text-[#EDEDED] mb-0.5">{role.title}</h3>
                <p className="text-sm text-[#5B8DFF] mb-4">{role.org}</p>
                <ul className="space-y-2.5 mb-4">
                  {role.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#C4C8CF] leading-relaxed">
                      <span className="text-[#5C616B] mt-1 shrink-0">›</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-[#111318] border border-[#1F232B] text-[#8B8F98]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#1F232B] bg-[#111318] p-5 flex items-start gap-3">
          <span className="font-mono text-[#5B8DFF] text-sm shrink-0">//</span>
          <p className="text-sm text-[#8B8F98] leading-relaxed">{beyondResume}</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
