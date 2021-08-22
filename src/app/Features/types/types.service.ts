import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Type } from '../../_Models/type';
@Injectable({
  providedIn: 'root',
})
export class TypesService {
  types: Type[] = [];
  selectedTypes: Type[] = [];
  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>('http://localhost:3000/types').pipe(
      tap((types) => {
        this.types = types;
        // console.log(this.types);
        return types;
      })
    );
  }
  getById(id: number) {
    const type = this.types.find((t) => (t.id = id));
    console.log('type', type);
  }
  constructor(private http: HttpClient) {}
}
