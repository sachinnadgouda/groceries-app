export interface Grocery {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
}

export interface PaginationResponse {
  data: Grocery[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
