
"use client";

import { useState } from 'react';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { BCVRate } from '@/components/menu/BCVRate';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { OrderForm } from '@/components/menu/OrderForm';
import { menuItems, MenuItem } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Clock, Phone, Instagram, Mail, ClipboardCheck, Trash2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
  const logoUrl = "https://i.postimg.cc/GhJbp1QW/Post-Estacion-18-(2).png";
  const heroImageData = PlaceHolderImages.find(img => img.id === 'hero-promo');

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center shrink-0">
            <Image 
              src={logoUrl} 
              alt="Estación 18 Logo" 
              width={140}
              height={56}
              priority
              className="h-10 sm:h-14 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
             <div className="hidden xs:block">
               <BCVRate />
             </div>
             <a 
               href="#order-section" 
               className="bg-primary text-white px-4 sm:px-6 py-2 text-[10px] sm:text-xs font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl border-2 border-white/20 uppercase tracking-tight"
             >
               LISTA ({selectedItems.length})
             </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-8 py-4 sm:py-8">
        {/* Hero Section - side by side layout */}
        <section className="relative rounded-[1.5rem] sm:rounded-[2.5rem] bg-card overflow-hidden mb-6 sm:mb-10 shadow-2xl border-2 border-border/60">
          <div className="absolute inset-0 bg-texture opacity-30" />
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-headline text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.85] tracking-tighter uppercase">
                El punto <br/> 
                <span className="text-primary italic">exacto</span> <br/> 
                del sabor
              </h1>
              
              <p className="text-sm sm:text-lg text-muted-foreground font-medium max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                Disfruta de la mejor comida rápida de la zona. Los mejores precios, sabor inigualable y atención de primera.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a 
                  href="#menu" 
                  className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight hover:scale-105 transition-all shadow-xl"
                >
                  Ver Menú
                </a>
                
                {selectedItems.length > 0 && (
                  <div className="p-3 sm:p-4 bg-background/50 backdrop-blur-md rounded-[1.5rem] border-2 border-primary/20 shadow-2xl flex items-center justify-between gap-4 animate-in slide-in-from-left-10 duration-500">
                    <div className="flex items-center gap-2">
                      <ClipboardCheck className="text-primary h-5 w-5" />
                      <span className="text-xs font-bold text-foreground">{selectedItems.length} marcados</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={clearSelection} className="h-8 text-[10px] font-bold text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg">
                      <Trash2 className="h-4 w-4 mr-1" /> Limpiar
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-[320px] sm:max-w-lg">
              <div className="relative group">
                <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl opacity-60 animate-pulse-subtle" />
                <div className="relative rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-card transition-transform duration-700 hover:scale-[1.02]">
                  <Image 
                    src={heroImageData?.imageUrl || "https://i.postimg.cc/85qhKvf2/Post-Estacion-18.png"} 
                    alt="Estación 18 Local" 
                    width={800}
                    height={800}
                    priority
                    className="w-full aspect-square object-cover"
                    data-ai-hint="restaurant food"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="mb-12 sm:mb-20">
          <div className="text-center mb-6 sm:mb-10">
            <h3 className="font-headline text-3xl sm:text-4xl font-bold mb-3 uppercase tracking-tighter">Nuestro Menú</h3>
            <div className="w-16 sm:w-24 h-1.5 bg-primary mx-auto rounded-full mb-8" />
            <CategoryTabs onCategoryChange={setSelectedCategory} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-10">
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
            <div className="text-center py-12 sm:py-20 bg-card rounded-[1.5rem] sm:rounded-[2.5rem] border-2 border-dashed border-border/60">
              <p className="text-muted-foreground text-base sm:text-lg font-medium">No hay productos en esta categoría por el momento.</p>
            </div>
          )}
        </section>

        {/* Order Section */}
        <section id="order-section" className="py-8 sm:py-12 bg-primary/[0.03] rounded-[1.5rem] sm:rounded-[2.5rem] border-2 border-primary/10 mb-12 sm:mb-20 shadow-xl scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-3 tracking-tighter uppercase">Tu Selección</h2>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto font-medium">
                {selectedItems.length > 0 
                  ? "Revisa tus platos y envíalos por WhatsApp para procesar tu orden." 
                  : "Selecciona platos del menú para armar tu pedido."}
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <OrderForm selectedItems={selectedItems} />
            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          <div className="bg-card p-6 sm:p-8 rounded-[2rem] border-2 border-border/60 flex flex-col items-center text-center shadow-lg hover:border-primary/40 transition-colors">
            <div className="bg-primary/10 p-4 rounded-2xl mb-4 ring-2 ring-primary/20">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h4 className="font-headline text-xl sm:text-2xl font-bold mb-2">Ubicación</h4>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium">{locationAddress}</p>
          </div>
          <div className="bg-card p-6 sm:p-8 rounded-[2rem] border-2 border-border/60 flex flex-col items-center text-center shadow-lg hover:border-primary/40 transition-colors">
            <div className="bg-primary/10 p-4 rounded-2xl mb-4 ring-2 ring-primary/20">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h4 className="font-headline text-xl sm:text-2xl font-bold mb-4">Horario</h4>
            <div className="text-muted-foreground text-xs sm:text-sm flex flex-col gap-2 w-full">
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
          <div className="bg-card p-6 sm:p-8 rounded-[2rem] border-2 border-border/60 flex flex-col items-center text-center shadow-lg hover:border-primary/40 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="bg-primary/10 p-4 rounded-2xl mb-4 ring-2 ring-primary/20">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h4 className="font-headline text-xl sm:text-2xl font-bold mb-2">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:+${phoneNumberLink}`} className="text-foreground font-black hover:text-primary transition-colors text-xl sm:text-2xl tracking-tighter">
                {phoneNumberDisplay}
              </a>
              <a href={`mailto:${emailAddress}`} className="text-muted-foreground text-[10px] sm:text-xs font-bold hover:text-primary transition-colors break-all">
                {emailAddress}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t-2 border-border/60 py-10 sm:py-16 mt-10 sm:mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-16 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start gap-4">
              <Image 
                src={logoUrl} 
                alt="Estación 18 Logo" 
                width={160}
                height={64}
                className="h-10 sm:h-16 w-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <a href={`mailto:${emailAddress}`} className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-3 bg-muted/40 rounded-xl border border-border/50" title="Email"><Mail className="h-5 w-5 sm:h-6 sm:w-6" /></a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-3 bg-muted/40 rounded-xl border border-border/50" title="Instagram"><Instagram className="h-5 w-5 sm:h-6 sm:w-6" /></a>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-3 bg-muted/40 rounded-xl border border-border/50" title="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.897 2.897 0 0 1 2.31-4.639 2.93 2.93 0 0 1 .88.13V9.402a6.836 6.836 0 0 0-1.002-.053c-3.52 0-6.37 2.85-6.37 6.37s2.85 6.37 6.37 6.37a6.34 6.34 0 0 0 6.368-6.368V7.03a8.16 8.16 0 0 0 4.77 1.521V5.13a4.83 4.83 0 0 1-1.042-.116z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm font-bold text-muted-foreground">© 2024 Estación 18 Fast Food.</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground/60 mt-1">Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
