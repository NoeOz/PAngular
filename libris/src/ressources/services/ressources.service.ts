import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ressources } from 'src/shared/models/ressources';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  constructor(private http: HttpClient) { }

  post(res: Ressources) {
    return this.http.post('http://localhost:3000/ressources', res);
  }

  getResCat(idCat: number): Observable<Ressources[]> {
    return this.http.get<Ressources[]>('http://localhost:3000/ressources?categoriesId=' + idCat);
  }

  get(): Observable<Ressources[]> {
    return this.http.get<Ressources[]>('http://localhost:3000/ressources');
  }

  update(res: Ressources): Observable<any> {
    const httpotions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put('http://localhost:3000/ressources/' + res.id, res, httpotions).pipe();
  }

  delete(idRes: number) {
    return this.http.delete('http://localhost:3000/ressources/' + idRes);
  }
}
