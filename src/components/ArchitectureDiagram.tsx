import React from 'react';
import type { ArchNode } from '../data/portfolio';

interface ArchitectureDiagramProps {
  stages: ArchNode[][];
  annotation?: string;
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ stages, annotation }) => {
  return (
    <div className="rounded-xl border border-[#1F232B] bg-[#0D0F13] p-5 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 overflow-x-auto">
        {stages.map((stage, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col gap-3 shrink-0">
              {stage.map((node, j) => (
                <div
                  key={j}
                  className="rounded-lg border border-[#262B34] bg-[#111318] px-4 py-3 min-w-[140px] transition-colors duration-200 hover:border-[#5B8DFF]/50"
                >
                  <div className="font-mono text-xs font-semibold tracking-wider text-[#EDEDED]">
                    {node.label}
                  </div>
                  {node.note && (
                    <div className="font-mono text-[10px] text-[#8B8F98] mt-1 leading-relaxed">
                      {node.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {i !== stages.length - 1 && (
              <div className="hidden sm:flex items-center flex-1 min-w-[32px] px-2 relative h-px">
                <div className="w-full h-px bg-[#262B34] relative overflow-hidden">
                  <span className="arch-flow-dot" />
                </div>
                <span className="absolute -right-0.5 text-[#5B8DFF] text-xs leading-none">›</span>
              </div>
            )}
            {i !== stages.length - 1 && (
              <div className="sm:hidden w-px h-6 bg-[#262B34] ml-6" />
            )}
          </React.Fragment>
        ))}
      </div>

      {annotation && (
        <div className="mt-5 pt-4 border-t border-[#1F232B] font-mono text-[11px] text-[#8B8F98] flex items-center gap-2">
          <span className="text-[#5B8DFF]">⇄</span>
          {annotation}
        </div>
      )}

      <style>{`
        @keyframes archFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(220%); }
        }
        .arch-flow-dot {
          position: absolute;
          top: -1.5px;
          left: 0;
          width: 6px;
          height: 4px;
          border-radius: 999px;
          background: #5B8DFF;
          box-shadow: 0 0 6px 1px rgba(91,141,255,0.7);
          animation: archFlow 2.4s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .arch-flow-dot { animation: none; opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default ArchitectureDiagram;
