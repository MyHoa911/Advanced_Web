import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface MomoPaymentRequest {
  amount: number;
  orderInfo: string;
  orderId: string;
}

export interface MomoPaymentResponse {
  resultCode: number;
  message: string;
  payUrl: string;
  orderId: string;
  requestId: string;
}

@Injectable({
  providedIn: 'root',
})
export class MomoAPIService {
  constructor(private _http: HttpClient) {}

  createPayment(data: MomoPaymentRequest): Observable<MomoPaymentResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http
      .post<MomoPaymentResponse>('/momo/create-payment', data, { headers })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
