import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Trusted by Serious Investors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Review 1 */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1 mb-4 text-brand-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              "I was skeptical about 'passive' income in crypto, but the YieldStack protocols are generating verifiable returns. It's refreshing to see math-based strategies instead of hype."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500">SJ</div>
              <div>
                <div className="font-bold text-white text-sm">Sarah J.</div>
                <div className="text-xs text-slate-500">YieldStack Member</div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1 mb-4 text-brand-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              "CryptoLabs Research isn't about moonshots. It's about fundamental analysis. This approach saved my portfolio during the last downturn and kept cashflow coming in."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500">MT</div>
              <div>
                <div className="font-bold text-white text-sm">Mike T.</div>
                <div className="text-xs text-slate-500">FastTrack Member</div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1 mb-4 text-brand-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              "The depth of research is unmatched. I've stopped checking charts every hour and started focusing on accumulation. The 'YieldStack' method just makes mathematical sense."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500">DL</div>
              <div>
                <div className="font-bold text-white text-sm">David L.</div>
                <div className="text-xs text-slate-500">YieldStack Member</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;