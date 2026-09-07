
"use client";

import { useState, useEffect } from 'react';
import { Banknote, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { EXCHANGE_RATE } from '@/lib/menu-data';

export function BCVRate() {
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    // Simulando carga de la tasa configurada
    const timer = setTimeout(() => {
      setRate(EXCHANGE_RATE);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-card rounded-full border border-primary/20 shadow-lg animate-in fade-in slide-in-from-top-2">
      <div className="bg-primary/20 p-1.5 rounded-full">
        <Banknote className="h-4 w-4 text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Tasa del Día</span>
        <span className="text-sm font-bold text-foreground">
          {rate ? `Bs. ${rate.toLocaleString('es-VE', { minimumFractionDigits: 2 })}` : 'Cargando...'}
        </span>
      </div>
      {rate && (
        <Badge variant="secondary" className="ml-1 h-5 px-1 bg-secondary/10 text-secondary border-secondary/20 flex gap-0.5 text-[10px]">
          <TrendingUp className="h-2.5 w-2.5" />
          Actualizado
        </Badge>
      )}
    </div>
  );
}
