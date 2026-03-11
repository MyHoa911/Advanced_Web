import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Ex63Product {
  _id?: string;
  name: string;
  price: number;
  image?: string;
  category?: string;
  description?: string;
  stock?: number;
}

@Injectable({
  providedIn: 'root',
})
export class Ex63ProductService {
  private apiUrl = '/ex63';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Ex63Product[]> {
    return this.http.get<Ex63Product[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: string): Observable<Ex63Product> {
    return this.http.get<Ex63Product>(`${this.apiUrl}/products/${id}`);
  }
}

// backward-compat alias
export { Ex63ProductService as Product };
