
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { generateFlavorDescription } from '@/ai/flows/generate-flavor-description';
import { MenuItem, BRAND_MOTTO } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles, Utensils } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const placeholder = PlaceHolderImages.find(img => img.id === item.image);

  useEffect(() => {
    async function fetchDescription() {
      try {
        const result = await generateFlavorDescription({
          itemName: item.name,
          motto: BRAND_MOTTO
        });
        setDescription(result.description);
      } catch (error) {
        setDescription("¡Delicioso sabor al estilo Estación 18!");
      } finally {
        setLoading(false);
      }
    }
    fetchDescription();
  }, [item.name]);

  const isCombo = item.category === 'combo';

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-border/40 ${isCombo ? 'border-primary/30 ring-1 ring-primary/10' : ''}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={placeholder?.imageUrl || 'https://picsum.photos/seed/food/600/400'}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={placeholder?.imageHint || 'food'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isCombo && (
            <Badge className="bg-primary text-white font-headline border-none shadow-lg animate-pulse-subtle">
              OFERTA ESPECIAL
            </Badge>
          )}
          {item.isSpecial && (
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-headline shadow-md">
              <Sparkles className="h-3 w-3 mr-1" /> COMBOS
            </Badge>
          )}
        </div>
        
        <div className="absolute bottom-3 right-3">
          <div className="bg-primary text-white px-4 py-1 rounded-full font-headline text-lg shadow-xl border border-white/10">
            ${item.price.toFixed(2)}
          </div>
        </div>
      </div>

      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          {item.pieces && (
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest bg-muted px-2 py-0.5 rounded">
              {item.pieces} Piezas
            </span>
          )}
        </div>
        
        <div className="min-h-[60px]">
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
            </div>
          ) : (
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 italic">
              &ldquo;{description}&rdquo;
            </p>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
          <div className="flex items-center text-[10px] text-primary font-bold uppercase tracking-tighter">
            <Utensils className="h-3 w-3 mr-1" /> Estación 18
          </div>
          <button className="text-xs font-bold text-secondary uppercase hover:underline transition-all">
            Ver más detalles
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
