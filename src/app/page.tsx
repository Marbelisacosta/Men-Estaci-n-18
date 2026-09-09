
"use client";

import { useState } from 'react';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { BCVRate } from '@/components/menu/BCVRate';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { OrderForm } from '@/components/menu/OrderForm';
import { menuItems, MenuItem } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Clock, Phone, Instagram, Mail, ClipboardCheck, Trash2, ShoppingCart } from 'lucide-react';
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
      {/* Header - Fixed on scroll */}
      <header className="sticky top-0 z-[100] w-full bg-background/95 backdrop-blur-md border-b border-white/5 shadow-2xl transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <div className="flex items-center shrink-0">
            <Image 
              src={logoUrl} 
              alt="Estación 18 Logo" 
              width={160}
              height={64}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6">
             <div className="hidden md:block">
               <BCVRate />
             </div>
             <a 
               href="#order-section" 
               className="bg-primary text-white px-5 sm:px-8 py-2.5 text-[11px] sm:text-xs font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] border-2 border-white/10 uppercase tracking-widest flex items-center gap-2"
             >
               <ShoppingCart className="h-3.5 w-3.5" />
               LISTA ({selectedItems.length})
             </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-8 py-6 sm:py-10">
        {/* Hero Section */}
        <section className="relative rounded-[1.5rem] sm:rounded-[3rem] bg-card overflow-hidden mb-8 sm:mb-16 shadow-2xl border border-white/5">
          <div className="absolute inset-0 bg-texture opacity-30" />
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-[0.85] tracking-tighter uppercase">
                El punto <br/> 
                <span className="text-primary italic">exacto</span> <br/> 
                del sabor
              </h1>
              
              <p className="text-sm sm:text-lg text-muted-foreground font-medium max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
                Disfruta de la mejor comida rápida de la zona. Los mejores precios, sabor inigualable y atención de primera.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a 
                  href="#menu" 
                  className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl hover:shadow-primary/20"
                >
                  Ver Menú
                </a>
                
                {selectedItems.length > 0 && (
                  <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-md rounded-2xl border border-primary/20 shadow-2xl flex items-center justify-between gap-4 animate-in slide-in-from-left-10 duration-500">
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
            
            <div className="flex-1 w-full max-w-[350px] md:max-w-md lg:max-w-lg">
              <div className="relative group">
                <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[80px] opacity-40 animate-pulse-subtle" />
                <div className="relative rounded-[3rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/5 transition-transform duration-700 hover:scale-[1.02]">
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

        {/* Info Section Mobile BCV */}
        <div className="md:hidden mb-8">
           <BCVRate />
        </div>

        {/* Menu Section */}
        <section id="menu" className="mb-16 sm:mb-24 scroll-mt-24">
          <div className="text-center mb-10">
            <h3 className="font-headline text-3xl sm:text-5xl font-bold mb-4 uppercase tracking-tighter">Nuestro Menú</h3>
            <div className="w-20 h-2 bg-primary mx-auto rounded-full mb-10" />
            <CategoryTabs onCategoryChange={setSelectedCategory} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-12">
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
            <div className="text-center py-20 bg-card rounded-[2rem] border-2 border-dashed border-white/5">
              <p className="text-muted-foreground text-lg font-medium">No hay productos en esta categoría por el momento.</p>
            </div>
          )}
        </section>

        {/* Order Section */}
        <section id="order-section" className="py-12 sm:py-20 bg-primary/5 rounded-[2rem] sm:rounded-[4rem] border border-white/5 mb-16 sm:mb-24 shadow-2xl scroll-mt-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl sm:text-6xl font-bold mb-4 tracking-tighter uppercase">Tu Selección</h2>
              <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto font-medium">
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
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center shadow-xl hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/10 p-5 rounded-3xl mb-6 ring-2 ring-primary/10">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-headline text-2xl font-bold mb-3 uppercase">Ubicación</h4>
            <p className="text-muted-foreground text-sm leading-relaxed font-medium">{locationAddress}</p>
          </div>
          
          <div className="bg-card p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center shadow-xl hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/10 p-5 rounded-3xl mb-6 ring-2 ring-primary/10">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-headline text-2xl font-bold mb-6 uppercase">Horario</h4>
            <div className="text-muted-foreground text-sm flex flex-col gap-3 w-full">
              {[
                { day: "Jueves", time: "6pm-11pm" },
                { day: "Viernes", time: "6pm-12am" },
                { day: "Sábado", time: "6pm-12am" },
                { day: "Domingo", time: "6pm-11pm" }
              ].map((h) => (
                <div key={h.day} className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="font-bold text-foreground">{h.day}</span>
                  <span className="text-primary font-black">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center shadow-xl hover:border-primary/30 transition-all duration-300 sm:col-span-2 lg:col-span-1">
            <div className="bg-primary/10 p-5 rounded-3xl mb-6 ring-2 ring-primary/10">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-headline text-2xl font-bold mb-3 uppercase">Contacto</h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:+${phoneNumberLink}`} className="text-foreground font-black hover:text-primary transition-colors text-3xl tracking-tighter">
                {phoneNumberDisplay}
              </a>
              <a href={`mailto:${emailAddress}`} className="text-muted-foreground text-xs font-bold hover:text-primary transition-colors break-all">
                {emailAddress}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-white/5 py-16 sm:py-20 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Image 
                src={logoUrl} 
                alt="Estación 18 Logo" 
                width={180}
                height={72}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-6">
                <a href={`mailto:${emailAddress}`} className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-4 bg-white/5 rounded-2xl border border-white/5" title="Email"><Mail className="h-6 w-6" /></a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-4 bg-white/5 rounded-2xl border border-white/5" title="Instagram"><Instagram className="h-6 w-6" /></a>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-4 bg-white/5 rounded-2xl border border-white/5" title="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.897 2.897 0 0 1 2.31-4.639 2.93 2.93 0 0 1 .88.13V9.402a6.836 6.836 0 0 0-1.002-.053c-3.52 0-6.37 2.85-6.37 6.37s2.85 6.37 6.37 6.37a6.34 6.34 0 0 0 6.368-6.368V7.03a8.16 8.16 0 0 0 4.77 1.521V5.13a4.83 4.83 0 0 1-1.042-.116z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm font-bold text-muted-foreground">© 2024 Estación 18 Fast Food.</p>
              <p className="text-xs text-muted-foreground/50 mt-1">El punto exacto del sabor.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
