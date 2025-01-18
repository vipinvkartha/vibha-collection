export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  specifications?: {
    material?: string;
    weight?: string;
    dimensions?: string;
    style?: string;
  };
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}