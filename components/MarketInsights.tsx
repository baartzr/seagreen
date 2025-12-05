import React, { useEffect, useState } from 'react';
import { fetchMarketInsights } from '../services/geminiService';
import { InsightItem } from '../types';
import { TrendingUp, Shield, Clock, Loader2, Sparkles } from 'lucide-react';

const STATIC_INSIGHTS: InsightItem[] = [
  {
    title: "Market Volatility is High",
    description: "Day traders get wrecked in choppy markets. Yield farmers get paid regardless of price direction by providing liquidity.",
    icon: 'trending'
  },
  {
    title: "Institutions are Here",
    description: "Big banks aren't day trading dog coins. They are staking for reliable 4-8% returns. We copy their homework.",
    icon: 'shield'
  },
  {
    title: "Time is Your Asset",
    description: "The YieldStack method takes ~15 minutes a week to manage, unlike trading which requires staring at screens 24/7.",
    icon: 'clock'
  }
];

const MarketInsights: React.FC = () => {
  const [insights, setInsights] = useState<InsightItem[]>(STATIC_INSIGHTS);
  const [loading, setLoading] = useState(true);
  const [isAiGenerated, setIsAiGenerated] = useState(false);

  useEffect(() => {
    let mounted = true;
    const loadInsights = async () => {
      // If we have an API key (checked inside service), we try to fetch
      // Otherwise we fall back gracefully immediately or after timeout
      try {
        if (!process.env.API_KEY) {
            setLoading(false);
            return; 
        }

        const data = await fetchMarketInsights();
        if (mounted && data && data.insights.length > 0) {
          setInsights(data.insights);
          setIsAiGenerated(true);
        }
      } catch (e) {
        console.error("Error loading AI insights, using static fallback", e);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadInsights();
    return () => { mounted = false; };
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'trending': return <TrendingUp className="w-8 h-8 text-brand-accent" />;
      case 'shield': return <Shield className="w-8 h-8 text-brand-accent" />;
      case 'clock': return <Clock className="w-8 h-8 text-brand-accent" />;
      default: return <TrendingUp className="w-8 h-8 text-brand-accent" />;
    }
  };

  return (
    <div className="py-16 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-900 text-blue-300 border border-blue-700">
                MARKET INTELLIGENCE
              </span>
              {loading && <Loader2 className="w-4 h-4 text-slate-500 animate-spin" />}
              {isAiGenerated && !loading && (
                <div className="flex items-center gap-1 text-xs text-purple-400">
                   <Sparkles size={12} />
                   <span>AI Analysis Live</span>
                </div>
              )}
            </div>
            <h2 className="text-3xl font-bold text-white">Why "Yield" Matters Now</h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-right">
            Our systems analyze market conditions to determine the safest, most profitable strategies. Here is the current outlook:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-brand-accent/50 transition-colors duration-300"
            >
              <div className="bg-slate-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4 border border-slate-700 shadow-inner">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;