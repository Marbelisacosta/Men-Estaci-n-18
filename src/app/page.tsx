
"use client";

import { useState } from 'react';
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

  function toggleItemSelection(item: MenuItem) {
    if (!item.isAvailable) return;
    
    setSelectedItems(prev => {
      const isAlreadySelected = prev.some(i => i.id === item.id);
      if (isAlreadySelected) {
        return prev.filter(i => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  }

  function clearSelection() {
    setSelectedItems([]);
  }

  const phoneNumberDisplay = "0414-3683914";
  const phoneNumberLink = "584143683914";
  const emailAddress = "Estacion18fastfood@gmail.com";
  const locationAddress = "Av 49.E Calle 170 24 de Julio";
  const instagramUrl = "https://www.instagram.com/estacion18fastfood?igsh=NTkwamhkbTA0dHc5";
  const tiktokUrl = "https://www.tiktok.com/@estacion.18?_r=1&_t=ZS-99XLY1FJDRV";
  const logoUrl = "https://i.postimg.cc/MTJLBCPC/ORIGINAL-COLOR-(2).png";

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Header - Responsive layout */}
      <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between gap-4">
          <div className="flex items-center shrink-0">
            <img 
              src={logoUrl} 
              alt="Estación 18 Logo" 
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-2 sm:gap-6">
             <div className="hidden xs:block">
               <BCVRate />
             </div>
             <a 
               href="#order-section" 
               className="bg-primary text-white px-4 sm:px-8 py-2 sm:py-3.5 text-[10px] sm:text-sm font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl border-2 border-white/20 uppercase tracking-tight"
             >
               PEDIDO ({selectedItems.length})
             </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Hero / Promo Section - Responsive layout */}
        <section className="relative rounded-[2rem] sm:rounded-[3.5rem] bg-card overflow-hidden mb-12 sm:mb-20 shadow-2xl border-2 border-border/60">
          <div className="absolute inset-0 bg-texture opacity-30" />
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 p-8 sm:p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 rounded-full bg-primary/10 border-2 border-primary/30 text-primary font-black text-[10px] sm:text-sm uppercase tracking-[0.2em] mb-6 sm:mb-8">
                <span className="flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-primary animate-pulse" />
                El punto exacto del sabor
              </div>
              
              <h2 className="font-headline text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-[0.85] tracking-tighter uppercase">
                El punto <br/> 
                <span className="text-primary italic">exacto</span> <br/> 
                del sabor
              </h2>
              
              <p className="text-base sm:text-xl text-muted-foreground font-medium max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
                Disfruta de la mejor comida rápida de la zona. Precios claros, sabor inigualable y atención de primera.
              </p>
              
              {selectedItems.length > 0 && (
                <div className="p-6 sm:p-8 bg-background/50 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] border-2 border-primary/20 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 animate-in slide-in-from-left-10 duration-500">
                  <div className="flex items-center gap-3">
                    <ClipboardCheck className="text-primary h-6 w-6 sm:h-7 sm:w-7" />
                    <span className="text-sm sm:text-lg font-bold text-foreground">{selectedItems.length} ítems marcados</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={clearSelection} className="text-[10px] sm:text-sm font-bold text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl px-4 sm:px-6">
                    <Trash2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2" /> Limpiar
                  </Button>
                </div>
              )}
            </div>
            
            <div className="flex-1 w-full max-w-[300px] sm:max-w-md">
              <div className="relative group">
                <div className="absolute -inset-4 sm:-inset-6 bg-primary/30 rounded-full blur-2xl sm:blur-3xl opacity-60 animate-pulse-subtle" />
                <img 
                  src="https://picsum.photos/seed/promo/600/600" 
                  alt="Special Offer" 
                  className="relative rounded-[2rem] sm:rounded-[3rem] shadow-2xl border-4 sm:border-8 border-card group-hover:scale-105 transition-transform duration-700 w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section - Responsive grid */}
        <section id="menu" className="mb-20 sm:mb-28">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-headline text-3xl sm:text-4xl font-bold mb-4">Nuestro Menú</h3>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-primary mx-auto rounded-full mb-8 sm:mb-12" />
            <CategoryTabs onCategoryChange={setSelectedCategory} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {filteredItems.map((item) => (
              <MenuItemCard 
                key={item.id} 
                item={item} 
                isSelected={selectedItems.some(i => i.id === item.id)}
                onSelect={() => toggleItemSelection(item)}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 sm:py-28 bg-card rounded-[2rem] sm:rounded-[3rem] border-2 border-dashed border-border/60">
              <p className="text-muted-foreground text-lg sm:text-xl font-medium">No hay productos en esta categoría por el momento.</p>
            </div>
          )}
        </section>

        {/* Order Section - Responsive size */}
        <section id="order-section" className="py-12 sm:py-20 bg-primary/[0.03] rounded-[2.5rem] sm:rounded-[4rem] border-2 border-primary/10 mb-20 sm:mb-28 shadow-xl scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="font-headline text-3xl sm:text-5xl font-bold mb-4 tracking-tighter">Tu Pedido</h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto font-medium">
                {selectedItems.length > 0 
                  ? "Hemos organizado tus selecciones abajo. Revisa y envía tu pedido por WhatsApp." 
                  : "Explora el menú arriba y selecciona tus productos favoritos para armar tu lista."}
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <OrderForm selectedItems={selectedItems} />
            </div>
          </div>
        </section>

        {/* Info Grid - Responsive columns */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          <div className="bg-card p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border-2 border-border/60 flex flex-col items-center text-center shadow-lg hover:border-primary/40 transition-colors">
            <div className="bg-primary/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 ring-2 ring-primary/20">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h4 className="font-headline text-xl sm:text-2xl font-bold mb-4">Ubicación</h4>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">{locationAddress}</p>
          </div>
          <div className="bg-card p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border-2 border-border/60 flex flex-col items-center text-center shadow-lg hover:border-primary/40 transition-colors">
            <div className="bg-primary/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 ring-2 ring-primary/20">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h4 className="font-headline text-xl sm:text-2xl font-bold mb-6">Horario</h4>
            <div className="text-muted-foreground text-sm sm:text-base flex flex-col gap-3 w-full">
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <span className="font-bold text-foreground">Jueves</span>
                <span className="text-primary font-black">6pm-11pm</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <span className="font-bold text-foreground">Viernes</span>
                <span className="text-primary font-black">6pm-12am</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/40 pb-2">
                <span className="font-bold text-foreground">Sábado</span>
                <span className="text-primary font-black">6pm-12am</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-foreground">Domingo</span>
                <span className="text-primary font-black">6pm-11pm</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border-2 border-border/60 flex flex-col items-center text-center shadow-lg hover:border-primary/40 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="bg-primary/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 ring-2 ring-primary/20">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h4 className="font-headline text-xl sm:text-2xl font-bold mb-4">Contacto</h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:+${phoneNumberLink}`} className="text-foreground font-black hover:text-primary transition-colors text-xl sm:text-2xl tracking-tighter">
                {phoneNumberDisplay}
              </a>
              <a href={`mailto:${emailAddress}`} className="text-muted-foreground text-[10px] sm:text-sm font-bold hover:text-primary transition-colors break-all">
                {emailAddress}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t-2 border-border/60 py-12 sm:py-16 mt-16 sm:mt-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 text-center sm:text-left">
            <div className="flex items-center">
              <img 
                src={logoUrl} 
                alt="Estación 18 Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <a href={`mailto:${emailAddress}`} className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-2 sm:p-3 bg-muted/40 rounded-xl sm:rounded-2xl border border-border/50" title="Email"><Mail className="h-5 w-5 sm:h-6 sm:w-6" /></a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-2 sm:p-3 bg-muted/40 rounded-xl sm:rounded-2xl border border-border/50" title="Instagram"><Instagram className="h-5 w-5 sm:h-6 sm:w-6" /></a>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-2 sm:p-3 bg-muted/40 rounded-xl sm:rounded-2xl border border-border/50" title="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-.95-.35-1.3-.4-.4-.05-.81-.03-1.2.09-.4.12-.73.35-.92.67-.19.32-.28.71-.25 1.1.03.39.18.75.43 1.05.25.3.58.52.96.63 1.28.35 2.29 1.48 2.26 2.81-.03 1.33-1.09 2.41-2.42 2.38-1.33-.03-2.38-1.12-2.35-2.45.01-.26.06-.52.15-.76l-4.42-1.1c-.5.52-.89 1.17-1.1 1.9-1.12 3.72-2.58 4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.36-.66.41-1.03 1.14-1.1 1.92-.02.57.04 1.14.3 1.64.44.88 1.44 1.39 2.39 1.26.95-.1 1.81-.8 2.05-1.7.07-.34.1-.69.09-1.04l.01-11.97Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm font-bold text-muted-foreground">© 2024 Estacion 18 Fast Food.</p>
              <p className="text-[9px] sm:text-[10px] font-black text-muted-foreground/40 mt-1 sm:mt-2 uppercase tracking-[0.3em]">El punto exacto del sabor</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
