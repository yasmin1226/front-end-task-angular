import { Product } from '../_Models/product';

export function getProductPrice(product: Product) {
  return product.discount
    ? (product.price || 0) - product.discount
    : product.price;
}
