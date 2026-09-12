import React from 'react';
import { approachSteps } from '../data/portfolio';

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-[#1F232B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-mono text-[#5C616B] tracking-widest uppercase mb-3">01 · Approach</div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#EDEDED] mb-3">
            How I think about software
          </h2>
          <p className="text-[#8B8F98] text-base">
            The same sequence, every time — before I write the first line of a feature.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#1F232B] rounded-xl overflow-hidden border border-[#1F232B]">
          {approachSteps.map((step) => (
            <div key={step.n} className="bg-[#0A0A0A] p-6 hover:bg-[#111318] transition-colors duration-200 group">
              <div className="font-mono text-xs text-[#5B8DFF] mb-4">{step.n}</div>
              <h3 className="text-[#EDEDED] font-semibold mb-2 group-hover:text-[#5B8DFF] transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-sm text-[#8B8F98] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
