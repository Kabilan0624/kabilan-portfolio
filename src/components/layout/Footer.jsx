import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { portfolioContent } from '../../config/portfolioContent';

export default function Footer() {
  const { brand, personal, footer } = portfolioContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bgDark border-t border-borderDark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <img src={brand.logoPath} alt="Logo" className="w-8 h-8 rounded-lg" />
            <div>
              <div className="font-bold text-base text-textPrimary">
                <span>{brand.name}</span>
                <span className="text-accent">.dev</span>
              </div>
              <p className="text-xs text-textMuted">
                Flutter & Mobile Application Developer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-borderDark text-textSecondary hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-borderDark text-textSecondary hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-xl bg-surface border border-borderDark text-textSecondary hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            {personal.phone && (
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-surface border border-borderDark text-textSecondary hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Phone"
                title={personal.phone}
              >
                <Phone className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-textMuted text-center md:text-right">
              {footer.copyright}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-surface border border-borderDark text-textSecondary hover:text-accent hover:border-accent/40 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
