
"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send, ClipboardList, MapPin, Phone, User, ShoppingBag } from 'lucide-react';
import { MenuItem } from '@/lib/menu-data';

const formSchema = z.object({
  fullName: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres." }),
  phone: z.string().min(10, { message: "Ingresa un número de teléfono válido." }),
  orderType: z.enum(["delivery", "pickup"]),
  address: z.string().optional(),
  orderDetails: z.string().min(5, { message: "Por favor, detalla lo que deseas pedir." }),
});

interface OrderFormProps {
  selectedItems?: MenuItem[];
}

export function OrderForm({ selectedItems = [] }: OrderFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      orderType: "pickup",
      address: "",
      orderDetails: "",
    },
  });

  // Actualizar automáticamente los detalles cuando cambian los items seleccionados
  useEffect(() => {
    if (selectedItems.length > 0) {
      const itemsList = selectedItems.map(item => `- ${item.name} ($${item.price.toFixed(2)})`).join('\n');
      const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);
      form.setValue('orderDetails', `He seleccionado:\n${itemsList}\n\nTotal estimado: $${totalPrice.toFixed(2)}`);
    } else {
      form.setValue('orderDetails', '');
    }
  }, [selectedItems, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `*NUEVO PEDIDO - ESTACIÓN 18*%0A%0A` +
      `*Cliente:* ${values.fullName}%0A` +
      `*Teléfono:* ${values.phone}%0A` +
      `*Tipo:* ${values.orderType === 'delivery' ? 'A Domicilio 🛵' : 'Para Retirar 🛍️'}%0A` +
      `${values.address ? `*Dirección:* ${values.address}%0A` : ''}` +
      `%0A*DETALLE DEL PEDIDO:*%0A${encodeURIComponent(values.orderDetails)}`;
    
    const whatsappUrl = `https://wa.me/584143683914?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  const orderType = form.watch("orderType");

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card border-primary/20 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      {selectedItems.length > 0 && (
        <div className="bg-secondary/10 p-3 flex items-center justify-center gap-2 border-b border-secondary/20">
          <ShoppingBag className="h-4 w-4 text-secondary" />
          <span className="text-xs font-bold text-secondary uppercase tracking-wider">
            {selectedItems.length} Items seleccionados del menú
          </span>
        </div>
      )}

      <CardHeader className="text-center pb-2">
        <div className="mx-auto bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 rotate-3">
          <ClipboardList className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl font-bold">Resumen de Pedido</CardTitle>
        <CardDescription>Confirma tus datos para enviarnos tu solicitud organizada.</CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" /> Nombre Completo
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Ej. Juan Pérez" {...field} className="rounded-xl border-border/60 focus:ring-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" /> Teléfono
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Ej. 04141234567" {...field} className="rounded-xl border-border/60" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="orderType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>¿Cómo lo deseas?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-xl border-border/60">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pickup">Para Retirar (Local)</SelectItem>
                      <SelectItem value="delivery">A Domicilio (Delivery)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {orderType === "delivery" && (
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="animate-in fade-in slide-in-from-top-2">
                    <FormLabel className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Dirección de Entrega
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Indica calle, casa o punto de referencia" {...field} className="rounded-xl border-border/60" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="orderDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tu Selección</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Ej. 2 pasteles de carne, 1 combo Estación 18 con Pepsi..." 
                      className="min-h-[150px] rounded-xl border-border/60 resize-none font-medium text-sm"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    {selectedItems.length > 0 
                      ? "Puedes editar o añadir notas adicionales aquí." 
                      : "Marca productos arriba para que aparezcan aquí automáticamente."}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-14 rounded-xl text-lg font-headline font-bold bg-primary hover:bg-primary/90 shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] gap-2">
              <Send className="h-5 w-5" /> ENVIAR PEDIDO POR WHATSAPP
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
