
"use client";

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Utensils, Zap, Package } from 'lucide-react';

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="w-full flex justify-center mb-10 overflow-x-auto pb-2">
      <Tabs defaultValue="all" className="w-auto" onValueChange={onCategoryChange}>
        <TabsList className="bg-card border border-border/40 p-1 h-14 rounded-2xl shadow-xl">
          <TabsTrigger 
            value="all" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline"
          >
            <Utensils className="h-4 w-4 mr-2" />
            Todos
          </TabsTrigger>
          <TabsTrigger 
            value="individual" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline"
          >
            <Zap className="h-4 w-4 mr-2" />
            Pasteles/Tequeños
          </TabsTrigger>
          <TabsTrigger 
            value="combo" 
            className="rounded-xl px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline"
          >
            <Package className="h-4 w-4 mr-2" />
            Combos
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
