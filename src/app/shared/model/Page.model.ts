export interface Page<T> {
  currentPage: number;
  totalItemsPage: number;
  totalPages: number;
  totalItems: number;
  content: T[];
}
