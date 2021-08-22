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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
//, OnChanges, AfterContentChecked
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterdProducts: Product[] = [];
  constructor(
    private productService: ProductService,
    private typesService: TypesService
  ) {}
  //   ngAfterContentChecked(): void {
  //   //  console.log('se filterd', this.filterdProducts);
  //   }

  //   ngOnChanges(changes: SimpleChanges): void {
  //  //   console.log('select types', this.typesService.selectedTypes);
  //   }
  subscription: any;
  ngOnInit(): void {
    if (!this.products.length) {
      this.subscription = this.productService.getAll().subscribe((products) => {
        // this.products = products;
        this.products = [...products];
      });

      console.log('products', this.products);
      console.log('types', this.typesService.selectedTypes);
    }
    this.productService.getFilteredProducts().subscribe((filterdProducts) => {
      this.filterdProducts = filterdProducts;
    });
  }
}
