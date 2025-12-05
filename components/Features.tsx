import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Rules Have Changed</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Most crypto investors are still playing by the 2017 rules. They buy, they hold, they pray. The YieldStack method is different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* The Old Way */}
          <div className="relative p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 px-4 py-1 rounded-full border border-slate-700 text-slate-400 font-semibold text-sm uppercase tracking-wide">
               The "HODL & Pray" Method
            </div>
            <ul className="space-y-4 mt-4">
              {[
                "Buying at the top due to FOMO",
                "Staring at charts for 6+ hours a day",
                "Emotional panic selling when price drops",
                "Zero income while waiting for price to go up",
                "High risk of total loss on 'meme coins'"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The New Way */}
          <div className="relative p-8 rounded-2xl bg-slate-800/80 border border-brand-accent/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent px-4 py-1 rounded-full text-white font-bold text-sm uppercase tracking-wide shadow-lg">
              The YieldStack Method
            </div>
            <ul className="space-y-4 mt-4">
              {[
                "Profit regardless of if the market goes up or down",
                "Set it up once, check it weekly (15 mins)",
                "Based on mathematical yield, not emotions",
                "Generates daily/weekly cashflow",
                "Focuses on blue-chip assets with institutional backing"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle className="w-6 h-6 text-brand-accent shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;