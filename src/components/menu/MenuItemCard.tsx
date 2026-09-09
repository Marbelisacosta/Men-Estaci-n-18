
"use client";

import { useState, useEffect } from 'react';
import { MenuItem, EXCHANGE_RATE, BRAND_MOTTO } from '@/lib/menu-data';
import { generateFlavorDescription } from '@/ai/flows/generate-flavor-description';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { CheckCircle2, Square, Info, Ban } from 'lucide-react';
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
      className={`group relative overflow-hidden transition-all duration-500 cursor-pointer border shadow-xl rounded-[1.2rem] sm:rounded-[2rem] bg-card ${!isAvailable ? 'opacity-60 grayscale-[0.5] border-border/40' : isSelected ? 'border-primary ring-2 sm:ring-4 ring-primary/20 scale-[1.02] bg-primary/[0.02]' : 'border-border/60 hover:border-primary/40'}`}
    >
      <div className="relative aspect-square sm:aspect-[16/10] overflow-hidden bg-muted">
        <Image 
          src={placeholder?.imageUrl || 'https://picsum.photos/seed/food/600/400'}
          alt={item.name}
          fill
          priority={item.isSpecial}
          className={`object-cover transition-transform duration-500 ${isAvailable ? 'group-hover:scale-110' : 'grayscale'} ${isSelected && isAvailable ? 'scale-105 brightness-75' : ''}`}
          data-ai-hint={placeholder?.imageHint || 'food'}
        />
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          {isSelected && isAvailable && (
            <div className="bg-primary/95 text-white p-2 sm:p-5 rounded-full shadow-2xl animate-in zoom-in-50 duration-300 ring-2 ring-white/20">
              <CheckCircle2 className="h-6 w-6 sm:h-12 sm:w-12" />
            </div>
          )}
          {!isAvailable && (
            <div className="bg-black/70 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl flex items-center gap-1 sm:gap-2 border border-white/20 backdrop-blur-md">
              <Ban className="h-3 w-3 sm:h-5 sm:w-5 text-red-500" />
              <span className="font-headline font-bold text-[7px] sm:text-xs uppercase tracking-widest">Agotado</span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

        {isAvailable && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-20">
            {isSelected ? (
              <div className="bg-primary text-white p-1 sm:p-2 rounded-lg shadow-xl animate-in zoom-in-50">
                <CheckCircle2 className="h-3 w-3 sm:h-5 sm:w-5" />
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-md text-white/80 p-1 sm:p-2 rounded-lg border border-white/20 group-hover:bg-white/20 transition-colors">
                <Square className="h-3 w-3 sm:h-5 sm:w-5" />
              </div>
            )}
          </div>
        )}

        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-20">
          {isCombo && isAvailable && (
            <Badge className="bg-primary text-white font-headline border-none shadow-xl px-1.5 py-0.5 sm:px-3 sm:py-1 text-[6px] sm:text-[10px] animate-pulse-subtle uppercase tracking-tight font-bold">
              Combo
            </Badge>
          )}
        </div>
        
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-20">
          <div className={`px-1.5 py-0.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl font-headline shadow-2xl border border-white/10 transition-all flex flex-col items-end ${!isAvailable ? 'bg-muted text-muted-foreground' : isSelected ? 'bg-secondary text-white scale-105' : 'bg-primary text-white'}`}>
            <span className="text-[10px] sm:text-xl font-bold leading-none">${item.price.toFixed(2)}</span>
            <span className="text-[5px] sm:text-[8px] font-black uppercase opacity-80 tracking-tighter mt-0.5">Ref: {item.price.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-3 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-2 sm:mb-3 gap-1 sm:gap-2">
          <h4 className={`font-headline text-[10px] sm:text-lg font-bold tracking-tight uppercase leading-tight ${isSelected && isAvailable ? 'text-primary' : 'text-foreground'}`}>
            {item.name}
          </h4>
          <div className="sm:text-right shrink-0">
            <p className="text-[9px] sm:text-lg font-black text-foreground/90 tracking-tighter leading-none">
              Bs. {priceBs.toLocaleString('es-VE', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        {item.description && (
          <div className="mb-2 sm:mb-4 p-1.5 sm:p-3 bg-muted/40 rounded-lg sm:rounded-xl border border-border/50 flex gap-1.5 sm:gap-2 shadow-inner">
            <Info className={`h-2.5 w-2.5 sm:h-4 sm:w-4 shrink-0 mt-0.5 ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`} />
            <p className={`text-[8px] sm:text-xs font-bold leading-tight ${isAvailable ? 'text-foreground' : 'text-muted-foreground'}`}>
              {item.description}
            </p>
          </div>
        )}

        <div className="min-h-[40px] sm:min-h-[70px] flex flex-col justify-center items-start gap-1 sm:gap-2 border-t border-border/20 pt-2 sm:pt-3">
          {!loading && (
            <div className="relative w-3 h-3 sm:w-4 sm:h-4">
              <Image 
                src={flameLogoUrl} 
                alt="Llama Estación 18" 
                fill
                className={`object-contain ${!isAvailable ? 'grayscale opacity-50' : ''}`}
              />
            </div>
          )}
          
          {loading ? (
            <div className="space-y-1.5 w-full">
              <Skeleton className="h-1.5 sm:h-3 w-full" />
              <Skeleton className="h-1.5 sm:h-3 w-4/5" />
            </div>
          ) : (
            <p className={`text-[8px] sm:text-sm font-medium leading-tight italic ${isAvailable ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
              &ldquo;{aiDescription}&rdquo;
            </p>
          )}
        </div>

        <div className="mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-border/40 flex items-center justify-between">
          <div className={`flex items-center text-[7px] sm:text-[10px] font-bold uppercase tracking-widest ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className="relative w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2">
              <Image 
                src={flameLogoUrl} 
                alt="Estación 18 Fuego" 
                fill
                className={`object-contain ${!isAvailable ? 'grayscale opacity-50' : ''}`}
              />
            </div>
            <span>Estación 18</span>
          </div>
          {isSelected && (
            <Badge variant="outline" className="text-[6px] sm:text-[9px] font-black uppercase tracking-widest border-primary/40 text-primary bg-primary/5 px-1 sm:px-2">
              LISTO
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
