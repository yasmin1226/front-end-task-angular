import {
  AfterContentChecked,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/_Models/product';
import { ProductService } from './../product.service';
import { TypesService } from './../../types/types.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent
  implements OnInit, OnChanges, AfterContentChecked
{
  products: Product[] = [];
  filterdProducts: Product[] = [];
  constructor(
    private productService: ProductService,
    private typesService: TypesService
  ) {}
  ngAfterContentChecked(): void {
    console.log('se filterd', this.filterdProducts);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('select types', this.typesService.selectedTypes);
  }

  ngOnInit(): void {
    if (!this.products.length) {
      this.productService.getAll().subscribe((products) => {
        this.products = products;
        this.productService.filteredProducts = products;
        this.filterdProducts = products;
      });
      console.log('products', this.products);
      console.log('types', this.typesService.selectedTypes);
    }
  }
}
