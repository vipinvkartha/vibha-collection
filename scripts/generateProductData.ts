import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Product } from '../src/types';


interface ProductTemplate {
  namePrefix: string[];
  nameSuffix: string[];
  descriptions: string[];
  materials: string[];
  styles: string[];
  priceRange: [number, number];
}

const templates: Record<string, ProductTemplate> = {
  'Hand Chains': {
    namePrefix: ['Crystal', 'Pearl', 'Gold', 'Silver', 'Diamond'],
    nameSuffix: ['Butterfly', 'Flower', 'Leaf', 'Heart', 'Star'],
    descriptions: [
      'Delicate hand chain with {material} accents',
      'Elegant {style} design with intricate details',
      // Add more templates...
    ],
    materials: ['925 Sterling Silver', '14K Gold Plated', '18K Gold'],
    styles: ['Classic', 'Modern', 'Bohemian', 'Minimalist'],
    priceRange: [199.99, 599.99]
  },
  // Add templates for other categories...
};

const UNSPLASH_URLS = {
  'Hand Chains': [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&q=80',
    // Add more URLs for this category
  ],
  'Pendants': [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    // Add more URLs
  ],
  // Add URLs for other categories
};

function generateProduct(category: string, id: number): Product {
  const template = templates[category];
  const namePrefix = template.namePrefix[Math.floor(Math.random() * template.namePrefix.length)];
  const nameSuffix = template.nameSuffix[Math.floor(Math.random() * template.nameSuffix.length)];
  const material = template.materials[Math.floor(Math.random() * template.materials.length)];
  const style = template.styles[Math.floor(Math.random() * template.styles.length)];
  
  const price = Math.floor(Math.random() * (template.priceRange[1] - template.priceRange[0])) + template.priceRange[0];
  
  const categoryUrls = UNSPLASH_URLS[category] || [];
  const imageIndex = (id - 1) % categoryUrls.length;
  
  return {
    id,
    name: `${namePrefix} ${nameSuffix} ${category}`,
    description: template.descriptions[Math.floor(Math.random() * template.descriptions.length)]
      .replace('{material}', material)
      .replace('{style}', style),
    price,
    category,
    image: categoryUrls[imageIndex] || 'https://images.unsplash.com/photo-default?w=500&q=80', // fallback image
    specifications: {
      material,
      style,
      weight: `${(Math.random() * 10 + 2).toFixed(1)}g`
    },
    inStock: Math.random() > 0.2,
    isNew: Math.random() > 0.8,
    isFeatured: Math.random() > 0.8,
    discount: Math.random() > 0.8 ? Math.floor(Math.random() * 30 + 10) : undefined
  };
}

// Generate products for each category
const categories = ['Hand Chains', 'Pendants', 'Rings', 'Bracelets', 'Combos'];
let id = 1;
const products = categories.reduce((acc, category) => {
  const categoryProducts = Array.from({ length: 8 }, () => generateProduct(category, id++));
  return [...acc, ...categoryProducts];
}, [] as Product[]);

// Write to file
writeFileSync(
  join(__dirname, '../src/data/generated-products.ts'),
  `export const products = ${JSON.stringify(products, null, 2)};`
); 