"use client";

import { TrendingUp, Banknote, Loader2 } from 'lucide-react';

interface BCVRateProps {
  currentRate: number;
  loading?: boolean;
}

export function BCVRate({ currentRate, loading }: BCVRateProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all hover:bg-white/10 group animate-in fade-in duration-500 flex items-center p-2 sm:p-3 gap-3">
      <div className="hidden sm:flex bg-primary/20 p-2 rounded-xl ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
        <Banknote className="h-3.5 w-3.5 text-primary" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] sm:text-[9px] text-muted-foreground font-black uppercase tracking-[0.1em]">Tasa del Día</span>
          <div className={`w-1 h-1 bg-green-500 rounded-full ${loading ? 'opacity-30' : 'animate-pulse'}`} />
        </div>
        <div className="flex items-baseline gap-1">
          {loading ? (
            <Loader2 className="h-3 w-3 text-primary animate-spin" />
          ) : (
            <span className="text-[10px] sm:text-[13px] font-black text-white font-headline">
              Bs. {currentRate.toLocaleString('es-VE', { minimumFractionDigits: 2 })}
            </span>
          )}
          <TrendingUp className="h-2 w-2 text-primary opacity-50 hidden sm:block" />
        </div>
      </div>
    </div>
  );
}