import React from 'react';
import { User, Coins, ArrowLeftRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider">
              The Strategy
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Be The House, <br />
              <span className="text-brand-accent">Not The Gambler.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              The YieldStack method is unlike anything you've seen before. It's not "Buy and Pray". It's not some Technical Analysis black hole. And it does not try to predict price changes.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Instead, it places you at the center of every transaction—yes you get a piece of the action of trades other people make—just like the big brokers and institutions.
            </p>
            
            <div className="p-6 bg-slate-800/50 border-l-4 border-brand-accent rounded-r-lg backdrop-blur-sm">
              <p className="text-white font-medium text-lg italic">
                "It's institutional-grade investing for the average person, making predictable cash-flow every single day."
              </p>
            </div>
          </div>

          {/* Visual Diagram */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            {/* Decorative Glow */}
            <div className="absolute w-full h-full bg-brand-accent/5 blur-[80px] rounded-full pointer-events-none"></div>

            {/* Central Node (You) */}
            <div className="absolute z-20 w-32 h-32 bg-slate-900 border-2 border-brand-accent rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mb-1 text-white">
                <User size={24} />
              </div>
              <span className="text-white font-bold text-sm">YOU</span>
            </div>

            {/* Inner Orbit */}
            <div className="absolute w-64 h-64 border border-slate-700 rounded-full animate-spin-slow flex items-center justify-center">
              <div className="absolute top-0 -translate-y-1/2 bg-slate-800 p-2 rounded-full border border-slate-600">
                <Coins size={20} className="text-yellow-400" />
              </div>
              <div className="absolute bottom-0 translate-y-1/2 bg-slate-800 p-2 rounded-full border border-slate-600">
                 <ArrowLeftRight size={20} className="text-blue-400" />
              </div>
            </div>

            {/* Outer Orbit */}
            <div className="absolute w-96 h-96 border border-slate-800 rounded-full animate-reverse-spin flex items-center justify-center">
              <div className="absolute left-0 -translate-x-1/2 bg-slate-900 p-3 rounded-lg border border-slate-700 text-xs text-slate-400 font-mono">
                Fees
              </div>
              <div className="absolute right-0 translate-x-1/2 bg-slate-900 p-3 rounded-lg border border-slate-700 text-xs text-slate-400 font-mono">
                Rewards
              </div>
            </div>
            
            {/* Connection Lines (Static for effect) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
               <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-accent to-transparent"></div>
               <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;