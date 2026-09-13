import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { featuredProjects } from '../data/portfolio';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-[#1F232B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <div className="text-xs font-mono text-[#5C616B] tracking-widest uppercase mb-3">02 · Featured Systems</div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#EDEDED] mb-3">
            Proof not claims
          </h2>
          <p className="text-[#8B8F98] text-base">
            Five systems five real engineering decisions the kind that only show up when things get hard not when they're easy.
          </p>
        </div>

        <div className="space-y-28 sm:space-y-36">
          {featuredProjects.map((project, index) => (
            <FeaturedCaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedCaseStudy: React.FC<{ project: typeof featuredProjects[number]; index: number }> = ({ project, index }) => {
  const hasImage = Boolean(project.image);

  return (
    <div id={`project-${project.id}`} className="scroll-mt-24 relative">
      {/* Ghost index number — ambient, not competing with content */}
      <span className="hidden sm:block absolute -top-6 -left-2 font-mono text-7xl font-bold text-[#111318] select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Header */}
      <div className="relative mb-8">
        <div className="font-mono text-xs text-[#5C616B] tracking-widest uppercase mb-2">
          {String(index + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
        </div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#EDEDED] mb-2">{project.name}</h3>
        <p className="text-[#8B8F98] text-base sm:text-lg max-w-2xl leading-relaxed">{project.tagline}</p>
      </div>

      {/* Decision-first callout — the differentiator leads, not the CRUD description */}
      <div className="relative rounded-xl border border-[#5B8DFF]/25 bg-gradient-to-br from-[#5B8DFF]/[0.06] to-transparent p-6 sm:p-7 mb-8">
        <div className="font-mono text-[11px] text-[#5B8DFF] tracking-widest uppercase mb-5">
          The Engineering Call
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <div className="text-[10px] font-mono text-[#5C616B] uppercase tracking-wider mb-2">Decision</div>
            <p className="text-sm text-[#C4C8CF] leading-relaxed">{project.decision.decision}</p>
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#5C616B] uppercase tracking-wider mb-2">Why</div>
            <p className="text-sm text-[#C4C8CF] leading-relaxed">{project.decision.why}</p>
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#5C616B] uppercase tracking-wider mb-2">Tradeoff</div>
            <p className="text-sm text-[#C4C8CF] leading-relaxed">{project.decision.tradeoff}</p>
          </div>
        </div>
      </div>

      {/* Problem / System, supporting the decision above — with screenshot alongside */}
      <div className={`grid ${hasImage ? 'lg:grid-cols-[1fr_1fr]' : ''} gap-8 lg:gap-12 mb-10`}>
        <div className="space-y-5">
          <div>
            <div className="font-mono text-[11px] text-[#5C616B] tracking-widest uppercase mb-2">Problem</div>
            <p className="text-[#C4C8CF] leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <div className="font-mono text-[11px] text-[#5C616B] tracking-widest uppercase mb-2">System</div>
            <p className="text-[#C4C8CF] leading-relaxed">{project.system}</p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.highlights.map((h) => (
              <span key={h.label} className="text-xs font-mono px-2.5 py-1.5 rounded-md bg-[#111318] border border-[#1F232B] text-[#8B8F98]">
                {h.label}
              </span>
            ))}
          </div>
        </div>

        {hasImage && (
          <div className="rounded-xl border border-[#1F232B] overflow-hidden bg-[#0D0F13] h-fit">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#1F232B]">
              <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
              <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
              <span className="w-2 h-2 rounded-full bg-[#28C840]" />
            </div>
            <img src={`/${project.image}`} alt={`${project.name} screenshot`} className="w-full object-cover object-top" loading="lazy" />
          </div>
        )}
      </div>

      {/* Architecture gets full width and real visual weight now — no longer an afterthought */}
      <div className="mb-8 rounded-xl border border-[#1F232B] bg-[#0D0F13] p-5 sm:p-7">
        <div className="flex items-center justify-between mb-5">
          <div className="font-mono text-[11px] text-[#5C616B] tracking-widest uppercase">Architecture</div>
        </div>
        <ArchitectureDiagram stages={project.architecture.stages} annotation={project.architecture.annotation} />
      </div>

      {/* Stack + links */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111318] border border-[#1F232B] text-[#8B8F98]">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-[#5B8DFF] hover:text-[#7BA1FF] transition-colors duration-200">
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-[#EDEDED] hover:text-[#5B8DFF] transition-colors duration-200">
            <Github size={14} /> Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;