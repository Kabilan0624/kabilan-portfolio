import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Phone, FileDown } from 'lucide-react';
import { Github, Linkedin } from '../ui/Icons';
import { portfolioContent } from '../../config/portfolioContent';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Contact() {
  const { contact, personal } = portfolioContent;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-bgDark/80 relative border-t border-borderDark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow={contact.eyebrow}
          title={contact.heading}
          subtitle={contact.subtext}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Reachout Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <Card className="bg-surface/80 border-borderDark p-8 flex-1">
              <h3 className="text-xl font-bold text-textPrimary mb-4">
                Let's Connect
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed mb-8">
                Whether you're looking for a Flutter developer for an app release, feature module, or contract role, my inbox is always open.
              </p>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surfaceLight border border-borderDark text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono text-textMuted uppercase">Email</div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-medium text-textPrimary hover:text-accent transition-colors truncate block"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg text-textMuted hover:text-textPrimary hover:bg-surfaceLight transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                {contact.phone && (
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-surfaceLight border border-borderDark text-accent shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-mono text-textMuted uppercase">Phone / WhatsApp</div>
                      <a
                        href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-medium text-textPrimary hover:text-accent transition-colors truncate block"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Location Item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-surfaceLight border border-borderDark text-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-textMuted uppercase">Location</div>
                    <div className="text-sm font-medium text-textPrimary">
                      {contact.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels & Resume */}
              <div className="mt-8 pt-6 border-t border-borderDark/60">
                <span className="text-xs font-semibold text-textMuted uppercase tracking-wider block mb-3">
                  Online Presence
                </span>
                <div className="flex flex-wrap gap-3">
                  {personal.github && (
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surfaceLight border border-borderDark text-xs font-medium text-textSecondary hover:text-textPrimary hover:border-accent transition-colors"
                    >
                      <Github className="w-4 h-4 text-accent" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {personal.linkedin && (
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surfaceLight border border-borderDark text-xs font-medium text-textSecondary hover:text-textPrimary hover:border-accent transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-accent" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>

                {personal.hasRealResume && (
                  <div className="mt-4">
                    <a
                      href={personal.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-accentMuted border border-accent/30 text-accent hover:bg-accent hover:text-white text-xs font-semibold transition-all duration-200"
                    >
                      <FileDown className="w-4 h-4" />
                      Download Resume (PDF)
                    </a>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="bg-surface/80 border-borderDark p-8">
              <h3 className="text-xl font-bold text-textPrimary mb-6">
                {contact.formHeading}
              </h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thanks for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-textSecondary mb-1.5 uppercase font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-bgDark border border-borderDark text-textPrimary placeholder:text-textMuted text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-textSecondary mb-1.5 uppercase font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-bgDark border border-borderDark text-textPrimary placeholder:text-textMuted text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-textSecondary mb-1.5 uppercase font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-bgDark border border-borderDark text-textPrimary placeholder:text-textMuted text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-textSecondary mb-1.5 uppercase font-mono">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your mobile project, feature requirements, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-bgDark border border-borderDark text-textPrimary placeholder:text-textMuted text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  iconPosition="right"
                  className="w-full justify-center mt-2"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
