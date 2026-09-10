
"use client";

import { useState } from 'react';
import { MenuItemCard } from '@/components/menu/MenuItemCard';
import { BCVRate } from '@/components/menu/BCVRate';
import { CategoryTabs } from '@/components/menu/CategoryTabs';
import { OrderForm } from '@/components/menu/OrderForm';
import { menuItems, MenuItem, EXCHANGE_RATE as FALLBACK_RATE } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MapPin, Clock, Phone, Instagram, Mail, ClipboardCheck, Trash2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { doc } from 'firebase/firestore';
import { useFirestore, useDoc } from '@/firebase';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItems, setSelectedItems] = useState<MenuItem[]>([]);
  
  const db = useFirestore();
  const bcvDocRef = doc(db, 'settings', 'bcv');
  const { data: bcvData, loading: bcvLoading } = useDoc(bcvDocRef);
  
  const currentRate = bcvData?.rate || FALLBACK_RATE;

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
  const logoUrl = "https://i.postimg.cc/GhJbp1QW/Post-Estacion-18-(2).png";
  const heroImageData = PlaceHolderImages.find(img => img.id === 'hero-promo');

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full bg-[#0a0a0a]">
      {/* Header Fijo - Se mantiene al hacer scroll */}
      <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-[#0a0a0a] border-b border-white/5 shadow-2xl backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 sm:h-24 flex items-center justify-between gap-2">
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
            <BCVRate currentRate={currentRate} loading={bcvLoading} />
            
            <a href="#order-section">
              <Button className="bg-primary hover:bg-primary/90 text-white font-headline font-black text-[10px] sm:text-base px-3 sm:px-8 py-3 sm:py-6 rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 uppercase tracking-tighter">
                <span className="hidden xs:inline">MI</span> LISTA 
                <span className="bg-white text-primary w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-sm font-bold">
                  {selectedItems.length}
                </span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Spacer para el header fijo - Ajustado para evitar que el contenido se tape */}
      <div className="h-20 sm:h-24" />

      <main className="flex-1 container mx-auto px-4 sm:px-8 py-8 sm:py-12 overflow-x-hidden">
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
                exchangeRate={currentRate}
              />
            ))}
          </div>
        </section>

        <section id="order-section" className="mb-20 sm:mb-28 scroll-mt-28">
          <div className="bg-card rounded-[2rem] sm:rounded-[5rem] p-6 sm:p-20 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 blur-[80px] sm:blur-[120px] -mr-32 -mt-32 sm:-mr-48 sm:-mt-48 rounded-full" />
            <div className="text-center mb-10 sm:mb-16 relative z-10">
              <h3 className="font-headline text-3xl sm:text-6xl font-bold mb-4 uppercase tracking-tighter">TU SELECCIÓN</h3>
            </div>
            <div className="max-w-2xl mx-auto">
              <OrderForm selectedItems={selectedItems} exchangeRate={currentRate} />
            </div>
          </div>
        </section>

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
        <div className="container mx-auto px-4 sm:px-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <Image src={logoUrl} alt="ESTACIÓN 18 LOGO" width={200} height={80} className="h-12 sm:h-16 w-auto object-contain" />
            <div className="flex items-center gap-4 sm:gap-8">
              <a href={`mailto:${emailAddress}`} className="text-muted-foreground hover:text-primary transition-all p-3 bg-white/5 rounded-2xl border border-white/5"><Mail className="h-6 w-6" /></a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all p-3 bg-white/5 rounded-2xl border border-white/5"><Instagram className="h-6 w-6" /></a>
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
