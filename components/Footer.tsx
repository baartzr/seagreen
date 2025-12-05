import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm mb-6">
          &copy; {new Date().getFullYear()} SeaGreen Investments. All rights reserved.
        </p>
        <div className="max-w-3xl mx-auto text-xs text-slate-600 space-y-4">
          <p>
            <strong>Disclaimer:</strong> The information provided on this page is for educational purposes only and does not constitute financial advice, investment advice, trading advice, or any other advice. Crypto assets are volatile and high risk. You should not invest more than you can afford to lose.
          </p>
          <p>
            Past performance is not indicative of future results. The "YieldStack" method is a strategy, not a guarantee of profit. SeaGreen Investments and CryptoLabs Research are not registered financial advisors. Please consult with a professional financial advisor before making any investment decisions.
          </p>
          <p>
            <a href="#" className="hover:text-slate-400 underline">Privacy Policy</a> | <a href="#" className="hover:text-slate-400 underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;