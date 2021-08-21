import { Component, OnInit } from '@angular/core';
import { Type } from '../../../_Models/type';
import { TypesService } from './../../types/types.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  types: Type[] = [];
  constructor(private typesService: TypesService) {}
  ngOnInit(): void {
    if (!this.types.length) {
      this.typesService.getAll().subscribe((types) => {
        this.types = types;
      });
      console.log('typess', this.types);
    }
  }
  isTypeOpen = true;
  isOpened = false;
  isColorOpened = true;
}
