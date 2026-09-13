import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { profile } from '../data/portfolio';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0A0A0A] pt-24 pb-16 overflow-hidden">
      {/* faint grid backdrop — subtle, not decorative noise */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#EDEDED 1px, transparent 1px), linear-gradient(90deg, #EDEDED 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">

          {/* Left: identity + positioning */}
          <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </span>
              <span className="text-xs font-mono text-[#8B8F98] tracking-widest uppercase">
                SYSTEM.STATUS ~{profile.status}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold text-[#EDEDED] leading-[1.08] tracking-tight mb-5">
              {profile.shortName}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#5B8DFF] mb-6">
              {profile.role}
            </p>

            <p className="text-base sm:text-lg text-[#8B8F98] leading-relaxed max-w-xl mb-9">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-12">
              <button
                onClick={() => scrollTo('#projects')}
                className="px-5 py-3 bg-[#5B8DFF] text-[#0A0A0A] font-medium rounded-lg flex items-center gap-2 hover:bg-[#7BA1FF] transition-colors duration-200"
              >
                Explore Projects
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => window.open(profile.resumeUrl, '_blank')}
                className="px-5 py-3 border border-[#1F232B] text-[#EDEDED] font-medium rounded-lg flex items-center gap-2 hover:border-[#2A2F38] transition-colors duration-200"
              >
                View Resume
                <ArrowDown size={16} />
              </button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs">
              <div>
                <div className="text-[#5C616B] uppercase tracking-wider mb-1.5">Focus</div>
                <div className="text-[#C4C8CF]">{profile.focus.join(' · ')}</div>
              </div>
              <div>
                <div className="text-[#5C616B] uppercase tracking-wider mb-1.5">Core Stack</div>
                <div className="text-[#C4C8CF]">{profile.coreStack.join(' · ')}</div>
              </div>
            </div>
          </div>

          {/* Right: request-flow visualization + snapshot */}
          <div className={`transform transition-all duration-700 ease-out delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="rounded-xl border border-[#1F232B] bg-[#111318] overflow-hidden shadow-sm">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1F232B] bg-[#0D0F13]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-xs font-mono text-[#5C616B]">request_flow.sh</span>
              </div>

              <div className="p-6">
                <RequestFlow />

                <div className="grid grid-cols-2 gap-y-5 mt-7 pt-6 border-t border-[#1F232B]">
                  {profile.snapshot.map((item) => (
                    <div key={item.label}>
                      <div className="text-2xl font-bold text-[#5B8DFF] font-mono">{item.value}</div>
                      <div className="text-[10px] text-[#5C616B] tracking-wide uppercase mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/** Minimal animated request → API → database node graph. Loops a pulse across the path. */
const RequestFlow: React.FC = () => {
  const nodes = ['CLIENT', 'API', 'DB'];
  return (
    <div>
      <div className="flex items-center justify-between">
        {nodes.map((n, i) => (
          <React.Fragment key={n}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-lg border border-[#262B34] bg-[#0D0F13] flex items-center justify-center font-mono text-[10px] text-[#C4C8CF]">
                {n}
              </div>
            </div>
            {i !== nodes.length - 1 && (
              <div className="flex-1 h-px bg-[#262B34] relative overflow-hidden mx-1">
                <span className="hero-flow-dot" style={{ animationDelay: `${i * 0.8}s` }} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <style>{`
        @keyframes heroFlow {
          0% { transform: translateX(-10%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(300%); opacity: 0; }
        }
        .hero-flow-dot {
          position: absolute;
          top: -1.5px;
          left: 0;
          width: 6px;
          height: 4px;
          border-radius: 999px;
          background: #5B8DFF;
          box-shadow: 0 0 6px 1px rgba(91,141,255,0.7);
          animation: heroFlow 2.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-flow-dot { animation: none; opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
