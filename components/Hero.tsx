import React from 'react';
import { ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';

interface HeroProps {
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ ctaLink }) => {
  return (
    <div className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32">
      {/* Background decoration (Subtle) */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Stop Gambling on "Red vs Green". <br />
            <span className="text-white">
              Start Stacking Yield.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The "YieldStack" method allows investors to generate consistent cashflow from their digital assets using institutional-grade strategies—without staring at charts all day.
          </p>
        </div>

        {/* CTA CARD */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-1">
            <div className="bg-slate-900 rounded-xl p-8 md:p-10 text-center relative overflow-hidden">
               
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-slate-800 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-700">
                    <BookOpen size={32} />
                 </div>
                 
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                   Access The "YieldStack" Crash Course
                 </h3>
                 <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                   Join 10,000+ investors who have transitioned from speculative trading to data-driven wealth accumulation.
                 </p>

                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={ctaLink}
                      className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-accent hover:bg-emerald-600 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all duration-200"
                    >
                      Start Free Training
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                 </div>

                 <p className="mt-6 text-xs text-slate-500 flex items-center justify-center gap-1">
                   <ShieldCheck size={12} />
                   Secure Access • Institutional Grade Research
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