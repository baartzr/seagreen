import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ ctaLink }) => {
  return (
    <div className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] opacity-50"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
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

        {/* VSL Container with YouTube Embed */}
        <div className="relative max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden aspect-video mb-12 group">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4ypw8yKKYDM?si=7Ig5zMFrHZCGF3Yk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           
          {/* Live Badge (Pointer events none so you can click the video underneath) */}
          <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1 pointer-events-none">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            IMPORTANT UPDATE
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center gap-4">
          <a 
            href={ctaLink}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-brand-accent hover:bg-emerald-600 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-200 w-full md:w-auto"
          >
            Show Me The YieldStack Method
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <ShieldCheck size={16} />
            <span>100% Free Educational Training</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;