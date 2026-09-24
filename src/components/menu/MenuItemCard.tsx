"use client";

import { useState } from 'react';
import { MenuItem, BRAND_MOTTO } from '@/lib/menu-data';
import { generateFlavorDescription } from '@/ai/flows/generate-flavor-description';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Info, Ban, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface MenuItemCardProps {
  item: MenuItem;
  isSelected?: boolean;
  onSelect?: () => void;
  exchangeRate: number;
}

export function MenuItemCard({ item, isSelected, onSelect, exchangeRate }: MenuItemCardProps) {
  const [aiDescription, setAiDescription] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [hasLoadedAi, setHasLoadedAi] = useState(false);

  const placeholder = PlaceHolderImages.find(img => img.id === item.image);
  const priceBs = item.price * exchangeRate;
  const isAvailable = item.isAvailable !== false;

  async function fetchDescription(e: React.MouseEvent) {
    e.stopPropagation();
    if (hasLoadedAi || loading || !isAvailable) return;
    
    setLoading(true);
    try {
      const result = await generateFlavorDescription({
        itemName: item.name,
        motto: BRAND_MOTTO
      });
      setAiDescription(result.description);
      setHasLoadedAi(true);
    } catch (error) {
      setAiDescription("¡SABOR INIGUALABLE AL ESTILO ESTACIÓN 18!");
      setHasLoadedAi(true);
    } finally {
      setLoading(false);
    }
  }

  const isCombo = item.category === 'combo';

  const handleCardClick = () => {
    if (onSelect && isAvailable) {
      onSelect();
    }
  };

  return (
    <Card 
      onClick={handleCardClick}
      className={`group relative overflow-hidden transition-all duration-500 cursor-pointer border shadow-lg rounded-[1.2rem] bg-card ${isSelected ? 'border-primary ring-2 ring-primary/20 scale-[1.01] bg-primary/[0.02]' : 'border-border/60 hover:border-primary/40'} ${!isAvailable ? 'cursor-not-allowed opacity-80' : ''}`}
    >
      <div className="relative aspect-square sm:aspect-[16/10] overflow-hidden bg-muted">
        <Image 
          src={placeholder?.imageUrl || 'https://picsum.photos/seed/food/600/400'}
          alt={item.name}
          fill
          unoptimized
          data-ai-hint={placeholder?.imageHint || "food item"}
          priority={item.isSpecial}
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isSelected ? 'brightness-90' : ''} ${!isAvailable ? 'grayscale opacity-50' : ''}`}
        />
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          {isSelected && (
            <div className="bg-primary/95 text-white p-2 sm:p-4 rounded-full shadow-2xl animate-in zoom-in-50 duration-300 ring-2 ring-white/20">
              <CheckCircle2 className="h-6 w-6 sm:h-10 sm:w-10" />
            </div>
          )}
          {!isAvailable && (
            <div className="bg-black/70 text-white px-2 py-1.5 rounded-lg flex flex-col items-center gap-1 border border-white/20 backdrop-blur-md">
              <Ban className="h-3 w-3 sm:h-5 sm:w-5 text-destructive" />
              <span className="font-headline font-bold text-[6px] sm:text-[9px] uppercase tracking-widest text-center">NO DISPONIBLE POR EL MOMENTO</span>
            </div>
          )}
        </div>

        <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
          {isCombo && (
            <Badge className="bg-primary text-white font-headline border-none shadow-xl px-1.5 py-0.5 text-[6px] sm:text-[9px] animate-pulse-subtle uppercase tracking-tight font-bold">
              COMBO
            </Badge>
          )}
        </div>
        
        <div className="absolute bottom-2 right-2 z-20">
          <div className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg font-headline shadow-2xl border border-white/10 transition-all flex flex-col items-center justify-center ${isSelected ? 'bg-secondary text-white' : 'bg-primary text-white'} ${!isAvailable ? 'bg-muted text-muted-foreground border-none grayscale' : ''}`}>
            <span className="text-[10px] sm:text-lg font-bold leading-none uppercase tracking-tighter">REF: {item.price.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <CardContent className={`p-3 sm:p-4 ${!isAvailable ? 'text-muted-foreground' : ''}`}>
        <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
          <h4 className={`font-headline text-[10px] sm:text-base font-bold tracking-tight uppercase leading-tight ${isSelected ? 'text-primary' : isAvailable ? 'text-foreground' : 'text-muted-foreground'}`}>
            {item.name}
          </h4>
          <div className="sm:text-right shrink-0">
            <p className="text-[8px] sm:text-sm font-black tracking-tighter">
              BS. {priceBs.toLocaleString('es-VE', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        <div className="mb-2 p-1.5 bg-muted/30 rounded-lg border border-border/40 flex gap-1.5">
          <Info className={`h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 mt-0.5 ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`} />
          <p className="text-[8px] sm:text-[11px] font-bold leading-tight">
            {item.description || 'SABOR INIGUALABLE'}
          </p>
        </div>

        <div className="min-h-[30px] flex flex-col justify-center items-start gap-1 border-t border-border/20 pt-2">
          {loading ? (
            <div className="space-y-1 w-full">
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-4/5" />
            </div>
          ) : hasLoadedAi ? (
            <p className="text-[8px] sm:text-[12px] font-medium leading-tight italic text-muted-foreground">
              &ldquo;{aiDescription}&rdquo;
            </p>
          ) : isAvailable && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={fetchDescription}
              className="h-6 text-[8px] sm:text-[10px] font-bold text-primary hover:bg-primary/5 p-0 sm:px-2 gap-1"
            >
              <Sparkles className="h-2.5 w-2.5" /> ¿QUÉ LO HACE ÚNICO?
            </Button>
          )}
          {!isAvailable && (
            <span className="text-[7px] sm:text-[10px] font-bold text-muted-foreground/60 uppercase">PROXIMAMENTE...</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
