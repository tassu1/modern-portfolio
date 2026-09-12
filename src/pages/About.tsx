import React from 'react';
import { aboutText } from '../data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-[#1F232B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.6fr_1fr] gap-10 lg:gap-16">
          <div>
            <div className="text-xs font-mono text-[#5C616B] tracking-widest uppercase mb-3">08 · About</div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#EDEDED]">
              The person behind the systems
            </h2>
          </div>
          <div className="space-y-5">
            {aboutText.map((p, i) => (
              <p key={i} className="text-[#C4C8CF] leading-relaxed text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
