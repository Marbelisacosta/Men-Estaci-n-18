
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'individual' | 'combo' | 'fast-food';
  image: string;
  isSpecial?: boolean;
  pieces?: number;
}

export const menuItems: MenuItem[] = [
  {
    id: 'pasteles-1',
    name: 'Pasteles de Carne',
    price: 0.70,
    category: 'individual',
    image: 'pasteles'
  },
  {
    id: 'pasteles-2',
    name: 'Pasteles de Pollo',
    price: 0.70,
    category: 'individual',
    image: 'pasteles'
  },
  {
    id: 'tequenos-1',
    name: 'Tequeños Tradicionales',
    price: 0.70,
    category: 'individual',
    image: 'tequenos'
  },
  {
    id: 'fast-1',
    name: 'AREPA CON PROTEÍNA',
    price: 1.50,
    category: 'fast-food',
    image: 'arepa'
  },
  {
    id: 'fast-2',
    name: 'WHOPPER',
    price: 3.00,
    category: 'fast-food',
    image: 'burger'
  },
  {
    id: 'fast-3',
    name: 'JUNIOR',
    price: 1.50,
    category: 'fast-food',
    image: 'burger'
  },
  {
    id: 'fast-4',
    name: 'SALCHIQUESO',
    price: 1.50,
    category: 'fast-food',
    image: 'hotdog'
  },
  {
    id: 'fast-5',
    name: 'PATACON PERSONAL',
    price: 2.00,
    category: 'fast-food',
    image: 'patacon'
  },
  {
    id: 'fast-6',
    name: 'MINI PATACÓN',
    price: 2.00,
    category: 'fast-food',
    image: 'patacon'
  },
  {
    id: 'fast-7',
    name: 'PAN DE SALCHICHA',
    price: 4.00,
    category: 'fast-food',
    image: 'hotdog'
  },
  {
    id: 'combo-popular',
    name: 'Combo Estación 18',
    price: 2.50,
    category: 'combo',
    pieces: 3,
    image: 'combo-1',
    isSpecial: true
  },
  {
    id: 'combo-premium',
    name: 'Combo Sabor Extremo',
    price: 2.70,
    category: 'combo',
    pieces: 3,
    image: 'combo-2',
    isSpecial: true
  }
];

export const BRAND_MOTTO = "El punto exacto del sabor";
export const EXCHANGE_RATE = 945.65;
