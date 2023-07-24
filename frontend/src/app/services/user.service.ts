import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: any;
  tokenPayload: any;
  private REST_API_SIGNUP = 'http://localhost:8000/user/signup';
  private REST_API_FORGOT_PASSWORD = 'http://localhost:8000/user/fogotPassword';
  private REST_API_LOGIN = 'http://localhost:8000/user/login';
  private REST_API_TOKEN = 'http://localhost:8000/user/checkToken';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  public signup(data: any): Observable<any> {
    const url = `${this.REST_API_SIGNUP}`;
    return this.httpClient.post<any>(url, data, this.httpOptions);
  }
  public forgotPassword(data: any): Observable<any> {
    const url = `${this.REST_API_FORGOT_PASSWORD}`;
    return this.httpClient.post<any>(url, data, this.httpOptions);
  }
  public login(data: any): Observable<any> {
    const url = `${this.REST_API_LOGIN}`;
    return this.httpClient.post<any>(url, data, this.httpOptions);
  }

  public checkToken() {
    const url = `${this.REST_API_TOKEN}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  getCarts() {
    let cartJson = localStorage.getItem('cart')
    if (cartJson) {
      return JSON.parse(cartJson)
    } else {
      return [];
    }
  }

  getAccountInfo() {
    this.token = localStorage.getItem('token')
    this.tokenPayload = jwt_decode(this.token);
    return this.tokenPayload
  }

  saveCart(carts: any) {
    let cartJson = JSON.stringify(carts)
    localStorage.setItem('cart', cartJson)
  }
  getCartTotalPrice() {
    let carts = this.getCarts()
    let total: number = 0;
    carts.forEach((item: any) => {
      total += item.quantity * item.price
    });
    return total;
  }
  getCartTotalQuantity() {
    let carts = this.getCarts()
    let total: number = 0;
    carts.forEach((item: any) => {
      total += item.quantity
    });
    return total;
  }

}
