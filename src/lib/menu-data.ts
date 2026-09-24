
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
    description: 'RELLENO DE POLLO DESMECHADO Y SABOR ÚNICO',
    price: 0.50,
    category: 'individual',
    image: 'past-pollo',
    isAvailable: false
  },
  {
    id: 'past-2',
    name: 'PASTELITO DE CARNE',
    description: 'CARNE MOLIDA CON EL MEJOR SAZÓN',
    price: 0.50,
    category: 'individual',
    image: 'past-carne',
    isAvailable: false
  },
  {
    id: 'past-3',
    name: 'PASTELITO DE QUESO',
    description: 'QUESO FUNDIDO EN MASA CRUJIENTE',
    price: 0.50,
    category: 'individual',
    image: 'past-queso',
    isAvailable: false
  },
  {
    id: 'past-4',
    name: 'PASTELITO DE PAPA CON QUESO',
    description: 'LA COMBINACIÓN CLÁSICA Y FAVORITA',
    price: 0.50,
    category: 'individual',
    image: 'past-papa-queso',
    isAvailable: false
  },
  {
    id: 'past-6',
    name: 'TEQUEÑO',
    description: 'DEDO DE QUESO TRADICIONAL',
    price: 0.50,
    category: 'individual',
    image: 'tequenos',
    isAvailable: false
  },
  {
    id: 'fast-salchipapa-tradicional',
    name: 'SALCHIPAPA TRADICIONAL',
    description: 'PAPAS FRITAS CON SALCHICHA Y SALSAS',
    price: 3.00,
    category: 'fast-food',
    image: 'salchipapa-tradicional-img',
    isAvailable: true
  },
  {
    id: 'fast-salchipapa-proteina',
    name: 'SALCHIPAPA CON PROTEINA',
    description: 'NUESTRA EXQUISITA SALCHIPAPA CON LA MEJOR PROTEINA',
    price: 5.00,
    category: 'fast-food',
    image: 'salchipapa-proteina-img',
    isAvailable: true
  },
  {
    id: 'fast-pan-proteina',
    name: 'PAN CON PROTEINA',
    description: 'PAN ESPECIAL CON RELLENO DE PROTEÍNA AL GUSTO',
    price: 2.50,
    category: 'fast-food',
    image: 'pan-proteina-img',
    isAvailable: true
  },
  {
    id: 'fast-hamburguesa-sencilla',
    name: 'HAMBURGUESA SENCILLA',
    description: 'EL CLÁSICO INIGUALABLE CON EL VERDADERO SABOR CALLEJERO',
    price: 1.00,
    category: 'fast-food',
    image: 'hamburguesa-sencilla-img',
    isAvailable: true
  },
  {
    id: 'fast-servicio-papas',
    name: 'SERVICIO DE PAPAS',
    description: 'PORCIÓN DE PAPAS FRITAS DORADAS Y CRUJIENTES',
    price: 1.00,
    category: 'fast-food',
    image: 'fries',
    isAvailable: true
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
    name: 'SALCHIQUESO',
    description: 'SALCHICHA MAS QUESO CEBÚ',
    price: 2.00,
    category: 'fast-food',
    image: 'hotdog',
    isAvailable: true
  },
  {
    id: 'fast-4',
    name: 'JUNIOR',
    description: 'VEGETALES FRESCOS',
    price: 2.00,
    category: 'fast-food',
    image: 'burger-junior',
    isAvailable: true
  },
  {
    id: 'fast-5',
    name: 'PATACON PERSONAL',
    description: 'PLÁTANO FRITO CON TODO EL SABOR',
    price: 3.00,
    category: 'fast-food',
    image: 'patacon',
    isAvailable: true
  },
  {
    id: 'fast-6',
    name: 'MINI PATACÓN',
    description: 'MINI PATACÓN CRUJIENTE',
    price: 1.50,
    category: 'fast-food',
    image: 'mini-patacon',
    isAvailable: true
  },
  {
    id: 'fast-pipe-salchicha',
    name: 'PAN DE SALCHICHA',
    description: 'SALCHICHA DE FULL SABOR',
    price: 1.50,
    category: 'fast-food',
    image: 'pan-salchicha',
    isAvailable: true
  },
  {
    id: 'drink-1',
    name: 'VASO DE REFRESCO',
    description: 'SABOR TRADICIONAL DE LA COCA-COLA',
    price: 0.50,
    category: 'drinks',
    image: 'soda',
    isAvailable: true
  },
  {
    id: 'drink-litro',
    name: 'REFRESCO DE LITRO',
    description: 'REFRESCO IDEAL PARA COMPARTIR',
    price: 1.50,
    category: 'drinks',
    image: 'soda-litro',
    isAvailable: true
  },
  {
    id: 'drink-2',
    name: 'REFRESCO 1.5 Lts',
    description: 'SABOR TRADICIONAL DE LA COCA-COLA',
    price: 2.00,
    category: 'drinks',
    image: 'soda-1-5',
    isAvailable: true
  },
  {
    id: 'combo-familiar-sencillo',
    name: 'COMBO FAMILIAR',
    description: '10 HAMBURGUESAS SENCILLAS PERFECTAS PARA COMPARTIR',
    price: 10.00,
    category: 'combo',
    image: 'combo-familiar-img',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-sencillo-papas',
    name: 'COMBO SENCILLO',
    description: 'HAMBURGUESA SENCILLA + PAPAS FRITAS',
    price: 1.50,
    category: 'combo',
    image: 'hamburguesa-sencilla-img',
    isSpecial: true,
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
    price: 12.00,
    category: 'combo',
    image: 'combo-junior',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-estacion',
    name: 'COMBO ESTACIÓN',
    description: '2 JUNIOR + 2 PANES DE SALCHICHA + PAPAS + REFRESCO 1.5L',
    price: 10.00,
    category: 'combo',
    image: 'combo-estacion',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-personal',
    name: 'COMBO PERSONAL',
    description: '2 AREPAS + VASO DE REFRESCO',
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

export const BRAND_MOTTO = "EL PUNTO EXACTO DEL SABOR";
export const EXCHANGE_RATE = 973;
