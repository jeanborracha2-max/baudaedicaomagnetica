import React, { useState, useEffect } from 'react';
import { RECENT_SALES } from '../data/packData';
import { RecentSale } from '../types';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

export const LiveSalesNotifier: React.FC = () => {
  const [currentSale, setCurrentSale] = useState<RecentSale | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    let hideTimer: NodeJS.Timeout;
    let intervalTimer: NodeJS.Timeout;

    const showNext = () => {
      setCurrentSale(RECENT_SALES[index]);
      setVisible(true);

      hideTimer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      index = (index + 1) % RECENT_SALES.length;
    };

    // First popup after 4 seconds
    const timer = setTimeout(() => {
      showNext();
      intervalTimer = setInterval(showNext, 18000);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  if (!currentSale || !visible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs sm:max-w-sm glass-panel-gold p-3.5 rounded-2xl border border-yellow-500/50 shadow-2xl flex items-center gap-3 transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
        <ShoppingBag className="w-5 h-5" />
      </div>

      <div className="text-xs space-y-0.5">
        <div className="flex items-center gap-1 font-bold text-white">
          <span>{currentSale.name}</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        <div className="text-neutral-300">
          Garantiu <strong className="text-yellow-300 font-semibold">{currentSale.plan}</strong>
        </div>
        <div className="text-[10px] text-neutral-500 flex items-center justify-between gap-2">
          <span>{currentSale.city}</span>
          <span className="font-mono text-emerald-400">{currentSale.timeAgo}</span>
        </div>
      </div>
    </div>
  );
};
