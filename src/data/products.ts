import type { Product } from '../types';

const UNSPLASH_URLS = {
  'Hand Chains': [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=80',
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&q=80'
  ],
  'Pendants': [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=80',
    'https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=500&q=80'
  ],
  'Rings': [
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80',
    'https://images.unsplash.com/photo-1603561593640-0b5e5c4a4d11?w=500&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80'
  ],
  'Bracelets': [
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80',
    'https://images.unsplash.com/photo-1602752250015-52934bc45613?w=500&q=80'
  ],
  'Combos': [
    'https://images.unsplash.com/photo-1576723417715-6b408c988c23?w=500&q=80',
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&q=80',
    'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500&q=80'
  ]
};

export const handChains: Product[] = [
  {
    id: 1,
    name: "Crystal Butterfly Hand Chain",
    description: "Delicate butterfly-themed hand chain with Austrian crystals",
    price: 299.99,
    category: "Hand Chains",
    image: UNSPLASH_URLS['Hand Chains'][0],
    specifications: {
      material: "925 Sterling Silver, Austrian Crystals",
      weight: "8.5g",
      style: "Butterfly Design"
    },
    inStock: true,
    isNew: true
  },
  {
    id: 2,
    name: "Pearl Elegance Hand Chain",
    description: "Freshwater pearl hand chain with gold-plated details",
    price: 349.99,
    category: "Hand Chains",
    image: UNSPLASH_URLS['Hand Chains'][1],
    specifications: {
      material: "14K Gold Plated, Freshwater Pearls",
      weight: "10g",
      style: "Classic"
    },
    inStock: true,
    isFeatured: true
  }
];

export const pendants: Product[] = [
  {
    id: 101,
    name: "Sapphire Dream Pendant",
    description: "Stunning sapphire pendant with diamond accents",
    price: 599.99,
    category: "Pendants",
    image: UNSPLASH_URLS['Pendants'][0],
    specifications: {
      material: "18K White Gold, Natural Sapphire",
      weight: "3.2g",
      style: "Modern"
    },
    inStock: true,
    discount: 10
  }
];

export const rings: Product[] = [
  {
    id: 201,
    name: "Rose Gold Stack Ring Set",
    description: "Set of three stackable rose gold rings",
    price: 449.99,
    category: "Rings",
    image: UNSPLASH_URLS['Rings'][0],
    specifications: {
      material: "18K Rose Gold",
      weight: "4.5g",
      style: "Contemporary"
    },
    inStock: true,
    isFeatured: true
  }
];

export const bracelets: Product[] = [
  {
    id: 301,
    name: "Diamond Tennis Bracelet",
    description: "Classic tennis bracelet with brilliant-cut diamonds",
    price: 1299.99,
    category: "Bracelets",
    image: UNSPLASH_URLS['Bracelets'][0],
    specifications: {
      material: "18K White Gold, Diamonds",
      weight: "12g",
      style: "Classic"
    },
    inStock: true,
    isNew: true
  }
];

export const combos: Product[] = [
  {
    id: 401,
    name: "Pearl Necklace & Earring Set",
    description: "Matching freshwater pearl necklace and earring set",
    price: 799.99,
    category: "Combos",
    image: UNSPLASH_URLS['Combos'][0],
    specifications: {
      material: "925 Sterling Silver, Freshwater Pearls",
      weight: "25g",
      style: "Elegant"
    },
    inStock: true,
    discount: 15
  }
];

// Combine all products into one array
export const allProducts: Product[] = [
  ...handChains,
  ...pendants,
  ...rings,
  ...bracelets,
  ...combos
];

// Export helper functions
export const getProductsByCategory = (category: string) => 
  allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());

export const getFeaturedProducts = () => 
  allProducts.filter(product => product.isFeatured);

export const getNewArrivals = () => 
  allProducts.filter(product => product.isNew);

export const getDiscountedProducts = () => 
  allProducts.filter(product => product.discount && product.discount > 0); 