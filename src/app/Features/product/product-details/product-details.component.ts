import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_Models/product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  //productId: Number;
  product: Product = {};
  ngOnInit(): void {
    const productId = +this.activatedRoute.snapshot.params.id;
    console.log(productId);
    this.product = this.productService.getByID(productId) || {};
    console.log(this.product);
  }
}
