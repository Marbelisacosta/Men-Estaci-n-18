
"use client";

import { useState, useEffect } from 'react';
import { Banknote, TrendingUp } from 'lucide-react';
import { EXCHANGE_RATE } from '@/lib/menu-data';

export function BCVRate() {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRate(EXCHANGE_RATE);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all hover:bg-white/10 group animate-in fade-in duration-500">
      <div className="hidden sm:flex bg-primary/20 p-2 rounded-xl ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
        <Banknote className="h-3.5 w-3.5 text-primary" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] sm:text-[9px] text-muted-foreground font-black uppercase tracking-[0.1em]">Tasa del Día</span>
          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[10px] sm:text-[13px] font-black text-white font-headline">
            {rate ? `Bs. ${rate.toLocaleString('es-VE', { minimumFractionDigits: 2 })}` : '---'}
          </span>
          <TrendingUp className="h-2 w-2 text-primary opacity-50 hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
