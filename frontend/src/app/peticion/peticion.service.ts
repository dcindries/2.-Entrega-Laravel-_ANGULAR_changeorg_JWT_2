import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peticion } from './peticion';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  private baseUrl = 'http://127.0.0.1:8000/api/peticiones';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Peticion[]> {
    return this.http.get<Peticion[]>(`${this.baseUrl}`);
  }

  listMine(): Observable<Peticion[]> {
    return this.http.get<Peticion[]>(`http://127.0.0.1:8000/api/mispeticiones`);
  }

  getById(id: number): Observable<Peticion> {
    return this.http.get<Peticion>(`${this.baseUrl}/${id}`);
  }

  create(data: FormData): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

update(id: number, data: any) {
  return this.http.post(`${this.baseUrl}/${id}`, data);
}

  

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
