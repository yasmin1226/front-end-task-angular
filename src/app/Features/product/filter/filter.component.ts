import { Component, OnInit } from '@angular/core';
import { Type } from '../../../_Models/type';
import { TypesService } from './../../types/types.service';
import { SizeService } from './../../size/size.service';
import { Size } from 'src/app/_Models/size';
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
    private typesService: TypesService,
    private sizesService: SizeService
  ) {}
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

  onTypeCkeck(e: MouseEvent) {
    console.log(e);
    const checkbox = e.target as HTMLInputElement;
    const id = +checkbox.value;
    if (checkbox.checked) {
      this.typesService.selectedTypes?.push({ id });
      console.log(this.typesService.selectedTypes);
    } else {
      const i = this.typesService.selectedTypes?.findIndex(
        (type) => type.id === id
      );
      // console.log(i);

      this.typesService.selectedTypes?.splice(i, 1);
    }
    console.log(this.typesService.selectedTypes);
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
