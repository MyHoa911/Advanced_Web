import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:3002';

@Injectable({ providedIn: 'root' })
export class Ex58Service {
  constructor(private http: HttpClient) {}

  private jsonHeaders() {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getAllFashions(): Observable<any[]> {
    return this.http.get<any[]>(`${API}/fashions`);
  }

  getFashionsByStyle(style: string): Observable<any[]> {
    return this.http.get<any[]>(`${API}/fashions?style=${encodeURIComponent(style)}`);
  }

  getFashionById(id: string): Observable<any> {
    return this.http.get<any>(`${API}/fashions/${id}`);
  }

  createFashion(data: any): Observable<any> {
    return this.http.post<any>(`${API}/fashions`, data, { headers: this.jsonHeaders() });
  }

  updateFashion(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${API}/fashions/${id}`, data, { headers: this.jsonHeaders() });
  }

  deleteFashion(id: string): Observable<any> {
    return this.http.delete<any>(`${API}/fashions/${id}`);
  }
}
