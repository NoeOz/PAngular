import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from 'src/shared/models/categories';
import { HttpClient } from '@angular/common/http';

@Injectable(

)
export class CategoriesService {

  constructor(private http: HttpClient) { }

  get(): Observable<Categories[]> {
    return this.http.get<Categories[]>('http://localhost:3000/categories');
  }
}
