import type { Product } from '../types';

// Start directly with the product data
export const handChains: Product[] = [
  {
    id: 1,
    name: "Crystal Butterfly Hand Chain",
    description: "Delicate butterfly-themed hand chain with Austrian crystals",
    price: 299.99,
    category: "Hand Chains",
    image: "/products/hand-chains/butterfly-chain-1.jpg",
    images: [
      "/products/hand-chains/butterfly-chain-1.jpg",
      "/products/hand-chains/butterfly-chain-2.jpg",
      "/products/hand-chains/butterfly-chain-3.jpg"
    ],
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
    image: "/products/hand-chains/pearl-chain-1.jpg",
    specifications: {
      material: "14K Gold Plated, Freshwater Pearls",
      weight: "10g",
      style: "Classic"
    },
    inStock: true,
    isFeatured: true
  },
  // Add more hand chains...
];

export const pendants: Product[] = [
  {
    id: 101,
    name: "Sapphire Dream Pendant",
    description: "Stunning sapphire pendant with diamond accents",
    price: 599.99,
    category: "Pendants",
    image: "/products/pendants/sapphire-pendant-1.jpg",
    specifications: {
      material: "18K White Gold, Natural Sapphire",
      weight: "3.2g",
      style: "Modern"
    },
    inStock: true,
    discount: 10
  },
  // Add more pendants...
];

// Continue with other categories...
export const rings: Product[] = [/* ... */];
export const bracelets: Product[] = [/* ... */];
export const combos: Product[] = [/* ... */];

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