export type MenuCategory = 
  | 'hamburguesas' 
  | 'perros-panes' 
  | 'arepas-patacones' 
  | 'papas-fritas' 
  | 'bebidas' 
  | 'combos'
  | 'combos-personales' 
  | 'combos-familiares' 
  | 'individual'
  | 'combo'
  | 'fast-food'
  | 'drinks'
  | 'merch';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  image: string;
  isSpecial?: boolean;
  pieces?: number;
  description?: string;
  isAvailable?: boolean;
}

export interface CategorySection {
  id: MenuCategory;
  name: string;
  shortName?: string;
  iconName?: string;
}

export const MENU_CATEGORIES: CategorySection[] = [
  { id: 'hamburguesas', name: 'Hamburguesas' },
  { id: 'perros-panes', name: 'Perros & Panes' },
  { id: 'arepas-patacones', name: 'Arepas & Patacones' },
  { id: 'papas-fritas', name: 'Papas Fritas' },
  { id: 'bebidas', name: 'Bebidas' },
  { id: 'combos-personales', name: 'Combos Personales y de Pareja', shortName: 'Combos Personales' },
  { id: 'combos-familiares', name: 'Combos Familiares y Grupales', shortName: 'Combos Familiares' },
];

export const menuItems: MenuItem[] = [
  // ==========================================
  // 1. HAMBURGUESAS
  // ==========================================
  {
    id: 'fast-hamburguesa-sencilla',
    name: 'HAMBURGUESA SENCILLA',
    description: 'EL CLÁSICO INIGUALABLE CON EL VERDADERO SABOR CALLEJERO',
    price: 1.00,
    category: 'hamburguesas',
    image: 'hamburguesa-sencilla-img',
    isAvailable: true
  },
  {
    id: 'fast-4',
    name: 'JUNIOR',
    description: 'VEGETALES FRESCOS',
    price: 2.00,
    category: 'hamburguesas',
    image: 'burger-junior',
    isAvailable: true
  },
  {
    id: 'fast-2',
    name: 'WHOPPER',
    description: 'PROTEINA DE TU PREFERENCIA',
    price: 4.00,
    category: 'hamburguesas',
    image: 'burger',
    isAvailable: true
  },

  // ==========================================
  // 2. PERROS & PANES
  // ==========================================
  {
    id: 'fast-perros-calientes',
    name: 'PERRO CALIENTE SENCILLO',
    description: 'DELICIOSO PERRO CALIENTE AL ESTILO ESTACIÓN 18',
    price: 1.00,
    category: 'perros-panes',
    image: 'sin-imagen',
    isAvailable: true
  },
  {
    id: 'fast-pipe-salchicha',
    name: 'PERRO CALIENTE',
    description: 'SALCHICHA DE FULL SABOR',
    price: 1.50,
    category: 'perros-panes',
    image: 'pan-salchicha',
    isAvailable: true
  },
  {
    id: 'fast-3',
    name: 'SALCHIQUESO',
    description: 'SALCHICHA MAS QUESO CEBÚ',
    price: 2.00,
    category: 'perros-panes',
    image: 'hotdog',
    isAvailable: true
  },
  {
    id: 'fast-pan-proteina',
    name: 'PAN CON PROTEINA',
    description: 'PAN ESPECIAL CON RELLENO DE PROTEÍNA AL GUSTO',
    price: 2.50,
    category: 'perros-panes',
    image: 'pan-proteina-img',
    isAvailable: true
  },

  // ==========================================
  // 3. AREPAS & PATACONES
  // ==========================================
  {
    id: 'fast-1',
    name: 'AREPA CON PROTEÍNA',
    description: 'AREPA FRITA RELLENA CON SABOR',
    price: 1.50,
    category: 'arepas-patacones',
    image: 'arepa',
    isAvailable: true
  },
  {
    id: 'fast-6',
    name: 'MINI PATACÓN',
    description: 'MINI PATACÓN CRUJIENTE',
    price: 1.50,
    category: 'arepas-patacones',
    image: 'mini-patacon',
    isAvailable: true
  },
  {
    id: 'fast-5',
    name: 'PATACON PERSONAL',
    description: 'PLÁTANO FRITO CON TODO EL SABOR',
    price: 3.00,
    category: 'arepas-patacones',
    image: 'patacon',
    isAvailable: true
  },

  // ==========================================
  // 4. PAPAS FRITAS
  // ==========================================
  {
    id: 'fast-servicio-papas',
    name: 'SERVICIO DE PAPAS',
    description: 'PORCIÓN DE PAPAS FRITAS DORADAS Y CRUJIENTES',
    price: 1.00,
    category: 'papas-fritas',
    image: 'fries',
    isAvailable: true
  },
  {
    id: 'fast-salchipapa-tradicional',
    name: 'SALCHIPAPA TRADICIONAL',
    description: 'PAPAS FRITAS CON SALCHICHA Y SALSAS',
    price: 3.00,
    category: 'papas-fritas',
    image: 'salchipapa-tradicional-img',
    isAvailable: true
  },
  {
    id: 'fast-salchipapa-proteina',
    name: 'SALCHIPAPA CON PROTEINA',
    description: 'NUESTRA EXQUISITA SALCHIPAPA CON LA MEJOR PROTEINA',
    price: 5.00,
    category: 'papas-fritas',
    image: 'salchipapa-proteina-img',
    isAvailable: true
  },

  // ==========================================
  // 5. BEBIDAS
  // ==========================================
  {
    id: 'drink-1',
    name: 'VASO DE REFRESCO',
    description: 'SABOR TRADICIONAL DE LA COCA-COLA',
    price: 0.50,
    category: 'bebidas',
    image: 'soda',
    isAvailable: true
  },
  {
    id: 'drink-litro',
    name: 'REFRESCO DE LITRO',
    description: 'REFRESCO IDEAL PARA COMPARTIR',
    price: 1.50,
    category: 'bebidas',
    image: 'soda-litro',
    isAvailable: true
  },
  {
    id: 'drink-2',
    name: 'REFRESCO 1.5 Lts',
    description: 'SABOR TRADICIONAL DE LA COCA-COLA',
    price: 2.00,
    category: 'bebidas',
    image: 'soda-1-5',
    isAvailable: true
  },

  // ==========================================
  // 6. COMBOS PERSONALES Y DE PAREJA
  // ==========================================
  {
    id: 'combo-callejero-express',
    name: 'COMBO CALLEJERO EXPRESS',
    description: '2 PANES DE SALCHICHA + PAPAS FRITAS',
    price: 2.50,
    category: 'combos-personales',
    image: 'sin-imagen',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-street-burger',
    name: 'COMBO STREET BURGER',
    description: '2 HAMBURGUESAS SENCILLAS + PAPAS FRITAS',
    price: 2.50,
    category: 'combos-personales',
    image: 'sin-imagen',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-maracuchito',
    name: 'COMBO MARACUCHITO',
    description: '2 MINI PATACÓN + VASO REFRESCO',
    price: 3.00,
    category: 'combos-personales',
    image: 'sin-imagen',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-personal',
    name: 'COMBO PERSONAL',
    description: '2 AREPAS CON PROTEÍNA + VASO DE REFRESCO',
    price: 3.00,
    category: 'combos-personales',
    image: 'combo-personal',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-pana',
    name: 'COMBO PANA',
    description: '2 HAMBURGUESAS JUNIOR + PAPAS FRITAS + 2 VASOS DE REFRESCO',
    price: 5.00,
    category: 'combos-personales',
    image: 'sin-imagen',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-duo',
    name: 'COMBO DUO',
    description: '2 WHOPPER + 2 VASO REFRESCO',
    price: 7.00,
    category: 'combos-personales',
    image: 'combo-duo',
    isSpecial: true,
    isAvailable: true
  },

  // ==========================================
  // 7. COMBOS FAMILIARES Y GRUPALES
  // ==========================================
  {
    id: 'combo-full',
    name: 'COMBO FULL',
    description: '2 WHOPPER + SERVICIO DE PAPAS + TEQUEÑOS + REFRESCO DE LITRO',
    price: 10.00,
    category: 'combos-familiares',
    image: 'sin-imagen',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-callejero-familiar',
    name: 'COMBO CALLEJERO FAMILIAR',
    description: '10 PERROS CALIENTES SENCILLOS + REFRESCO DE LITRO',
    price: 10.00,
    category: 'combos-familiares',
    image: 'sin-imagen',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-familiar-sencillo',
    name: 'COMBO FAMILIAR',
    description: '10 HAMBURGUESAS SENCILLAS + REFRESCO DE LITRO',
    price: 10.00,
    category: 'combos-familiares',
    image: 'combo-familiar-img',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-estacion',
    name: 'COMBO ESTACIÓN',
    description: '2 AREPAS CON PROTEINA + 2 JUNIOR + 2 PERROS CALIENTES + REFRESCO 1L',
    price: 10.00,
    category: 'combos-familiares',
    image: 'combo-estacion',
    isSpecial: true,
    isAvailable: true
  },
  {
    id: 'combo-boom',
    name: 'COMBO BOOM',
    description: '3 WHOPPER + REFRESCO DE LITRO',
    price: 12.00,
    category: 'combos-familiares',
    image: 'combo-boom',
    isSpecial: true,
    isAvailable: true
  },

  // ==========================================
  // 8. PASTELITOS Y TEQUEÑOS (NO DISPONIBLES)
  // ==========================================
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
  }
];

export const BRAND_MOTTO = "EL PUNTO EXACTO DEL SABOR";
export const EXCHANGE_RATE = 983;
