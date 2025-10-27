import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private apiUrl = 'http://localhost:5171/api/Colaboradores';

  constructor(private http: HttpClient) { }

  getColaboradores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getColaboradorById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  addColaborador(colaborador: { nome: string }): Observable<any> {
    return this.http.post(this.apiUrl, colaborador);
  }

  updateColaborador(id: number, colaborador: { nome: string }): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, colaborador);
  }

  deleteColaborador(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}