import React from 'react';
import { ArrowRight, ShieldCheck, Star, Unlock } from 'lucide-react';

interface HeroProps {
  ctaLink: string;
}

const REVIEWS = [
  { name: "Sarah J.", text: "CryptoLabs Research changed my life. The yield strategies are gold." },
  { name: "Mike T.", text: "Finally, a channel that doesn't just hype meme coins. Real value here." },
  { name: "David L.", text: "The free course was better than paid ones I've taken." },
  { name: "Alex R.", text: "Consistent cashflow is the way. Thanks for the alpha!" },
  { name: "Chris P.", text: "I stopped day trading and started stacking yield. Best decision ever." },
  { name: "James K.", text: "Honest, transparent, and profitable. Rare in this space." },
  { name: "Emily W.", text: "The YieldStack method just makes sense mathematically." },
];

const Hero: React.FC<HeroProps> = ({ ctaLink }) => {
  return (
    <div className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-glow text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            New Strategy for {new Date().getFullYear()}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Stop Gambling on "Red vs Green". <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
              Start Stacking Yield.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            The "YieldStack" method allows ordinary investors to generate consistent cashflow from their crypto assets—without staring at charts all day.
          </p>
        </div>

        {/* TICKER TAPE */}
        <div className="w-full overflow-hidden mb-12 bg-slate-900/50 border-y border-white/5 py-3 relative">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
          
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div key={i} className="flex items-center gap-2 mx-6 text-sm text-slate-300">
                <div className="flex text-yellow-500">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <span className="font-semibold text-white">"{review.text}"</span>
                <span className="text-slate-500">- {review.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA CARD (Replaces Video) */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-brand-accent/30 shadow-[0_0_50px_rgba(16,185,129,0.15)] p-1">
            <div className="bg-slate-900/90 rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
               {/* Decorative glow inside card */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-70"></div>
               
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-brand-accent/50">
                    <Unlock size={32} />
                 </div>
                 
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                   Unlock The "YieldStack" Crash Course
                 </h3>
                 <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                   Join 10,000+ students who have stopped gambling and started building real wealth. Access is free for a limited time.
                 </p>

                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={ctaLink}
                      className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-accent hover:bg-emerald-600 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-200"
                    >
                      Start Free Training Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                 </div>

                 <p className="mt-4 text-xs text-slate-500 flex items-center justify-center gap-1">
                   <ShieldCheck size={12} />
                   Secure Access • No Credit Card Required
                 </p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;