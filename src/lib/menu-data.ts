
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'individual' | 'combo';
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
