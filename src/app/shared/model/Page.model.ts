export type PageRequest = {[key: string]: string | number};
export interface Page<T> {
  currentPage: number;
  totalItemsPage: number;
  totalPages: number;
  totalItems: number;
  content: T[];
}
