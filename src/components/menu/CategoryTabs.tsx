"use client";

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Zap, Package, Flame, CupSoda as Cup, Utensils, Layers, Users, UsersRound } from 'lucide-react';
import Image from 'next/image';

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ onCategoryChange }: CategoryTabsProps) {
  const flameLogoUrl = "https://i.postimg.cc/QMSDJgPw/Post-Estacion-18-(1).png";

  return (
    <div className="w-full flex justify-center mb-6 sm:mb-10 px-2 overflow-hidden">
      <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={onCategoryChange}>
        <TabsList className="bg-card border border-border/40 p-1 h-12 sm:h-14 rounded-xl sm:rounded-2xl shadow-xl flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth">
          <TabsTrigger 
            value="all" 
            className="rounded-lg sm:rounded-xl px-4 sm:px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap group text-xs sm:text-sm uppercase font-bold"
          >
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 mr-2">
              <Image 
                src={flameLogoUrl} 
                alt="TODOS" 
                fill
                unoptimized
                className="object-contain filter grayscale invert group-data-[state=active]:filter-none group-data-[state=active]:brightness-0 group-data-[state=active]:invert"
              />
            </div>
            TODOS
          </TabsTrigger>

          <TabsTrigger 
            value="hamburguesas" 
            className="rounded-lg sm:rounded-xl px-4 sm:px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap text-xs sm:text-sm uppercase font-bold"
          >
            <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
            HAMBURGUESAS
          </TabsTrigger>

          <TabsTrigger 
            value="perros-panes" 
            className="rounded-lg sm:rounded-xl px-4 sm:px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap text-xs sm:text-sm uppercase font-bold"
          >
            <Utensils className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
            PERROS & PANES
          </TabsTrigger>

          <TabsTrigger 
            value="arepas-patacones" 
            className="rounded-lg sm:rounded-xl px-4 sm:px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap text-xs sm:text-sm uppercase font-bold"
          >
            <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
            AREPAS & PATACONES
          </TabsTrigger>

          <TabsTrigger 
            value="papas-fritas" 
            className="rounded-lg sm:rounded-xl px-4 sm:px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap text-xs sm:text-sm uppercase font-bold"
          >
            <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
            PAPAS FRITAS
          </TabsTrigger>

          <TabsTrigger 
            value="bebidas" 
            className="rounded-lg sm:rounded-xl px-4 sm:px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap text-xs sm:text-sm uppercase font-bold"
          >
            <Cup className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
            BEBIDAS
          </TabsTrigger>

          <TabsTrigger 
            value="combos" 
            className="rounded-lg sm:rounded-xl px-4 sm:px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap text-xs sm:text-sm uppercase font-bold"
          >
            <Package className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
            TODOS LOS COMBOS
          </TabsTrigger>

          <TabsTrigger 
            value="combos-personales" 
            className="rounded-lg sm:rounded-xl px-4 sm:px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap text-xs sm:text-sm uppercase font-bold"
          >
            <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
            COMBOS PERSONALES Y PAREJA
          </TabsTrigger>

          <TabsTrigger 
            value="combos-familiares" 
            className="rounded-lg sm:rounded-xl px-4 sm:px-6 h-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-headline whitespace-nowrap text-xs sm:text-sm uppercase font-bold"
          >
            <UsersRound className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
            COMBOS FAMILIARES Y GRUPALES
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
