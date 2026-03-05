import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3002/login', { username, password }, { withCredentials: true });
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3002/register', { username, password });
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn.next(value);
  }

  getLoggedIn(): boolean {
    return this.isLoggedIn.value;
  }
}
