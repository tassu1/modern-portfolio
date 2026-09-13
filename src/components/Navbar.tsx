import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, Eye, FileText, ChevronDown, Github, Linkedin, Command } from 'lucide-react';
import { profile } from '../data/portfolio';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Work', href: '#experience' },
  { id: 'capabilities', label: 'Systems', href: '#capabilities' },
  { id: 'projects', label: 'Projects', href: '#projects' },
];

interface NavbarProps {
  onOpenPalette: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenPalette }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.platform);

  const resumeOptions = [
    { label: 'View Resume', icon: <Eye size={16} />, description: 'Open in browser', action: () => window.open(profile.resumeUrl, '_blank') },
    {
      label: 'Download PDF', icon: <Download size={16} />, description: 'Save to device', action: () => {
        const link = document.createElement('a');
        link.href = profile.resumeUrl;
        link.download = 'Tahseen_Alam_Resume.pdf';
        link.click();
      },
    },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsResumeOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0A0A0A]/85 border-b transition-colors duration-300 ${isScrolled ? 'border-[#1F232B]' : 'border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <button onClick={() => scrollTo('#home')} className="flex items-center gap-2 font-mono text-sm shrink-0" aria-label="Scroll to top">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
            <span className="font-semibold tracking-tight text-[#EDEDED]">~TAHSEEN</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.href)} className="px-3.5 py-2 text-sm font-medium text-[#8B8F98] hover:text-[#EDEDED] transition-colors duration-200 rounded-md">
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={onOpenPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#8B8F98] hover:text-[#EDEDED] border border-[#1F232B] hover:border-[#2A2F38] rounded-md transition-colors duration-200"
              aria-label="Open command palette"
            >
              <Command size={12} />
              {isMac ? '⌘K' : 'Ctrl K'}
            </button>

            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2 text-[#8B8F98] hover:text-[#EDEDED] rounded-lg transition-colors duration-200" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-[#8B8F98] hover:text-[#EDEDED] rounded-lg transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>

            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setIsResumeOpen(!isResumeOpen)} className={`px-3.5 py-2 text-sm font-medium border rounded-lg flex items-center gap-1.5 transition-colors duration-200 ${isResumeOpen ? 'border-[#5B8DFF] text-[#5B8DFF]' : 'border-[#1F232B] text-[#EDEDED] hover:border-[#5B8DFF] hover:text-[#5B8DFF]'}`}>
                <FileText size={15} />
                Resume
                <ChevronDown size={13} className={`transition-transform ${isResumeOpen ? 'rotate-180' : ''}`} />
              </button>
              {isResumeOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 rounded-lg border border-[#1F232B] bg-[#111318] shadow-xl overflow-hidden">
                  {resumeOptions.map((opt, i) => (
                    <button key={i} onClick={() => { opt.action(); setIsResumeOpen(false); }} className="block w-full text-left px-4 py-3 text-sm hover:bg-[#161A20] transition-colors duration-150">
                      <div className="flex items-center gap-2 font-medium text-[#EDEDED]">{opt.icon}{opt.label}</div>
                      <div className="text-xs mt-0.5 text-[#8B8F98]">{opt.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => scrollTo('#contact')} className="px-4 py-2 text-sm font-medium bg-[#5B8DFF] text-[#0A0A0A] rounded-lg hover:bg-[#7BA1FF] transition-colors duration-200 flex items-center gap-1.5">
              Contact
              <span aria-hidden>→</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <button onClick={onOpenPalette} className="p-2 text-[#8B8F98]" aria-label="Open command palette"><Command size={18} /></button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#8B8F98]" aria-label="Toggle menu">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-[#1F232B] bg-[#0A0A0A]">
          <div className="px-4 pt-3 pb-4 space-y-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.href)} className="block w-full text-left px-3 py-2.5 text-base font-medium text-[#EDEDED] rounded-md">
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo('#contact')} className="block w-full text-left px-3 py-2.5 text-base font-medium text-[#5B8DFF] rounded-md">
              Contact →
            </button>
            <div className="flex gap-2 pt-3 mt-2 border-t border-[#1F232B]">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium border border-[#1F232B] rounded-lg text-[#EDEDED]"><Github size={15} />GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium border border-[#1F232B] rounded-lg text-[#EDEDED]"><Linkedin size={15} />LinkedIn</a>
            </div>
            <button onClick={() => { window.open(profile.resumeUrl, '_blank'); setIsMenuOpen(false); }} className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium border border-[#1F232B] rounded-lg text-[#EDEDED] mt-2">
              <FileText size={15} />Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
