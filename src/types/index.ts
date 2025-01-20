export type ProductDescription = {
  text: string[];
};

export type ProductRecommendation = {
  title?: string[];
  text?: string[];
};

export type Product = {
  id: number;
  name: string;
  appointment: string;
  category: string;
  priceRegular: number;
  imgProductRef: string;
  imgCategoryRef: string;
  inStock: boolean;
  articleNumber: string;
  brand: string;
  shape: string;
  packaging: number;
  expirationDate: string;
  description: ProductDescription[];
  recommendation: ProductRecommendation[];
};