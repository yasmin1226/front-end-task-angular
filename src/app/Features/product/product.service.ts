import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_Models/product';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  products: Product[] = [];
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products').pipe(
      tap((products) => {
        console.log('prs', products);
        this.products = products;
        return products;
      })
    );
  }
  getByID(id: number) {
    const product = this.products.find((p) => p.id === id);
    console.log('product', product);
    return product;
  }

  shoppingItems: Product[] = [];
  filteredProducts: Product[] = this.products;
}
