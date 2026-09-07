
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { generateFlavorDescription } from '@/ai/flows/generate-flavor-description';
import { MenuItem, BRAND_MOTTO, EXCHANGE_RATE } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles, Utensils, CheckCircle2, Square, Info, Ban } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  isSelected?: boolean;
  onSelect?: () => void;
}

export function MenuItemCard({ item, isSelected, onSelect }: MenuItemCardProps) {
  const [aiDescription, setAiDescription] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const placeholder = PlaceHolderImages.find(img => img.id === item.image);
  const priceBs = item.price * EXCHANGE_RATE;
  const isAvailable = item.isAvailable !== false;

  useEffect(() => {
    async function fetchDescription() {
      try {
        const result = await generateFlavorDescription({
          itemName: item.name,
          motto: BRAND_MOTTO
        });
        setAiDescription(result.description);
      } catch (error) {
        setAiDescription("¡Delicioso sabor al estilo Estación 18!");
      } finally {
        setLoading(false);
      }
    }
    fetchDescription();
  }, [item.name]);

  const isCombo = item.category === 'combo';

  const handleCardClick = () => {
    if (isAvailable && onSelect) {
      onSelect();
    }
  };

  return (
    <Card 
      onClick={handleCardClick}
      className={`group relative overflow-hidden transition-all duration-300 ${isAvailable ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-1' : 'cursor-not-allowed opacity-75'} border-border/40 ${isCombo ? 'border-primary/30' : ''} ${isSelected && isAvailable ? 'ring-2 ring-primary bg-primary/5 shadow-primary/20' : ''}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={placeholder?.imageUrl || 'https://picsum.photos/seed/food/600/400'}
          alt={item.name}
          fill
          className={`object-cover transition-transform duration-500 ${isAvailable ? 'group-hover:scale-110' : 'grayscale'} ${isSelected && isAvailable ? 'scale-105 brightness-75' : ''}`}
          data-ai-hint={placeholder?.imageHint || 'food'}
        />
        
        {/* Marcado Visual Check-list */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          {isSelected && isAvailable && (
            <div className="bg-primary/90 text-white p-4 rounded-full shadow-2xl animate-in zoom-in-50 duration-300">
              <CheckCircle2 className="h-12 w-12" />
            </div>
          )}
          {!isAvailable && (
            <div className="bg-black/60 text-white px-4 py-2 rounded-xl flex items-center gap-2 border border-white/20 backdrop-blur-sm">
              <Ban className="h-5 w-5 text-red-500" />
              <span className="font-headline font-bold text-xs uppercase tracking-widest">No disponible</span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {isAvailable && (
          <div className="absolute top-4 right-4 z-20">
            {!isSelected ? (
              <div className="bg-black/40 backdrop-blur-md text-white/80 p-1.5 rounded-xl border border-white/20">
                <Square className="h-5 w-5" />
              </div>
            ) : (
               <div className="bg-primary text-white p-1.5 rounded-xl shadow-lg border border-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            )}
          </div>
        )}

        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
          {isCombo && isAvailable && (
            <Badge className="bg-primary text-white font-headline border-none shadow-lg px-3 py-1 text-[10px] animate-pulse-subtle uppercase tracking-tighter">
              Combo Ahorro
            </Badge>
          )}
          {item.isSpecial && isAvailable && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-headline shadow-md text-[10px] uppercase">
              <Sparkles className="h-3 w-3 mr-1" /> Especial
            </Badge>
          )}
        </div>
        
        <div className="absolute bottom-3 right-3 z-20">
          <div className={`px-4 py-2 rounded-2xl font-headline shadow-xl border border-white/10 transition-all flex flex-col items-end ${!isAvailable ? 'bg-muted text-muted-foreground' : isSelected ? 'bg-secondary text-white scale-105' : 'bg-primary text-white'}`}>
            <span className="text-xl font-bold leading-none">${item.price.toFixed(2)}</span>
            <span className="text-[10px] font-bold opacity-90 leading-tight mt-0.5">Bs. {priceBs.toLocaleString('es-VE', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`font-headline text-lg md:text-xl font-bold tracking-tight transition-colors uppercase ${!isAvailable ? 'text-muted-foreground' : isSelected ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
            {item.name}
          </h3>
        </div>
        
        {item.description && (
          <div className="mb-4 p-3 bg-muted/50 rounded-xl border border-border/50 flex gap-2">
            <Info className={`h-4 w-4 shrink-0 mt-0.5 ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`} />
            <p className={`text-xs font-bold leading-snug ${isAvailable ? 'text-foreground' : 'text-muted-foreground'}`}>
              {item.description}
            </p>
          </div>
        )}

        <div className="min-h-[50px]">
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
            </div>
          ) : (
            <p className={`text-[13px] leading-relaxed italic ${isAvailable ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
              &ldquo;{aiDescription}&rdquo;
            </p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
          <div className={`flex items-center text-[10px] font-bold uppercase tracking-tighter ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`}>
            <Utensils className="h-3 w-3 mr-1" /> Estación 18
          </div>
          <div className={`text-[10px] font-bold uppercase tracking-widest ${!isAvailable ? 'text-red-500/60' : isSelected ? 'text-primary animate-bounce' : 'text-muted-foreground/60'}`}>
            {!isAvailable ? 'AGOTADO' : isSelected ? '¡EN TU LISTA!' : 'TOCA PARA MARCAR'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
