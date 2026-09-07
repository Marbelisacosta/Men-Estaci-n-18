
"use client";

import { useState, useEffect } from 'react';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { BCVRate } from '@/components/menu/BCVRate';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { OrderForm } from '@/components/menu/OrderForm';
import { menuItems, MenuItem } from '@/lib/menu-data';
import { MapPin, Clock, Phone, Instagram, Mail, ClipboardCheck, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const toggleItemSelection = (item: MenuItem) => {
    setSelectedItems(prev => {
      const isSelected = prev.find(i => i.id === item.id);
      if (isSelected) {
        return prev.filter(i => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const clearSelection = () => setSelectedItems([]);

  const phoneNumberDisplay = "0414-3683914";
  const phoneNumberLink = "584143683914";
  const emailAddress = "Estacion18fastfood@gmail.com";
  const locationAddress = "Av 49.E Calle 170 24 de Julio";
  const instagramUrl = "https://www.instagram.com/estacion18fastfood?igsh=NTkwamhkbTA0dHc5";
  const tiktokUrl = "https://www.tiktok.com/@estacion.18?_r=1&_t=ZS-99XLY1FJDRV";

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

          <div className="block">
             <BCVRate />
          </div>

          <div className="flex items-center gap-4">
             <a 
              href="#order-section"
              className="bg-secondary text-secondary-foreground font-headline text-sm font-bold px-5 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg border border-secondary/20"
             >
               VER PEDIDO ({selectedItems.length})
             </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero / Promo Section */}
        <section className="relative rounded-[2.5rem] bg-card overflow-hidden mb-16 shadow-2xl border border-border/40">
          <div className="absolute inset-0 bg-texture opacity-20" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 p-8 md:p-16 flex flex-row items-center gap-10">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                El punto exacto del sabor
              </div>
              <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">
                El punto<br />exacto del<br />sabor
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                Disfruta de la mejor comida rápida de la zona. Precios claros, sabor inigualable y atención de primera.
              </p>
              
              {selectedItems.length > 0 && (
                <div className="mt-4 p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-between animate-in fade-in slide-in-from-bottom-2">
                  <div className="flex items-center gap-2">
                    <ClipboardCheck className="text-primary h-5 w-5" />
                    <span className="text-sm font-bold text-foreground">{selectedItems.length} ítems marcados</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={clearSelection} className="text-xs text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4 mr-1" /> Limpiar
                  </Button>
                </div>
              )}
            </div>
            
            <div className="flex-1 w-full max-w-sm block">
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

        {/* Menu Section */}
        <section id="menu" className="mb-24">
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3">Nuestro Menú</h2>
            <p className="text-muted-foreground text-sm mb-4">Toca un producto para marcarlo en tu lista</p>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
          </div>

          <CategoryTabs onCategoryChange={setSelectedCategory} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <MenuItemCard 
                key={item.id} 
                item={item} 
                isSelected={selectedItems.some(i => i.id === item.id)}
                onSelect={() => toggleItemSelection(item)}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-card rounded-3xl border border-dashed border-border">
              <p className="text-muted-foreground">No hay items en esta categoría por el momento.</p>
            </div>
          )}
        </section>

        {/* Order Section */}
        <section id="order-section" className="py-16 bg-primary/5 rounded-[3rem] border border-primary/10 mb-24 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-3">Tu Pedido</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                {selectedItems.length > 0 
                  ? "Hemos organizado tus selecciones abajo. Solo completa tus datos." 
                  : "Selecciona productos arriba para verlos aquí automáticamente."}
              </p>
            </div>
            <OrderForm selectedItems={selectedItems} />
          </div>
        </section>

        {/* Info Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-3xl border border-border/40 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-6">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Ubicación</h4>
            <p className="text-muted-foreground text-sm">{locationAddress}</p>
          </div>
          <div className="bg-card p-8 rounded-3xl border border-border/40 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-6">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Horario</h4>
            <div className="text-muted-foreground text-sm flex flex-col gap-3 w-full">
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <span className="font-bold text-foreground">Jueves</span>
                <span className="text-primary font-bold">6:00pm - 11:00pm</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <span className="font-bold text-foreground">Viernes</span>
                <span className="text-primary font-bold">6:00pm - 12:00pm</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <span className="font-bold text-foreground">Sábado</span>
                <span className="text-primary font-bold">6:00pm - 12:00pm</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-foreground">Domingo</span>
                <span className="text-primary font-bold">6:00pm - 11:00pm</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-3xl border border-border/40 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-4 rounded-full mb-6">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-headline text-xl font-bold mb-3">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:+${phoneNumberLink}`} className="text-foreground font-bold hover:text-primary transition-colors text-lg">
                {phoneNumberDisplay}
              </a>
              <a href={`mailto:${emailAddress}`} className="text-muted-foreground text-xs font-medium hover:text-primary transition-colors break-all">
                {emailAddress}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border/40 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg">
                <span className="font-headline font-bold text-lg text-white">18</span>
              </div>
              <span className="font-headline text-lg font-bold">Estacion 18</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Síguenos en redes</span>
              <div className="flex gap-6">
                <a href={`mailto:${emailAddress}`} className="text-muted-foreground hover:text-primary transition-colors p-2 bg-muted/30 rounded-full" title="Email"><Mail className="h-5 w-5" /></a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-muted/30 rounded-full" title="Instagram"><Instagram className="h-5 w-5" /></a>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 bg-muted/30 rounded-full" title="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.66.41-1.03 1.14-1.1 1.92-.02.57.04 1.14.3 1.64.44.88 1.44 1.39 2.39 1.26.95-.1 1.81-.8 2.05-1.7.07-.34.1-.69.09-1.04l.01-11.97Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-muted-foreground">© 2024 Estacion 18 Fast Food.</p>
              <p className="text-[10px] text-muted-foreground/60 mt-1 uppercase tracking-widest">El punto exacto del sabor</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
