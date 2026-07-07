/**
 * Domain types for the product catalog. Kept separate from UI/prop types
 * so the shape of the data layer can evolve independently of components.
 */

export type ProductCategory =
  "Laptops" | "Phones" | "Tablets" | "Audio" | "Wearables" | "Accessories" | "Monitors";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  discountPrice: number | null;
  description: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  stock: number;
  featured: boolean;
  image: string;
  gallery: string[];
  specifications: ProductSpecification[];
  colors: string[];
  storage: string[];
  tags: string[];
}

export type SortOption = "featured" | "price-asc" | "price-desc" | "alphabetical";

export interface ProductFilters {
  query: string;
  category: ProductCategory | "All";
  sort: SortOption;
}
