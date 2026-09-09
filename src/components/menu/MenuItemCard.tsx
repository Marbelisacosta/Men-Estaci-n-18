
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
      className={`group relative overflow-hidden transition-all duration-500 cursor-pointer border-2 shadow-2xl rounded-[2.5rem] bg-card ${!isAvailable ? 'opacity-60 grayscale-[0.5] border-border/40' : isSelected ? 'border-primary ring-4 ring-primary/20 scale-[1.02] bg-primary/[0.02]' : 'border-border/60 hover:border-primary/40'}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image 
          src={placeholder?.imageUrl || 'https://picsum.photos/seed/food/600/400'}
          alt={item.name}
          fill
          className={`object-cover transition-transform duration-500 ${isAvailable ? 'group-hover:scale-110' : 'grayscale'} ${isSelected && isAvailable ? 'scale-105 brightness-75' : ''}`}
          data-ai-hint={placeholder?.imageHint || 'food'}
        />
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          {isSelected && isAvailable && (
            <div className="bg-primary/95 text-white p-6 rounded-full shadow-2xl animate-in zoom-in-50 duration-300 ring-4 ring-white/20">
              <CheckCircle2 className="h-16 w-16" />
            </div>
          )}
          {!isAvailable && (
            <div className="bg-black/70 text-white px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/20 backdrop-blur-md">
              <Ban className="h-6 w-6 text-red-500" />
              <span className="font-headline font-bold text-sm uppercase tracking-widest">Agotado</span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

        {isAvailable && (
          <div className="absolute top-4 right-4 z-20">
            {isSelected ? (
              <div className="bg-primary text-white p-2.5 rounded-xl shadow-xl animate-in zoom-in-50">
                <CheckCircle2 className="h-6 w-6" />
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-md text-white/80 p-2.5 rounded-xl border border-white/20 group-hover:bg-white/20 transition-colors">
                <Square className="h-6 w-6" />
              </div>
            )}
          </div>
        )}

        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {isCombo && isAvailable && (
            <Badge className="bg-primary text-white font-headline border-none shadow-xl px-4 py-1.5 text-xs animate-pulse-subtle uppercase tracking-tight font-bold">
              Combo Ahorro
            </Badge>
          )}
          {item.isSpecial && isAvailable && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-headline shadow-lg text-xs uppercase font-bold py-1 px-3">
              <Sparkles className="h-4 w-4 mr-1.5" /> Especial
            </Badge>
          )}
        </div>
        
        <div className="absolute bottom-4 right-4 z-20">
          <div className={`px-5 py-2.5 rounded-2xl font-headline shadow-2xl border border-white/10 transition-all flex flex-col items-end ${!isAvailable ? 'bg-muted text-muted-foreground' : isSelected ? 'bg-secondary text-white scale-110' : 'bg-primary text-white'}`}>
            <span className="text-2xl font-bold leading-none">${item.price.toFixed(2)}</span>
            <span className="text-[10px] font-black uppercase opacity-80 tracking-tighter mt-1">Ref: {item.price.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h4 className={`font-headline text-2xl font-bold tracking-tight uppercase leading-none ${isSelected && isAvailable ? 'text-primary' : 'text-foreground'}`}>
            {item.name}
          </h4>
          <div className="text-right shrink-0">
            <p className="text-2xl font-black text-foreground/90 tracking-tighter leading-none">
              Bs. {priceBs.toLocaleString('es-VE', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        {item.description && (
          <div className="mb-5 p-4 bg-muted/40 rounded-2xl border border-border/50 flex gap-3 shadow-inner">
            <Info className={`h-5 w-5 shrink-0 mt-0.5 ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`} />
            <p className={`text-sm font-bold leading-relaxed ${isAvailable ? 'text-foreground' : 'text-muted-foreground'}`}>
              {item.description}
            </p>
          </div>
        )}

        <div className="min-h-[60px] flex items-center">
          {loading ? (
            <div className="space-y-3 w-full">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          ) : (
            <p className={`text-base font-medium leading-relaxed italic ${isAvailable ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
              &ldquo;{aiDescription}&rdquo;
            </p>
          )}
        </div>

        <div className="mt-5 pt-5 border-t border-border/40 flex items-center justify-between">
          <div className={`flex items-center text-xs font-bold uppercase tracking-widest ${isAvailable ? 'text-primary' : 'text-muted-foreground'}`}>
            <Image 
              src={flameLogoUrl} 
              alt="Estación 18 Fuego" 
              width={16} 
              height={16} 
              className={`mr-2 object-contain ${!isAvailable ? 'grayscale opacity-50' : ''}`}
            />
            Estación 18
          </div>
          {isSelected && (
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest border-primary/40 text-primary bg-primary/5 px-3">
              En lista de pedido
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
