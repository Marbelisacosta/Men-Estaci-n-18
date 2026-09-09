
"use client";

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Package, Flame, CupSoda as Cup } from 'lucide-react';
import Image from 'next/image';

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ onCategoryChange }: CategoryTabsProps) {
  const flameLogoUrl = "https://i.postimg.cc/QMSDJgPw/Post-Estacion-18-(1).png";

  return (
    <div className="w-full flex justify-center mb-10 px-4">
      <Tabs defaultValue="all" className="w-auto" onValueChange={onCategoryChange}>
        <TabsList className="bg-card border border-border/40 p-1 h-14 rounded-2xl shadow-xl flex flex-nowrap overflow-hidden">
          <TabsTrigger 
            value="all" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap"
          >
            <div className="relative w-4 h-4 mr-2">
              <Image 
                src={flameLogoUrl} 
                alt="Todos" 
                fill
                className="object-contain brightness-0 invert data-[state=active]:filter-none"
                style={{ filter: 'var(--tw-brightness) var(--tw-invert)' }}
              />
            </div>
            Todos
          </TabsTrigger>
          <TabsTrigger 
            value="individual" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap"
          >
            <Zap className="h-4 w-4 mr-2" />
            Pastelitos
          </TabsTrigger>
          <TabsTrigger 
            value="fast-food" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap"
          >
            <Flame className="h-4 w-4 mr-2" />
            Comida Rápida
          </TabsTrigger>
          <TabsTrigger 
            value="combo" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap"
          >
            <Package className="h-4 w-4 mr-2" />
            Combos
          </TabsTrigger>
          <TabsTrigger 
            value="drinks" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap"
          >
            <Cup className="h-4 w-4 mr-2" />
            Bebidas
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
