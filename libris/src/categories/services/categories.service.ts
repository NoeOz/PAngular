import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from 'src/shared/models/categories';
import { HttpClient } from '@angular/common/http';

@Injectable(
)
export class CategoriesService {

  constructor(private http: HttpClient) { }

  post(cat: Categories) {
    return this.http.post('http://localhost:3000/categories', cat);
  }

  get(): Observable<Categories[]> {
    return this.http.get<Categories[]>('http://localhost:3000/categories');
  }

  update(cat: Categories): Observable<any> {
    const httpotions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put('http://localhost:3000/categories/' + cat.id, cat, httpotions).pipe();
  }

  delete(idCat: number) {
    return this.http.delete('http://localhost:3000/categories/' + idCat);
  }
}
