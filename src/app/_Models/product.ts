import { Type } from './type';
import { Catogrie } from './catogrie';
import { Size } from './size';
import { Color } from './color';

export interface Product {
  id?: number;
  name?: String;

  imageUrls?: String[];
  price?: number;
  discount?: number;

  catogrie?: Catogrie;
  colors?: Color[];
  sizes?: Size[];
  description?: string;
  type?: Type;
}
