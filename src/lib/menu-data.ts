
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'individual' | 'combo' | 'fast-food' | 'drinks';
  image: string;
  isSpecial?: boolean;
  pieces?: number;
  description?: string;
  isAvailable?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'past-1',
    name: 'PASTELITO DE POLLO',
    description: 'Pollo desmechado con sazón de la casa',
    price: 0.50,
    category: 'individual',
    image: 'past-pollo',
    isAvailable: false
  },
  {
    id: 'past-2',
    name: 'PASTELITO DE CARNE',
    description: 'Carne molida perfectamente aliñada',
    price: 0.50,
    category: 'individual',
    image: 'past-carne',
    isAvailable: false
  },
  {
    id: 'past-3',
    name: 'PASTELITO DE QUESO',
    description: 'Queso fundido en masa crujiente',
    price: 0.50,
    category: 'individual',
    image: 'past-queso',
    isAvailable: false
  },
  {
    id: 'past-4',
    name: 'PASTELITO DE PAPA CON QUESO',
    description: 'La combinación clásica y favorita',
    price: 0.50,
    category: 'individual',
    image: 'past-papa-queso',
    isAvailable: false
  },
  {
    id: 'past-6',
    name: 'TEQUEÑO',
    description: 'Dedo de queso tradicional',
    price: 0.50,
    category: 'individual',
    image: 'tequenos',
    isAvailable: false
  },
  {
    id: 'fast-1',
    name: 'AREPA CON PROTEÍNA',
    description: 'AREPA FRITA RELLENA CON SABOR',
    price: 1.50,
    category: 'fast-food',
    image: 'arepa',
    isAvailable: true
  },
  {
    id: 'fast-2',
    name: 'WHOPPER',
    description: 'PROTEINA DE TU PREFERENCIA',
    price: 4.00,
    category: 'fast-food',
    image: 'burger',
    isAvailable: true
  },
  {
    id: 'fast-3',
    name: 'JUNIOR',
    price: 2.00,
    category: 'fast-food',
    image: 'burger-junior',
    isAvailable: true
  },
  {
    id: 'fast-4',
    name: 'SALCHIQUESO',
    description: 'Salchicha con queso cebú',
    price: 2.00,
    category: 'fast-food',
    image: 'hotdog',
    isAvailable: true
  },
  {
    id: 'fast-5',
    name: 'PATACON PERSONAL',
    description: 'Plátano frito con todo el sabor',
    price: 3.00,
    category: 'fast-food',
    image: 'patacon',
    isAvailable: true
  },
  {
    id: 'fast-6',
    name: 'MINI PATACÓN',
    price: 3.00,
    category: 'fast-food',
    image: 'mini-patacon',
    isAvailable: true
  },
  {
    id: 'fast-pan-salchicha',
    name: 'PAN DE SALCHICHA',
    price: 1.50,
    category: 'fast-food',
    image: 'pan-salchicha',
    isAvailable: true
  },
  {
    id: 'fast-papas',
    name: 'SERVICIO DE PAPAS FRITAS',
    description: 'SERVICIO DE PAPAS FRITAS + SALSA DE TOMATE',
    price: 1.00,
    category: 'fast-food',
    image: 'fries',
    isAvailable: true
  },
  {
    id: 'drink-1',
    name: 'VASO DE REFRESCO',
    description: 'Sabor tradicional de la Coca-Cola',
    price: 0.50,
    category: 'drinks',
    image: 'soda',
    isAvailable: true
  },
  {
    id: 'drink-litro',
    name: 'REFRESCO DE LITRO',
    description: 'Sabor tradicional de la Coca-Cola',
    price: 1.50,
    category: 'drinks',
    image: 'soda-litro',
    isAvailable: true
  },
  {
    id: 'drink-2',
    name: 'REFRESCO 1.5 LITROS',
    description: 'Sabor tradicional de la Coca-Cola',
    price: 2.00,
    category: 'drinks',
    image: 'soda-1-5',
    isAvailable: true
  },
  {
    id: 'combo-especial',
    name: 'COMBO ESPECIAL',
    description: 'WHOPPER + SERVICIO DE PAPAS',
    price: 5.00,
    category: 'combo',
    image: 'combo-especial',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-duo',
    name: 'COMBO DUO',
    description: '2 WHOPPER + 2 VASO REFRESCO',
    price: 7.00,
    category: 'combo',
    image: 'combo-duo',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-callejero',
    name: 'COMBO CALLEJERO',
    description: '4 PANES DE SALCHICHA',
    price: 5.00,
    category: 'combo',
    image: 'combo-callejero',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-junior',
    name: 'COMBO JUNIOR',
    description: "8 JUNIOR'S",
    price: 14.00,
    category: 'combo',
    image: 'combo-junior',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-estacion',
    name: 'COMBO ESTACIÓN',
    description: '2 PANES DE SALCHICHA + 2 JUNIOR + 2 AREPAS + REFRESCO 1L',
    price: 11.00,
    category: 'combo',
    image: 'combo-estacion',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-personal',
    name: 'COMBO PERSONAL',
    description: '2 AREPAS + 1 VASO REFRESCO',
    price: 3.50,
    category: 'combo',
    image: 'combo-personal',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-boom',
    name: 'COMBO BOOM',
    description: '3 WHOPPER + REFRESCO DE LITRO',
    price: 12.00,
    category: 'combo',
    image: 'combo-boom',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-resuelve',
    name: 'COMBO RESUELVE',
    description: '8 PANES DE SALCHICHA',
    price: 10.00,
    category: 'combo',
    image: 'combo-resuelve',
    isSpecial: true,
    isAvailable: true
  }
];

export const BRAND_MOTTO = "El punto exacto del sabor";
export const EXCHANGE_RATE = 954.02;
