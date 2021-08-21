import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Models/product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    if (!this.products.length) {
      this.productService.getAll().subscribe((products) => {
        this.products = products;
      });
      console.log('products', this.products);
    }
  }
}
