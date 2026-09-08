
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
    id: 'pasteles-1',
    name: 'Pasteles de Carne',
    price: 0.70,
    category: 'individual',
    image: 'pasteles',
    isAvailable: false
  },
  {
    id: 'pasteles-2',
    name: 'Pasteles de Pollo',
    price: 0.70,
    category: 'individual',
    image: 'pasteles',
    isAvailable: false
  },
  {
    id: 'tequenos-1',
    name: 'Tequeños Tradicionales',
    price: 0.70,
    category: 'individual',
    image: 'tequenos',
    isAvailable: false
  },
  {
    id: 'fast-1',
    name: 'AREPA CON PROTEÍNA',
    price: 1.50,
    category: 'fast-food',
    image: 'arepa',
    isAvailable: true
  },
  {
    id: 'fast-2',
    name: 'WHOPPER',
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
    image: 'burger',
    isAvailable: true
  },
  {
    id: 'fast-4',
    name: 'SALCHIQUESO',
    price: 2.00,
    category: 'fast-food',
    image: 'hotdog',
    isAvailable: true
  },
  {
    id: 'fast-5',
    name: 'PATACON PERSONAL',
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
    image: 'patacon',
    isAvailable: true
  },
  {
    id: 'fast-7',
    name: 'PAN DE SALCHICHA',
    price: 1.50,
    category: 'fast-food',
    image: 'hotdog',
    isAvailable: true
  },
  {
    id: 'fast-8',
    name: 'SERVICIO DE PAPAS FRITAS + SALSA',
    price: 1.00,
    category: 'fast-food',
    image: 'fries',
    isAvailable: true
  },
  {
    id: 'drink-1',
    name: 'REFRESCO 1 LITRO',
    price: 1.50,
    category: 'drinks',
    image: 'soda',
    isAvailable: true
  },
  {
    id: 'drink-2',
    name: 'REFRESCO 1.5 LITROS',
    price: 2.50,
    category: 'drinks',
    image: 'soda',
    isAvailable: true
  },
  {
    id: 'combo-whopper-papas',
    name: 'COMBO WHOPPER + PAPAS',
    description: 'WHOPPER + SERVICIO DE PAPAS',
    price: 5.00,
    category: 'combo',
    image: 'combo-1',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-duo',
    name: 'COMBO DUO',
    description: '2 WHOPPER + 2 VASO REFRESCO',
    price: 7.00,
    category: 'combo',
    image: 'combo-1',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-callejero',
    name: 'COMBO CALLEJERO',
    description: '4 PANES DE SALCHICHA',
    price: 5.00,
    category: 'combo',
    image: 'combo-2',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-junior',
    name: 'COMBO JUNIOR',
    description: "8 JUNIOR'S",
    price: 12.00,
    category: 'combo',
    image: 'combo-1',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-estacion',
    name: 'COMBO ESTACIÓN',
    description: '2 PANES DE SALCHICHA + 2 JUNIOR + 2 AREPAS + REFRESCO',
    price: 10.00,
    category: 'combo',
    image: 'combo-2',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-personal',
    name: 'COMBO PERSONAL',
    description: '2 AREPAS + 1 VASO REFRESCO',
    price: 3.50,
    category: 'combo',
    image: 'combo-1',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-boom',
    name: 'COMBO BOOM',
    description: '3 WHOPPER + REFRESCO DE LITRO',
    price: 12.00,
    category: 'combo',
    image: 'combo-2',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-resuelve',
    name: 'COMBO RESUELVE',
    description: '8 PANES DE SALCHICHA',
    price: 10.00,
    category: 'combo',
    image: 'combo-1',
    isSpecial: true,
    isAvailable: true
  }
];

export const BRAND_MOTTO = "El punto exacto del sabor";
export const EXCHANGE_RATE = 947.29;
