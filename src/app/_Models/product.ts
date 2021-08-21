import { Type } from './type';
import { Catogrie } from './catogrie';

export interface Product {
  id?: number;
  name?: String;

  imageUrls?: String[];
  price?: number;
  discount?: number;

  catogrie?: Catogrie;
  colors?: String[];
  sizes?: number[];
  description?: string;
  type?: Type;
}
