import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Download, Eye, FileText } from 'lucide-react';

interface NavbarProps {
  className?: string;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  className = '', 
  isDarkMode = false, 
  onThemeToggle 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Work', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Resume options
  const resumeOptions = [
    {
      label: "View Resume",
      icon: <Eye size={16} />,
      action: () => window.open("/resume.pdf", "_blank"),
      description: "Open in browser"
    },
    {
      label: "Download PDF",
      icon: <Download size={16} />,
      action: () => {
        const link = document.createElement('a');
        link.href = "/resume.pdf";
        link.download = "Tahseen_Alam_Resume.pdf";
        link.click();
      },
      description: "Save to device"
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResumeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsResumeDropdownOpen(false);
      }
    };

    if (isMenuOpen || isResumeDropdownOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isResumeDropdownOpen]);

  // Updated Minimal & Elegant theme
  const themeClasses = isDarkMode 
    ? 'bg-[#0C0C0C] text-[#F1F1F1] border-b border-[#2D2D2D]' 
    : 'bg-[#FFFFFF] text-[#2D2D2D] border-b border-[#E0D7CE]';

  const hoverClasses = isDarkMode 
    ? 'hover:text-[#A9A9A9] hover:bg-[#2D2D2D]' 
    : 'hover:text-[#D72638] hover:bg-[#E0D7CE]';

  const scrolledClasses = isScrolled 
    ? (isDarkMode ? 'shadow-lg shadow-black/20' : 'shadow-lg shadow-gray-200/50') 
    : '';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${themeClasses} transition-all duration-300 ${scrolledClasses} ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Left Side - Resume Button */}
            <div className="flex-shrink-0">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md flex items-center gap-2 ${
                    isResumeDropdownOpen 
                      ? (isDarkMode ? 'bg-[#2D2D2D] text-[#9B2226]' : 'bg-[#E0D7CE] text-[#D72638]')
                      : hoverClasses
                  }`}
                >
                  <FileText size={16} />
                  Resume
                </button>
                
                {/* Dropdown Menu */}
                {isResumeDropdownOpen && (
                  <div className={`absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg ${
                    isDarkMode ? 'bg-[#1A1A1A] border border-[#2D2D2D]' : 'bg-white border border-[#E0D7CE]'
                  }`}>
                    <div className="py-1">
                      {resumeOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            option.action();
                            setIsResumeDropdownOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm transition-all duration-200 ${
                            isDarkMode 
                              ? 'hover:bg-[#2D2D2D] text-[#F1F1F1]' 
                              : 'hover:bg-[#F7F7F7] text-[#2D2D2D]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {option.icon}
                            <span className="font-medium">{option.label}</span>
                          </div>
                          <div className={`text-xs mt-1 ${
                            isDarkMode ? 'text-[#A9A9A9]' : 'text-[#5A5A5A]'
                          }`}>
                            {option.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${hoverClasses}`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Theme Toggle - Desktop */}
              <button
                onClick={onThemeToggle}
                className={`p-2 ml-2 rounded-md transition-all duration-200 ${hoverClasses}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun size={20} className={isDarkMode ? 'text-[#A9A9A9]' : 'text-[#D72638]'} />
                ) : (
                  <Moon size={20} className={isDarkMode ? 'text-[#A9A9A9]' : 'text-[#D72638]'} />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Theme Toggle - Mobile */}
              <button
                onClick={onThemeToggle}
                className={`p-2 rounded-md transition-all duration-200 ${hoverClasses}`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun size={18} className={isDarkMode ? 'text-[#A9A9A9]' : 'text-[#D72638]'} />
                ) : (
                  <Moon size={18} className={isDarkMode ? 'text-[#A9A9A9]' : 'text-[#D72638]'} />
                )}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-all duration-200 ${hoverClasses}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${isDarkMode ? 'border-[#2D2D2D]' : 'border-[#E0D7CE]'}`}>
            <div className={`px-2 pt-2 pb-3 space-y-1 ${themeClasses}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-md ${hoverClasses}`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Resume Options */}
              <div className="border-t pt-2 mt-2">
                <div className={`px-4 py-2 text-sm font-medium ${
                  isDarkMode ? 'text-[#A9A9A9]' : 'text-[#5A5A5A]'
                }`}>
                  Resume Options
                </div>
                {resumeOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      option.action();
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-md ${hoverClasses}`}
                  >
                    <div className="flex items-center gap-2">
                      {option.icon}
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;