import { Producto } from './producto';

export interface RespuestaMLApi {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Producto[];
  sort: Sort;
  available_sorts: AvailableSort[];
  filters: any[];
  available_filters: AvailableFilter[];
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface AvailableSort {
  id: string;
  name: string;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: Value[];
}

export interface Value {
  id: string;
  name: string;
  results: number;
}
