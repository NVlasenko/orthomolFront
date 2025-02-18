// types/Filters.ts

export interface Filters {
  priceRange: { min: number; max: number };
  gender: string;
  ageCategory: string;
  purpose: string;
  taste: string;
  shape: string;
  hit: boolean;
  details: string;
  traceElements: string;
}

export interface SidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}
