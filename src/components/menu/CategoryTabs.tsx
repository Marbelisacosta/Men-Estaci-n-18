
"use client";

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Utensils, Zap, Package, Flame, CupSoda as Cup } from 'lucide-react';

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="w-full flex justify-center mb-10 px-4">
      <Tabs defaultValue="all" className="w-auto" onValueChange={onCategoryChange}>
        <TabsList className="bg-card border border-border/40 p-1 h-14 rounded-2xl shadow-xl flex flex-nowrap overflow-hidden">
          <TabsTrigger 
            value="all" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap"
          >
            <Utensils className="h-4 w-4 mr-2" />
            Todos
          </TabsTrigger>
          <TabsTrigger 
            value="individual" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap"
          >
            <Zap className="h-4 w-4 mr-2" />
            Pasteles
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
