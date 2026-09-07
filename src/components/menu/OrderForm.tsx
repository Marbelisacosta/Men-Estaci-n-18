
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Send, ShoppingBag, CheckCircle2, ReceiptText, User } from 'lucide-react';
import { MenuItem, EXCHANGE_RATE } from '@/lib/menu-data';

interface OrderFormProps {
  selectedItems?: MenuItem[];
}

export function OrderForm({ selectedItems = [] }: OrderFormProps) {
  const [userName, setUserName] = useState('');
  
  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);
  const totalBs = totalPrice * EXCHANGE_RATE;

  function handleSendWhatsApp() {
    if (selectedItems.length === 0) return;

    const itemsList = selectedItems.map(item => `- ${item.name} ($${item.price.toFixed(2)})`).join('%0A');
    const message = `*PEDIDO DESDE EL MENÚ DIGITAL*%0A%0A` +
      `*Cliente:* ${userName || 'No especificado'}%0A` +
      `*Items:*%0A${itemsList}%0A%0A` +
      `*Total Estimado:* $${totalPrice.toFixed(2)} (Bs. ${totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2 })})%0A%0A` +
      `¡Hola! Tengo mi selección lista desde la web.`;
    
    const whatsappUrl = `https://wa.me/584143683914?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <Card className="w-full max-w-xl mx-auto bg-card border-primary/20 shadow-2xl overflow-hidden relative border-2">
      <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
      
      <CardHeader className="text-center pt-10 pb-6 border-b border-dashed border-border/60">
        <div className="mx-auto bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
          <ReceiptText className="h-7 w-7" />
        </div>
        <CardTitle className="font-headline text-3xl font-bold tracking-tight">Mi Check-list</CardTitle>
        <CardDescription className="text-muted-foreground">
          {selectedItems.length > 0 
            ? "Muestra esta pantalla al personal o envía el pedido." 
            : "Selecciona platos en el menú para armar tu lista."}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        {selectedItems.length > 0 ? (
          <div className="divide-y divide-dashed divide-border/60">
            <div className="p-6 bg-muted/30">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Nombre del Cliente</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Tu nombre (opcional)" 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="pl-10 rounded-xl bg-background border-border/40 focus:ring-primary h-12"
                />
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Productos Marcados</h4>
              {selectedItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between group animate-in fade-in slide-in-from-left-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary p-1.5 rounded-lg border border-primary/20">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline font-bold text-foreground leading-tight">{item.name}</span>
                      <span className="text-[10px] text-muted-foreground">Bs. {(item.price * EXCHANGE_RATE).toLocaleString('es-VE', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                  <span className="font-mono text-primary font-bold">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-primary/5">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Total Estimado</span>
                  <span className="text-xl font-headline font-bold text-foreground opacity-80">
                    Bs. {totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-4xl font-headline font-bold text-primary">
                  ${totalPrice.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-16 text-center">
            <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 opacity-40">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground font-medium">No has marcado ningún producto todavía.</p>
            <p className="text-xs text-muted-foreground/60 mt-2">Explora el menú arriba y toca el plato que desees.</p>
          </div>
        )}
      </CardContent>

      {selectedItems.length > 0 && (
        <CardFooter className="p-6 flex flex-col gap-4 bg-background border-t border-border/40">
          <Button 
            onClick={handleSendWhatsApp}
            className="w-full h-16 rounded-2xl text-lg font-headline font-bold bg-primary hover:bg-primary/90 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] gap-3"
          >
            <Send className="h-6 w-6" /> ENVIAR POR WHATSAPP
          </Button>
          <p className="text-[10px] text-center text-muted-foreground uppercase tracking-tighter">
            También puedes mostrar este resumen directamente a tu mesero(a)
          </p>
        </CardFooter>
      )}
    </Card>
  );
}
