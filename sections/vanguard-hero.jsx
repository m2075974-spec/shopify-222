import React, { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

export default function VanguardHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Projects', 'Studio', 'Offerings', 'Inquire'];
  const stats = [
    { value: '250+', label: 'Brands Transformed' },
    { value: '95%', label: 'Client Retention' },
    { value: '10+', label: 'Years in the Game' }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <nav className="relative z-40 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
        {/* Brand */}
        <div className="font-podium text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
          VANGUARD
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300">
          GET IN TOUCH
          <ArrowUpRight className="w-4 h-4" />
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50"
        >
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-6 h-0.5 bg-white" />
          <div className="w-4 h-0.5 bg-white" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition-all duration-500`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5">
          <div className="font-podium text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
            VANGUARD
          </div>
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-podium text-4xl sm:text-5xl text-white uppercase tracking-tight"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out',
                transitionDelay: menuOpen ? `${i * 80 + 100}ms` : '0ms'
              }}
            >
              {link}
            </a>
          ))}

          {/* Mobile CTA Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 mt-4"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out',
              transitionDelay: menuOpen ? `${navLinks.length * 80 + 100}ms` : '0ms'
            }}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center px-6 sm:px-10 lg:px-16 py-20">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="flex items-center gap-2 mb-6 lg:mb-8 animate-fade-up">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="font-inter text-xs sm:text-sm text-white/70 tracking-[0.3em] uppercase">
              World-Class Digital Collective
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-podium text-[clamp(2.8rem,8vw,7rem)] text-white uppercase leading-[0.92] tracking-tight mb-6 lg:mb-8 animate-fade-up-delay-1">
            <div>Design.</div>
            <div>Disrupt.</div>
            <div>Conquer.</div>
          </h1>

          {/* Subtext */}
          <p className="font-inter text-sm sm:text-base text-white/70 leading-relaxed max-w-md mt-6 lg:mt-8 animate-fade-up-delay-2">
            We build fierce brand identities<br />
            that don't just turn heads --<br />
            <span className="text-white font-semibold">they lead.</span>
          </p>

          {/* CTA Row */}
          <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-up-delay-3">
            <button className="group bg-black hover:bg-neutral-900 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase text-white transition-all duration-300 flex items-center gap-2">
              SEE OUR WORK
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
            <div className="hidden sm:flex items-center gap-3">
              <Award className="w-8 h-8 text-white/50" />
              <div>
                <div className="text-white/60 text-xs tracking-wider uppercase">Top-Rated</div>
                <div className="text-white/60 text-xs tracking-wider uppercase">Brand Studio</div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16 animate-fade-up-delay-4">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="font-inter text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
