import { Component, OnInit } from '@angular/core';
import { Type } from '../../../_Models/type';
import { TypesService } from './../../types/types.service';
import { SizeService } from './../../size/size.service';
import { Size } from 'src/app/_Models/size';
import { ProductService } from './../product.service';
import { Product } from './../../../_Models/product';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  types: Type[] = [];
  sizes: Size[] = [];
  typesSelected: Type[] = [];
  sizesSelected: Size[] = [];
  constructor(
    private productService: ProductService,
    private typesService: TypesService,
    private sizesService: SizeService
  ) {}
  selectedTypes: Type[] = [];
  ngOnInit(): void {
    if (!this.types.length) {
      this.typesService.getAll().subscribe((types) => {
        this.types = types;
      });
      console.log('typess', this.types);
    }
    if (!this.sizes.length) {
      this.sizesService.getAll().subscribe((sizes) => {
        this.sizes = sizes;
      });
      console.log('sizes', this.sizes);
    }
  }

  isTypeOpen = true;
  isOpened = false;
  isColorOpened = true;
  filterProducts() {
    if (this.selectedTypes.length > 0) {
      let filteredProducts = this.productService.products;
      let newProducts: Product[] = [];
      this.selectedTypes.map((t) => {
        console.log('all prods', filteredProducts);
        console.log('triggered');
        console.log(this.selectedTypes);
        filteredProducts.forEach((prod) => {
          if (prod.type?.id == t.id) {
            newProducts.push(prod);
          }
        });
      });
      this.productService.modifyFilteredProducts(newProducts);
      // this.productService.filteredProducts.getValue();
    } else {
      this.productService.modifyFilteredProducts(this.productService.products);
    }
  }
  onTypeCkeck(e: MouseEvent) {
    console.log(e);
    const checkbox = e.target as HTMLInputElement;
    const id = +checkbox.value;
    if (checkbox.checked) {
      this.selectedTypes?.push({ id });
      console.log('selected', this.selectedTypes);
    } else {
      const i = this.selectedTypes?.findIndex((type) => type.id === id);
      // console.log(i);

      this.selectedTypes?.splice(i, 1);
    }
    this.filterProducts();
    console.log('filterd', this.productService.filteredProducts.getValue());
  }
  onSizeCkeck(e: MouseEvent) {
    console.log(e);
    const checkbox = e.target as HTMLInputElement;
    const id = +checkbox.value;
    if (checkbox.checked) {
      this.sizesSelected?.push({ id });
      console.log(this.sizesSelected);
    } else {
      const i = this.sizesSelected?.findIndex((size) => size.id === id);
      // console.log(i);

      this.sizesSelected?.splice(i, 1);
    }
    console.log(this.sizesSelected);
  }
}
