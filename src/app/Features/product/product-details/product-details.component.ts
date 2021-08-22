import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_Models/product';
import { getProductPrice } from 'src/app/_utilities/utilities';
import { TypesService } from '../../types/types.service';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  count: number = 1;

  constructor(
    private productService: ProductService,
    private typesService: TypesService,
    private activatedRoute: ActivatedRoute
  ) {}
  //productId: Number;
  product: Product = {};
  products: Product[] = [];
  getPrice() {
    return getProductPrice(this.product);
  }
  ngOnInit(): void {
    if (!this.products.length) {
      this.productService.getAll().subscribe((products) => {
        this.products = products;
      });
    }
    const productId = +this.activatedRoute.snapshot.params.id;
    console.log('ID', productId);
    this.product = this.productService.getByID(productId) || {};
    console.log('PRODUCT', this.product);
    console.log(this.product.discount);
    console.log(this.pType);
  }
  pType = this.typesService.getById(this.product?.type?.id || 0);
}
