
"use client";

import { useState } from 'react';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { BCVRate } from '@/components/menu/BCVRate';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { OrderForm } from '@/components/menu/OrderForm';
import { menuItems, MenuItem } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Clock, Phone, Instagram, Mail, ClipboardCheck, Trash2, ExternalLink } from 'lucide-react';
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
      }
      return [...prev, item];
    });
  }

  function clearSelection() {
    setSelectedItems([]);
  }

  const locationAddress = "SANTA RITA, AV. PEDRO LUCAS URRIBARRI, SECTOR LOS ANDES, AL LADO DE LA FARMACIA.";
  const locationMapUrl = "https://maps.app.goo.gl/HdFyew635z7VvkAR6";
  const phoneContact = "584143683914";
  const emailAddress = "ESTACION18@GMAIL.COM";
  const instagramUrl = "https://www.instagram.com/estacion18fastfood?igsh=NTkwamhkbTA0dHc5";
  const tiktokUrl = "https://www.tiktok.com/@estacion.18?_r=1&_t=ZS-99XLY1FJDRV";
  const logoUrl = "https://i.postimg.cc/GhJbp1QW/Post-Estacion-18-(2).png";
  const heroImageData = PlaceHolderImages.find(img => img.id === 'hero-promo');

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      {/* Header - Sticky with BCV Integrated */}
      <header className="sticky top-0 z-[100] w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-primary/20 shadow-2xl transition-all duration-300">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between gap-4">
          <div className="flex items-center shrink-0">
            <Image 
              src={logoUrl} 
              alt="ESTACIÓN 18 LOGO" 
              width={180}
              height={70}
              priority
              className="h-10 sm:h-16 w-auto object-contain"
            />
          </div>
          
          <div className="flex items-center gap-2 sm:gap-6">
            <BCVRate />
            
            <a href="#order-section">
              <Button className="bg-primary hover:bg-primary/90 text-white font-headline font-black text-[10px] sm:text-base px-4 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 uppercase tracking-tighter">
                <span className="hidden sm:inline">MI</span> LISTA 
                <span className="bg-white text-primary w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[8px] sm:text-xs">
                  {selectedItems.length}
                </span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 sm:px-8 py-8 sm:py-12 overflow-x-hidden">
        {/* Hero Section - Horizontal Layout Fixed for Mobile */}
        <section className="relative rounded-[1.5rem] sm:rounded-[4rem] bg-card overflow-hidden mb-12 sm:mb-20 shadow-2xl border border-white/5">
          <div className="absolute inset-0 bg-texture opacity-20" />
          
          <div className="relative z-10 p-4 sm:p-20 flex flex-row items-center gap-4 sm:gap-20">
            <div className="flex-[1.5] text-left">
              <h1 className="font-headline text-xl xs:text-3xl sm:text-7xl lg:text-8xl font-black mb-3 sm:mb-8 leading-[0.9] tracking-tighter uppercase">
                EL PUNTO <br/> 
                <span className="text-primary italic">EXACTO</span> <br/> 
                DEL SABOR
              </h1>
              
              <p className="text-[8px] xs:text-xs sm:text-xl text-muted-foreground font-medium mb-4 sm:mb-10 leading-relaxed max-w-lg uppercase">
                DISFRUTA DE LA MEJOR COMIDA RÁPIDA DE LA ZONA. LOS MEJORES PRECIOS, SABOR INIGUALABLE Y ATENCIÓN DE PRIMERA.
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-6 items-center">
                <a href="#menu">
                  <Button size="lg" className="h-8 sm:h-20 px-4 sm:px-12 text-[8px] sm:text-2xl font-black rounded-lg sm:rounded-[2rem] shadow-2xl shadow-primary/40 transition-all hover:scale-105 active:scale-95 uppercase">
                    VER MENÚ
                  </Button>
                </a>
                
                {selectedItems.length > 0 && (
                  <div className="bg-card/80 backdrop-blur-md px-2 sm:px-8 py-1.5 sm:py-4 rounded-lg sm:rounded-2xl border border-primary/20 shadow-2xl flex items-center justify-between gap-2 sm:gap-6 animate-in slide-in-from-left-10 duration-500">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <ClipboardCheck className="text-primary h-3 w-3 sm:h-6 sm:w-6" />
                      <span className="text-[7px] sm:text-xs font-bold text-foreground">{selectedItems.length} MARCADO(S)</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={clearSelection} className="h-6 sm:h-9 text-[7px] sm:text-[10px] font-bold text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg">
                      <Trash2 className="h-2.5 w-2.5 sm:h-4 sm:w-4 mr-1" /> LIMPIAR
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-[120px] xs:max-w-[200px] sm:max-w-xl">
              <div className="relative group">
                <div className="absolute -inset-5 sm:-inset-10 bg-primary/20 rounded-full blur-[20px] sm:blur-[100px] opacity-40 animate-pulse-subtle" />
                <div className="relative aspect-square sm:aspect-video rounded-lg sm:rounded-[3rem] overflow-hidden border sm:border-4 border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700">
                  <Image 
                    src={heroImageData?.imageUrl || 'https://picsum.photos/seed/station18/800/600'} 
                    alt="ESTACIÓN 18 HERO" 
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="mb-20 sm:mb-28 scroll-mt-28">
          <div className="text-center mb-12">
            <h3 className="font-headline text-3xl sm:text-6xl font-bold mb-4 uppercase tracking-tighter">NUESTRO MENÚ</h3>
            <div className="w-16 sm:w-24 h-1.5 sm:h-2.5 bg-primary mx-auto rounded-full mb-8 sm:mb-12" />
            <CategoryTabs onCategoryChange={setSelectedCategory} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-12">
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
            <div className="text-center py-20 bg-card rounded-[2rem] border-2 border-dashed border-white/10">
              <p className="text-muted-foreground text-base sm:text-xl font-medium uppercase">NO HAY PRODUCTOS EN ESTA CATEGORÍA POR EL MOMENTO.</p>
            </div>
          )}
        </section>

        {/* Order Section */}
        <section id="order-section" className="mb-20 sm:mb-28 scroll-mt-28">
          <div className="bg-card rounded-[2rem] sm:rounded-[5rem] p-6 sm:p-20 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 blur-[80px] sm:blur-[120px] -mr-32 -mt-32 sm:-mr-48 sm:-mt-48 rounded-full" />
            <div className="text-center mb-10 sm:mb-16 relative z-10">
              <h3 className="font-headline text-3xl sm:text-6xl font-bold mb-4 uppercase tracking-tighter">TU SELECCIÓN</h3>
              <p className="text-muted-foreground text-base sm:text-2xl max-w-2xl mx-auto font-medium uppercase">
                {selectedItems.length > 0 
                  ? "REVISA TU PEDIDO Y ENVÍALO POR WHATSAPP PARA QUE EMPECEMOS A PREPARARLO." 
                  : "SELECCIONA TUS PLATOS FAVORITOS DEL MENÚ PARA ARMAR TU ORDEN."}
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <OrderForm selectedItems={selectedItems} />
            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          <a 
            href={locationMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-white/5 flex flex-col items-center text-center shadow-2xl hover:border-primary/40 transition-all duration-300 group"
          >
            <div className="bg-primary/10 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] mb-6 sm:mb-8 ring-2 ring-primary/10 group-hover:scale-110 transition-transform">
              <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h4 className="font-headline text-2xl sm:text-3xl font-bold mb-4 uppercase">UBICACIÓN</h4>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium mb-4 uppercase">{locationAddress}</p>
            <div className="flex items-center gap-2 text-primary text-[10px] sm:text-xs font-black uppercase tracking-widest mt-auto group-hover:gap-4 transition-all">
              VER EN EL MAPA <ExternalLink className="h-4 w-4" />
            </div>
          </a>

          <div className="bg-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-white/5 flex flex-col items-center shadow-2xl hover:border-primary/40 transition-all duration-300">
            <div className="bg-primary/10 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] mb-6 sm:mb-8 ring-2 ring-primary/10">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h4 className="font-headline text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 uppercase">HORARIO</h4>
            <div className="text-muted-foreground text-sm sm:text-base flex flex-col gap-3 sm:gap-4 w-full">
              {[
                { day: "JUEVES", time: "6PM-11PM" },
                { day: "VIERNES", time: "6PM-12AM" },
                { day: "SÁBADO", time: "6PM-12AM" },
                { day: "DOMINGO", time: "6PM-11PM" }
              ].map((h) => (
                <div key={h.day} className="flex justify-between items-center border-b border-white/5 pb-2 sm:pb-3">
                  <span className="font-bold text-foreground uppercase">{h.day}</span>
                  <span className="text-primary font-black uppercase">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-white/5 flex flex-col items-center text-center shadow-2xl hover:border-primary/40 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
            <div className="bg-primary/10 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] mb-6 sm:mb-8 ring-2 ring-primary/10 group-hover:scale-110 transition-transform">
              <Phone className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h4 className="font-headline text-2xl sm:text-3xl font-bold mb-4 uppercase">CONTACTO</h4>
            <p className="text-muted-foreground text-lg sm:text-xl font-black mb-2">+{phoneContact}</p>
            <p className="text-muted-foreground text-[10px] sm:text-base font-medium mb-6 sm:mb-8 opacity-60 uppercase tracking-widest">SALCHICHA DE FULL SABOR</p>
            <a href={`https://wa.me/${phoneContact}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-xl sm:rounded-2xl border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 h-12 sm:h-14 font-headline font-bold uppercase tracking-widest transition-all">
                CHATEAR AHORA
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 sm:py-24 mt-12 sm:mt-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 sm:gap-16 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6">
              <Image 
                src={logoUrl} 
                alt="ESTACIÓN 18 LOGO" 
                width={200}
                height={80}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-4 sm:gap-8">
                <a href={`mailto:${emailAddress}`} className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-3 sm:p-5 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/5" title="EMAIL"><Mail className="h-6 w-6 sm:h-8 sm:w-8" /></a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-3 sm:p-5 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/5" title="INSTAGRAM"><Instagram className="h-6 w-6 sm:h-8 sm:w-8" /></a>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110 p-3 sm:p-5 bg-white/5 rounded-2xl sm:rounded-3xl border border-white/5" title="TIKTOK">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47V15.5c0 1.58-.31 3.04-1.3 4.37-1.28 1.85-3.48 2.79-5.73 2.64-1.35-.09-2.67-.58-3.73-1.48a6.52 6.52 0 0 1-2.45-5.26c.03-1.61.56-3.15 1.56-4.41a6.38 6.38 0 0 1 5.38-2.64c1.1.04 2.18.35 3.16.88.01-1.83.01-3.66.01-5.49a2.897 2.897 0 0 1 2.31-4.639 2.93 2.93 0 0 1 .88.13V9.402a6.836 6.836 0 0 0-1.002-.053c-3.52 0-6.37 2.85-6.37 6.37s2.85 6.37 6.37 6.37a6.34 6.34 0 0 0 6.368-6.368V7.03a8.16 8.16 0 0 0 4.77 1.521V5.13a4.83 4.83 0 0 1-1.042-.116z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs sm:text-base font-bold text-muted-foreground uppercase">© 2024 ESTACIÓN 18 FAST FOOD.</p>
              <p className="text-[10px] sm:text-sm text-muted-foreground/50 mt-2 uppercase tracking-[0.2em]">EL PUNTO EXACTO DEL SABOR.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
