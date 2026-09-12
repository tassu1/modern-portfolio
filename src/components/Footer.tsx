import React from 'react';
import { profile } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#0A0A0A] border-t border-[#1F232B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-[#5C616B]">
          © {new Date().getFullYear()} {profile.shortName}
        </span>
        <span className="font-mono text-xs text-[#3A3D43]">
          Built with React · TypeScript · Tailwind
        </span>
      </div>
    </footer>
  );
};

export default Footer;
