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
        this.products = products;
        return products;
      })
    );
  }
  getByID(id: number) {
    return this.products.find((p) => (p.id = id));
  }

  shoppingItems: Product[] = [];
  filteredProducts: Product[] = this.products;
}