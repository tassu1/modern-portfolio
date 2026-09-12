import React from 'react';
import { capabilities } from '../data/portfolio';

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-[#1F232B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-mono text-[#5C616B] tracking-widest uppercase mb-3">03 · Capabilities</div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#EDEDED] mb-3">
            Systems I build
          </h2>
          <p className="text-[#8B8F98] text-base">
            Grouped by what each part of a system actually does — not a wall of logos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((cap) => (
            <div
              key={cap.category}
              className="rounded-xl border border-[#1F232B] bg-[#111318] p-6 hover:border-[#2A2F38] transition-colors duration-200"
            >
              <div className="font-mono text-xs text-[#5B8DFF] tracking-widest uppercase mb-4">
                {cap.category}
              </div>
              <ul className="space-y-2.5">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#C4C8CF]">
                    <span className="text-[#5C616B] mt-1 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
