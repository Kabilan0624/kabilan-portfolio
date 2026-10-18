import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Expertise from './components/sections/Expertise';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bgDark text-textPrimary selection:bg-accent selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Banner with Photo & Call to Actions */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Verified Technical Skills from Resume */}
        <Skills />

        {/* 6 Focused Areas of Expertise / Services */}
        <Expertise />

        {/* Featured Projects with 31 Genuine Screenshots */}
        <Projects />

        {/* Professional Milestones */}
        <Experience />

        {/* Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
