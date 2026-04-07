
"use client";

import { useState } from 'react';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { BCVRate } from '@/components/menu/BCVRate';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { menuItems, BRAND_MOTTO } from '@/lib/menu-data';
import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl rotate-3 shadow-lg group hover:rotate-0 transition-transform cursor-pointer">
              <span className="font-headline font-bold text-2xl text-white">18</span>
            </div>
            <div className="flex flex-col">
              <h1 className="font-headline text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight">
                ESTACION <span className="text-primary">18</span>
              </h1>
              <p className="text-[10px] md:text-xs font-medium text-secondary uppercase tracking-[0.2em]">
                Fast Food
              </p>
            </div>
          </div>

          <div className="hidden sm:block">
             <BCVRate />
          </div>

          <div className="flex items-center gap-4">
             <button className="bg-secondary text-secondary-foreground font-headline text-sm font-bold px-5 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg border border-secondary/20">
               PEDIR AHORA
             </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero / Promo Section */}
        <section className="relative rounded-[2.5rem] bg-card overflow-hidden mb-16 shadow-2xl border border-border/40">
          <div className="absolute inset-0 bg-texture opacity-20" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                Nueva Tasa de Cambio Integrada
              </div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
                {BRAND_MOTTO}
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                Disfruta de los mejores pasteles y tequeños de la zona. 
                Precios claros, sabor inigualable y atención de primera.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex flex-col items-center md:items-start p-4 rounded-2xl bg-background/50 border border-border/40 backdrop-blur-sm min-w-[140px]">
                  <span className="text-secondary font-headline text-2xl font-bold">$0.70</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Pasteles/Tequeños</span>
                </div>
                <div className="flex flex-col items-center md:items-start p-4 rounded-2xl bg-background/50 border border-border/40 backdrop-blur-sm min-w-[140px]">
                  <span className="text-primary font-headline text-2xl font-bold">$2.50</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Combos + Refresco</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-sm hidden md:block">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <img 
                  src="https://picsum.photos/seed/promo/600/600" 
                  alt="Special Offer" 
                  className="relative rounded-3xl shadow-2xl border-4 border-card group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic BCV for Mobile */}
        <div className="sm:hidden mb-8 flex justify-center">
          <BCVRate />
        </div>

        {/* Menu Section */}
        <section id="menu">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3">Nuestro Menú</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
          </div>

          <CategoryTabs onCategoryChange={setSelectedCategory} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-card rounded-3xl border border-dashed border-border">
              <p className="text-muted-foreground">No hay items en esta categoría por el momento.</p>
            </div>
          )}
        </section>

        {/* Info Grid */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-3xl border border-border/40 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-6">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Ubicación</h4>
            <p className="text-muted-foreground text-sm">Av. Principal de Estación 18,<br />Local #15, Fast Food Hub.</p>
          </div>
          <div className="bg-card p-8 rounded-3xl border border-border/40 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-6">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Horario</h4>
            <p className="text-muted-foreground text-sm">Lunes a Sábado<br />7:00 AM - 9:00 PM</p>
          </div>
          <div className="bg-card p-8 rounded-3xl border border-border/40 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-6">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Contacto</h4>
            <p className="text-muted-foreground text-sm">+58 (412) 123-4567<br />estacion18@info.com</p>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border/40 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg">
                <span className="font-headline font-bold text-lg text-white">18</span>
              </div>
              <span className="font-headline text-lg font-bold">Estacion 18</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground">© 2024 Estacion 18 Fast Food. Todos los derechos reservados.</p>
              <p className="text-[10px] text-muted-foreground/60 mt-1 uppercase tracking-widest">El punto exacto del sabor</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
