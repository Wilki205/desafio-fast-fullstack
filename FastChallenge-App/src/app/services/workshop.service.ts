import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  private apiUrl = 'http://localhost:5171/api/Workshops';

  constructor(private http: HttpClient) { }

  getWorkshops(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getWorkshopById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  addWorkshop(workshop: any): Observable<any> {
    return this.http.post(this.apiUrl, workshop);
  }

  updateWorkshop(id: number, workshop: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, workshop);
  }

  deleteWorkshop(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}