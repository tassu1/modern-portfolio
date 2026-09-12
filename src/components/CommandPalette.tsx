import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { profile } from '../data/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Action {
  id: string;
  label: string;
  group: string;
  run: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  const actions: Action[] = useMemo(() => [
    { id: 'projects', label: 'View Projects', group: 'Navigate', run: () => scrollTo('#projects') },
    { id: 'about', label: 'About', group: 'Navigate', run: () => scrollTo('#about') },
    { id: 'capabilities', label: 'Systems I Build', group: 'Navigate', run: () => scrollTo('#capabilities') },
    { id: 'stack', label: 'Tech Stack', group: 'Navigate', run: () => scrollTo('#stack') },
    { id: 'experience', label: 'Experience', group: 'Navigate', run: () => scrollTo('#experience') },
    { id: 'contact', label: 'Contact', group: 'Navigate', run: () => scrollTo('#contact') },
    { id: 'edumanage', label: 'Explore EduManage', group: 'Projects', run: () => scrollTo('#project-edumanage') },
    { id: 'mockmate', label: 'Explore MockMate', group: 'Projects', run: () => scrollTo('#project-mockmate') },
    { id: 'lexica', label: 'Explore Lexica AI', group: 'Projects', run: () => scrollTo('#project-lexica') },
    { id: 'resume', label: 'View Resume', group: 'Links', run: () => { window.open(profile.resumeUrl, '_blank'); onClose(); } },
    { id: 'github', label: 'Open GitHub', group: 'Links', run: () => { window.open(profile.github, '_blank'); onClose(); } },
    { id: 'linkedin', label: 'Open LinkedIn', group: 'Links', run: () => { window.open(profile.linkedin, '_blank'); onClose(); } },
  ], []);

  const filtered = useMemo(
    () => actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase())),
    [actions, query]
  );

  useEffect(() => { setActiveIndex(0); }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); }
      if (e.key === 'Enter' && filtered[activeIndex]) { filtered[activeIndex].run(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, filtered, activeIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-xl border border-[#1F232B] bg-[#111318] shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#1F232B]">
          <Search size={16} className="text-[#8B8F98] shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            className="flex-1 bg-transparent outline-none text-sm text-[#EDEDED] placeholder:text-[#5C616B] font-mono"
          />
          <kbd className="text-[10px] font-mono text-[#5C616B] border border-[#1F232B] rounded px-1.5 py-0.5">ESC</kbd>
        </div>

        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <div className="px-4 py-6 text-sm text-[#5C616B] text-center font-mono">No matches</div>
          )}
          {filtered.map((action, i) => (
            <button
              key={action.id}
              onClick={action.run}
              onMouseEnter={() => setActiveIndex(i)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-100 ${
                i === activeIndex ? 'bg-[#5B8DFF]/10 text-[#EDEDED]' : 'text-[#C4C8CF]'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#5C616B] w-16 shrink-0 text-left">{action.group}</span>
                {action.label}
              </span>
              {i === activeIndex && <ArrowRight size={14} className="text-[#5B8DFF]" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
