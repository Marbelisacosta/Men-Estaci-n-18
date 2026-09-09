
"use client";

import { useState, useEffect } from 'react';
import { MenuItem, EXCHANGE_RATE, BRAND_MOTTO } from '@/lib/menu-data';
import { generateFlavorDescription } from '@/ai/flows/generate-flavor-description';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles, CheckCircle2, Square, Info, Ban } from 'lucide-react';
import Image from 'next/image';

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
  const flameLogoUrl = "https://i.postimg.cc/QMSDJgPw/Post-Estacion-18-(1).png";

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
    if (onSelect && isAvailable) {
      onSelect();
    }
  };

  return (
    <Card 
      onClick={handleCardClick}
      className={`group relative overflow-hidden transition-all duration-500 cursor-pointer border shadow-xl rounded-[1.5rem] sm:rounded-[2.5rem] bg-card ${!isAvailable ? 'opacity-60 grayscale-[0.5] border-border/40' : isSelected ? 'border-primary ring-2 sm:ring-4 ring-primary/20 scale-[1.02] bg-primary/[0.02]' : 'border-border/60 hover:border-primary/40'}`}
    >
      <div className="relative aspect-square sm:aspect-[16/10] overflow-hidden bg-muted">
        <Image 
          src={placeholder?.imageUrl || 'https://picsum.photos/seed/food/600/400'}
          alt={item.name}
          fill
          unoptimized
          className={`object-cover transition-transform duration-500 ${isAvailable ? 'group-hover:scale-110' : 'grayscale'} ${isSelected && isAvailable ? 'scale-105 brightness-75' : ''}`}
          data-ai-hint={placeholder?.imageHint || 'food'}
        />
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          {isSelected && isAvailable && (
            <div className="bg-primary/95 text-white p-3 sm:p-6 rounded-full shadow-2xl animate-in zoom-in-50 duration-300 ring-2 sm:ring-4 ring-white/20">
              <CheckCircle2 className="h-8 w-8 sm:h-16 sm:w-16" />
            </div>
          )}
          {!isAvailable && (
            <div className="bg-black/70 text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-1 sm:gap-3 border border-white/20 backdrop-blur-md">
              <Ban className="h-3 w-3 sm:h-6 sm:w-6 text-red-500" />
              <span className="font-headline font-bold text-[8px] sm:text-sm uppercase tracking-widest">Agotado</span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

        {isAvailable && (
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
            {isSelected ? (
              <div className="bg-primary text-white p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl shadow-xl animate-in zoom-in-50">
                <CheckCircle2 className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-md text-white/80 p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border border-white/20 group-hover:bg-white/20 transition-colors">
                <Square className="h-4 w-4 sm:h-6 sm:w-6" />
              </div>
            )}
          </div>
        )}

        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-col gap-1 z-20">
          {isCombo && isAvailable && (
            <Badge className="bg-primary text-white font-headline border-none shadow-xl px-2 py-0.5 sm:px-4 sm:py-1.5 text-[7px] sm:text-xs animate-pulse-subtle uppercase tracking-tight font-bold">
              Combo
            </Badge>
          )}
        </div>
        
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20">
          <div className={`px-2 py-1 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-2xl font-headline shadow-2xl border border-white/10 transition-all flex flex-col items-end ${!isAvailable ? 'bg-muted text-muted-foreground' : isSelected ? 'bg-secondary text-white scale-105 sm:scale-110' : 'bg-primary text-white'}`}>
            <span className="text-xs sm:text-2xl font-bold leading-none">${item.price.toFixed(2)}</span>
            <span className="text-[6px] sm:text-[10px] font-black uppercase opacity-80 tracking-tighter mt-0.5 sm:mt-1">Ref: {item.price.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-3 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-2 sm:mb-4 gap-1 sm:gap-4">
          <h4 className={`font-headline text-[10px] sm:text-2xl font-bold tracking-tight uppercase leading-tight ${isSelected && isAvailable ? 'text-primary' : 'text-foreground'}`}>
            {item.name}
          </h4>
          <div className="sm:text-right shrink-0">
            <p className="text-[10px] sm:text-2xl font-black text-foreground/90 tracking-tighter leading-none">
              Bs. {priceBs.toLocaleString('es-VE', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        {item.description && (
          <div className="mb-2 sm:mb-5 p-1.5 sm:p-4 bg-muted/40 rounded-lg sm:rounded-2xl border border-border/50 flex gap-1 sm:gap-3 shadow-inner">
            <Info className={`h-2.5 w-2.5 sm:h-5 sm:w-5 shrink-0 mt-0.5 ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`} />
            <p className={`text-[8px] sm:text-sm font-bold leading-tight sm:leading-relaxed ${isAvailable ? 'text-foreground' : 'text-muted-foreground'}`}>
              {item.description}
            </p>
          </div>
        )}

        <div className="min-h-[30px] sm:min-h-[60px] flex items-center">
          {loading ? (
            <div className="space-y-1 sm:space-y-3 w-full">
              <Skeleton className="h-2 sm:h-4 w-full" />
              <Skeleton className="h-2 sm:h-4 w-4/5" />
            </div>
          ) : (
            <p className={`text-[8px] sm:text-base font-medium leading-tight sm:leading-relaxed italic ${isAvailable ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
              &ldquo;{aiDescription}&rdquo;
            </p>
          )}
        </div>

        <div className="mt-2 sm:mt-5 pt-2 sm:pt-5 border-t border-border/40 flex items-center justify-between">
          <div className={`flex items-center text-[7px] sm:text-xs font-bold uppercase tracking-widest ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className="relative w-4 h-4 mr-1 sm:mr-2">
              <Image 
                src={flameLogoUrl} 
                alt="Estación 18 Fuego" 
                fill
                unoptimized
                className={`object-contain ${!isAvailable ? 'grayscale opacity-50' : ''}`}
              />
            </div>
            <span className="hidden xs:inline">Estación 18</span>
          </div>
          {isSelected && (
            <Badge variant="outline" className="text-[6px] sm:text-[10px] font-black uppercase tracking-widest border-primary/40 text-primary bg-primary/5 px-1.5 sm:px-3">
              LISTO
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
