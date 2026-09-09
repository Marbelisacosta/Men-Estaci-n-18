
"use client";

import { useState } from 'react';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { BCVRate } from '@/components/menu/BCVRate';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { OrderForm } from '@/components/menu/OrderForm';
import { menuItems, MenuItem } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Clock, Phone, Instagram, Mail, ClipboardCheck, Trash2 } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col">
      {/* Header - Sticky as requested in the image */}
      <header className="sticky top-0 z-[100] w-full bg-[#0a0a0a] border-b border-primary/30 shadow-2xl transition-all duration-300">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center shrink-0">
            <Image 
              src={logoUrl} 
              alt="Estación 18 Logo" 
              width={200}
              height={80}
              priority
              className="h-16 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-6">
             <div className="hidden lg:block">
               <BCVRate />
             </div>
             <a 
               href="#order-section" 
               className="bg-primary text-white px-8 sm:px-12 py-4 text-xs sm:text-sm font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-white/10 uppercase tracking-[0.2em]"
             >
               LISTA ({selectedItems.length})
             </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="relative rounded-[2.5rem] md:rounded-[4rem] bg-card overflow-hidden mb-12 sm:mb-20 shadow-2xl border border-white/5">
          <div className="absolute inset-0 bg-texture opacity-20" />
          
          <div className="relative z-10 p-8 sm:p-12 md:p-20 flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl font-black mb-8 leading-[0.8] tracking-tighter uppercase">
                El punto <br/> 
                <span className="text-primary italic">exacto</span> <br/> 
                del sabor
              </h1>
              
              <p className="text-base sm:text-xl text-muted-foreground font-medium max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
                Disfruta de la mejor comida rápida de la zona. Los mejores precios, sabor inigualable y atención de primera.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                <a 
                  href="#menu" 
                  className="w-full sm:w-auto bg-primary text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl hover:shadow-primary/30"
                >
                  Ver Menú
                </a>
                
                {selectedItems.length > 0 && (
                  <div className="p-4 bg-background/80 backdrop-blur-md rounded-2xl border border-primary/20 shadow-2xl flex items-center justify-between gap-6 animate-in slide-in-from-left-10 duration-500">
                    <div className="flex items-center gap-3">
                      <ClipboardCheck className="text-primary h-6 w-6" />
                      <span className="text-xs font-bold text-foreground">{selectedItems.length} seleccionados</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={clearSelection} className="h-9 text-[10px] font-bold text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg">
                      <Trash2 className="h-4 w-4 mr-1" /> Limpiar
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-[380px] md:max-w-xl">
              <div className="relative group">
                <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] opacity-40 animate-pulse-subtle" />
                <div className="relative rounded-[3rem] sm:rounded-[5rem] overflow-hidden shadow-2xl border-4 border-white/5 transition-transform duration-700 hover:scale-[1.03]">
                  <Image 
                    src={heroImageData?.imageUrl || "https://i.postimg.cc/85qhKvf2/Post-Estacion-18.png"} 
                    alt="Estación 18 Local" 
                    width={900}
                    height={900}
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
        <div className="lg:hidden mb-10">
           <BCVRate />
        </div>

        {/* Menu Section */}
        <section id="menu" className="mb-20 sm:mb-28 scroll-mt-28">
          <div className="text-center mb-12">
            <h3 className="font-headline text-4xl sm:text-6xl font-bold mb-6 uppercase tracking-tighter">Nuestro Menú</h3>
            <div className="w-24 h-2.5 bg-primary mx-auto rounded-full mb-12" />
            <CategoryTabs onCategoryChange={setSelectedCategory} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-12">
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
            <div className="text-center py-24 bg-card rounded-[3rem] border-2 border-dashed border-white/10">
              <p className="text-muted-foreground text-xl font-medium">No hay productos en esta categoría por el momento.</p>
            </div>
          )}
        </section>

        {/* Order Section */}
        <section id="order-section" className="py-16 sm:py-24 bg-primary/5 rounded-[3rem] sm:rounded-[5rem] border border-white/5 mb-20 sm:mb-28 shadow-2xl scroll-mt-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="font-headline text-5xl sm:text-7xl font-bold mb-6 tracking-tighter uppercase">Tu Selección</h2>
              <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto font-medium">
                {selectedItems.length > 0 
                  ? "Revisa tu pedido y envíalo por WhatsApp para que empecemos a prepararlo." 
                  : "Selecciona tus platos favoritos del menú para armar tu orden."}
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <OrderForm selectedItems={selectedItems} />
            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-card p-10 rounded-[3rem] border border-white/5 flex flex-col items-center text-center shadow-2xl hover:border-primary/40 transition-all duration-300 group">
            <div className="bg-primary/10 p-6 rounded-[2rem] mb-8 ring-2 ring-primary/10 group-hover:scale-110 transition-transform">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
            <h4 className="font-headline text-3xl font-bold mb-4 uppercase">Ubicación</h4>
            <p className="text-muted-foreground text-base leading-relaxed font-medium">{locationAddress}</p>
          </div>
          
          <div className="bg-card p-10 rounded-[3rem] border border-white/5 flex flex-col items-center text-center shadow-2xl hover:border-primary/40 transition-all duration-300 group">
            <div className="bg-primary/10 p-6 rounded-[2rem] mb-8 ring-2 ring-primary/10 group-hover:scale-110 transition-transform">
              <Clock className="h-10 w-10 text-primary" />
            </div>
            <h4 className="font-headline text-3xl font-bold mb-8 uppercase">Horario</h4>
            <div className="text-muted-foreground text-base flex flex-col gap-4 w-full">
              {[
                { day: "Jueves", time: "6pm-11pm" },
                { day: "Viernes", time: "6pm-12am" },
                { day: "Sábado", time: "6pm-12am" },
                { day: "Domingo", time: "6pm-11pm" }
              ].map((h) => (
                <div key={h.day} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-bold text-foreground">{h.day}</span>
                  <span className="text-primary font-black">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-10 rounded-[3rem] border border-white/5 flex flex-col items-center text-center shadow-2xl hover:border-primary/40 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
            <div className="bg-primary/10 p-6 rounded-[2rem] mb-8 ring-2 ring-primary/10 group-hover:scale-110 transition-transform">
              <Phone className="h-10 w-10 text-primary" />
            </div>
            <h4 className="font-headline text-3xl font-bold mb-4 uppercase">Contacto</h4>
            <div className="flex flex-col gap-5">
              <a href={`tel:+${phoneNumberLink}`} className="text-foreground font-black hover:text-primary transition-colors text-4xl tracking-tighter">
                {phoneNumberDisplay}
              </a>
              <a href={`mailto:${emailAddress}`} className="text-muted-foreground text-sm font-bold hover:text-primary transition-colors break-all">
                {emailAddress}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-white/5 py-20 sm:py-24 mt-20">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-6">
              <Image 
                src={logoUrl} 
                alt="Estación 18 Logo" 
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-10">
              <div className="flex items-center gap-8">
                <a href={`mailto:${emailAddress}`} className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-5 bg-white/5 rounded-3xl border border-white/5" title="Email"><Mail className="h-8 w-8" /></a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-5 bg-white/5 rounded-3xl border border-white/5" title="Instagram"><Instagram className="h-8 w-8" /></a>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-5 bg-white/5 rounded-3xl border border-white/5" title="TikTok">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.897 2.897 0 0 1 2.31-4.639 2.93 2.93 0 0 1 .88.13V9.402a6.836 6.836 0 0 0-1.002-.053c-3.52 0-6.37 2.85-6.37 6.37s2.85 6.37 6.37 6.37a6.34 6.34 0 0 0 6.368-6.368V7.03a8.16 8.16 0 0 0 4.77 1.521V5.13a4.83 4.83 0 0 1-1.042-.116z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-base font-bold text-muted-foreground">© 2024 Estación 18 Fast Food.</p>
              <p className="text-sm text-muted-foreground/50 mt-2">El punto exacto del sabor.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
