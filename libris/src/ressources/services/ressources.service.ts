import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ressources } from 'src/shared/models/ressources';
import { HttpClient } from '@angular/common/http';

@Injectable(
)
export class RessourcesService {

  constructor(private http: HttpClient) { }

  post(res: Ressources) {
    return this.http.post('http://localhost:3000/ressources', res);
  }

  get(): Observable<Ressources[]> {
    return this.http.get<Ressources[]>('http://localhost:3000/ressources');
  }

  update(res: Ressources): Observable<Ressources[]> {
    return this.http.put<Ressources[]>('http://localhost:3000/ressources', res);
  }

  delete(idRes: number) {
    return this.http.delete('http://localhost:3000/ressources/' + idRes);
  }
}
