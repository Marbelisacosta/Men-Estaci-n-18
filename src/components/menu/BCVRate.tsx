"use client";

import { TrendingUp, Banknote, Loader2 } from 'lucide-react';

interface BCVRateProps {
  currentRate: number;
  loading?: boolean;
}

export function BCVRate({ currentRate, loading }: BCVRateProps) {
  return (
    <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all hover:bg-white/[0.07] group flex items-center p-2 sm:px-4 sm:py-3 gap-2 sm:gap-4">
      <div className="bg-white/[0.05] p-1.5 sm:p-2.5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform flex items-center justify-center">
        <Banknote className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-primary" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className="text-[7px] sm:text-[10px] text-muted-foreground font-black uppercase tracking-[0.1em] whitespace-nowrap">Tasa del Día</span>
          <div className={`w-1 h-1 bg-green-500 rounded-full ${loading ? 'opacity-30' : 'animate-pulse'}`} />
        </div>
        <div className="flex items-baseline gap-1">
          {loading ? (
            <Loader2 className="h-3 w-3 text-primary animate-spin" />
          ) : (
            <span className="text-[10px] sm:text-lg font-black text-white font-headline whitespace-nowrap">
              Bs. {currentRate.toLocaleString('es-VE', { minimumFractionDigits: 2 })}
            </span>
          )}
          <TrendingUp className="h-2 w-2 text-primary opacity-50 hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
