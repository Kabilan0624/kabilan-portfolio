import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { portfolioContent } from '../../config/portfolioContent';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, navigation, personal } = portfolioContent;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bgDark/90 backdrop-blur-md border-b border-borderDark py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={brand.logoPath}
              alt="Logo"
              className="w-9 h-9 rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex items-baseline font-bold tracking-tight text-lg text-textPrimary">
              <span>{brand.name}</span>
              <span className="text-accent">.dev</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/70 border border-borderDark px-4 py-1.5 rounded-full backdrop-blur-sm">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-medium text-textSecondary hover:text-textPrimary hover:bg-surfaceLight rounded-full transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {personal.hasRealResume && (
              <Button
                variant="secondary"
                size="sm"
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={FileDown}
                iconPosition="left"
              >
                Resume
              </Button>
            )}
            <Button
              variant="primary"
              size="sm"
              href="#projects"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              View Projects
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-textSecondary hover:text-textPrimary hover:bg-surface border border-borderDark"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-borderDark px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-textSecondary hover:text-textPrimary hover:bg-surfaceLight rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-borderDark flex flex-col gap-2">
            {personal.hasRealResume && (
              <Button
                variant="secondary"
                size="md"
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={FileDown}
                className="w-full justify-center"
              >
                Download Resume
              </Button>
            )}
            <Button
              variant="primary"
              size="md"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
