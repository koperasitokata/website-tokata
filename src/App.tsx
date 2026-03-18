/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Landmark, Instagram, Globe, ShieldCheck, Clock } from 'lucide-react';
import { ASSETS } from './assets';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-purple-100 selection:text-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={ASSETS.LOGO_MAIN} 
              alt="Tokata Logo" 
              className="h-8 md:h-20 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex items-center gap-4 md:gap-8 text-[10px] md:text-sm font-medium uppercase tracking-widest">
            <a href="#clothing" className="hover:text-purple-600 transition-colors whitespace-nowrap">{ASSETS.TEXT.NAV.CLOTHING}</a>
            <a href="#koperasi" className="hover:text-purple-600 transition-colors whitespace-nowrap">{ASSETS.TEXT.NAV.KOPERASI}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className={`absolute inset-0 -z-20 ${ASSETS.HERO_BG_OPACITY}`}>
          <img 
            src={ASSETS.HERO_BG_IMAGE} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex justify-center md:justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center md:text-right flex flex-col items-center md:items-end"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif leading-[1.1] mb-6 md:mb-8">
              {ASSETS.TEXT.HERO.TITLE_MAIN} <span className="italic text-purple-600">{ASSETS.TEXT.HERO.TITLE_ACCENT}</span> {ASSETS.TEXT.HERO.TITLE_END}
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-10 max-w-xl">
              {ASSETS.TEXT.HERO.DESCRIPTION}
            </p>
          </motion.div>
        </div>
      </header>

      {/* Features Grid */}
      <main className="flex-grow">
        <section id="clothing" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={ASSETS.CLOTHING_IMAGE} 
                  alt={ASSETS.TEXT.CLOTHING.TITLE} 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:p-10">
                  <span className="text-purple-400 font-mono text-xs md:text-sm uppercase tracking-widest mb-2">{ASSETS.TEXT.CLOTHING.LABEL}</span>
                  <h3 className="text-white text-3xl md:text-4xl font-serif font-bold">{ASSETS.TEXT.CLOTHING.TITLE}</h3>
                </div>
              </motion.div>
              
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                  <ShoppingBag size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{ASSETS.TEXT.CLOTHING.SUBTITLE}</h2>
                <p className="text-base md:text-lg text-neutral-500 mb-8 leading-relaxed">
                  {ASSETS.TEXT.CLOTHING.DESCRIPTION}
                </p>
                <ul className="space-y-4">
                  {ASSETS.TEXT.CLOTHING.FEATURES.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-700 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="koperasi" className="py-16 md:py-24 bg-neutral-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
                  <Landmark size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{ASSETS.TEXT.KOPERASI.SUBTITLE}</h2>
                <p className="text-base md:text-lg text-neutral-400 mb-8 leading-relaxed">
                  {ASSETS.TEXT.KOPERASI.DESCRIPTION}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <ShieldCheck className="text-purple-400 mb-4" />
                    <h4 className="font-bold mb-2">{ASSETS.TEXT.KOPERASI.FEATURE_1.TITLE}</h4>
                    <p className="text-sm text-neutral-500">{ASSETS.TEXT.KOPERASI.FEATURE_1.DESC}</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <Clock className="text-purple-400 mb-4" />
                    <h4 className="font-bold mb-2">{ASSETS.TEXT.KOPERASI.FEATURE_2.TITLE}</h4>
                    <p className="text-sm text-neutral-500">{ASSETS.TEXT.KOPERASI.FEATURE_2.DESC}</p>
                  </div>
                </div>
              </div>

              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 relative flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
                <div className="relative w-full aspect-square max-w-sm md:max-w-md bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-8 md:p-12">
                  <img 
                    src={ASSETS.LOGO_KOPERASI} 
                    alt={ASSETS.TEXT.KOPERASI.TITLE} 
                    className="w-full h-full object-contain drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t border-neutral-200 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 md:mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={ASSETS.LOGO_MAIN} 
                  alt="Tokata Logo" 
                  className="h-8 md:h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-neutral-500 max-w-sm leading-relaxed text-sm md:text-base">
                {ASSETS.TEXT.FOOTER.DESCRIPTION}
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4 md:mb-6 uppercase text-xs tracking-widest">{ASSETS.TEXT.FOOTER.NAV_TITLE}</h5>
              <ul className="space-y-3 md:space-y-4 text-neutral-600 text-sm">
                <li><a href="#" className="hover:text-black transition-colors">Beranda</a></li>
                <li><a href="#clothing" className="hover:text-black transition-colors">{ASSETS.TEXT.NAV.CLOTHING}</a></li>
                <li><a href="#koperasi" className="hover:text-black transition-colors">{ASSETS.TEXT.NAV.KOPERASI}</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4 md:mb-6 uppercase text-xs tracking-widest">{ASSETS.TEXT.FOOTER.FOLLOW_TITLE}</h5>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/tokata.clothing/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                >
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-neutral-400 text-center md:text-left">
            <p>{ASSETS.TEXT.FOOTER.COPYRIGHT}</p>
            <div className="flex gap-6 md:gap-8">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
