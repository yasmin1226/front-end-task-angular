import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Size } from './../../_Models/size';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  sizes: Size[] = [];
  constructor(private http: HttpClient) {}
  getAll(): Observable<Size[]> {
    return this.http.get<Size[]>('http://localhost:3000/sizes').pipe(
      tap((sizes) => {
        this.sizes = sizes;
        console.log('sizes', sizes);
        console.log(this.sizes);
        return sizes;
      })
    );
  }
}
