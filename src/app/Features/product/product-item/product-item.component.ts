import { Component, Input, OnInit } from '@angular/core';
import { getProductPrice } from 'src/app/_utilities/utilities';
import { Product } from 'src/app/_Models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {};
  constructor() {}
  getPrice() {
    return getProductPrice(this.product);
  }
  ngOnInit(): void {}
}
