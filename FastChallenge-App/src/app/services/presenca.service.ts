import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresencaService {
  private apiUrl = 'http://localhost:5171/api/Presenca';

  constructor(private http: HttpClient) { }

  adicionarPresenca(dados: { colaboradorId: number, workshopId: number }): Observable<any> {

  return this.http.post(this.apiUrl, dados, { responseType: 'text' });
}
}