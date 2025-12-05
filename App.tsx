import React from 'react';
import Hero from './components/Hero';
import MarketInsights from './components/MarketInsights';
import Features from './components/Features';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar Placeholder */}
      <nav className="w-full py-6 px-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white font-extrabold shadow-lg">Y</div>
            <span>YieldStack</span>
          </div>
          <a 
            href="https://cryptolabsresearch.com/cryptocrashcourse"
            className="hidden md:inline-flex items-center text-sm font-semibold text-brand-accent hover:text-emerald-300 transition-colors"
          >
            Member Login <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </nav>

      <main className="flex-grow mt-16">
        <Hero />
        <MarketInsights />
        <Features />
        
        {/* Final CTA Section */}
        <div className="bg-emerald-900/20 py-16 border-t border-emerald-900/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your YieldStack?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              The Crypto Crash Course is free for a limited time. Don't miss the next market cycle.
            </p>
            <a 
              href="https://cryptolabsresearch.com/cryptocrashcourse"
              className="inline-block w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-emerald-600 text-white font-bold text-xl rounded-lg shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] hover:-translate-y-1 transition-all duration-200"
            >
              Get Instant Access Now
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;