import React from 'react';
import { techStack } from '../data/portfolio';

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-[#1F232B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-mono text-[#5C616B] tracking-widest uppercase mb-3">04 · Stack</div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#EDEDED] mb-3">
            The actual toolkit
          </h2>
          <p className="text-[#8B8F98] text-base">
            What I reach for, and why — not a badge wall.
          </p>
        </div>

        <div className="rounded-xl border border-[#1F232B] bg-[#111318] overflow-hidden shadow-sm">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1F232B] bg-[#0D0F13]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 text-xs font-mono text-[#5C616B]">stack.config</span>
          </div>

          <div className="font-mono text-sm py-2">
            {techStack.map((line, index) => (
              <div
                key={line.key}
                className={`flex flex-col gap-1.5 px-4 sm:px-6 py-4 hover:bg-[#171A20] transition-colors duration-150 ${
                  index !== techStack.length - 1 ? 'border-b border-[#1F232B]' : ''
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-[#3A3D43] text-xs select-none w-4 text-right shrink-0">{index + 1}</span>
                  <span className="text-[#5B8DFF] font-medium">{line.key}:</span>
                  <span className="text-[#5C616B] text-xs italic hidden sm:inline">// {line.purpose}</span>
                </div>
                <div className="text-[#8B8F98] leading-relaxed pl-8">
                  {line.values.join('  ·  ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
