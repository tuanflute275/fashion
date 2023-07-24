import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_GET_PRODUCT = 'http://localhost:8000/product/get';
  private API_GET_DETAIL_PRODUCT = 'http://localhost:8000/PRODUCT/getOneProduct/';
  private API_POST_PRODUCT = 'http://localhost:8000/product/add';
  private API_PUT_PRODUCT = 'http://localhost:8000/product/update/';
  private API_DELETE_PRODUCT = 'http://localhost:8000/product/delete/';
  private API_SEARCH_PRODUCT = 'http://localhost:8000/product/searchProduct/?name=';
  private API_GET_BY_CATEGORY = 'http://localhost:8000/product/getByCategory/';
  private API_GET_BY_ID = 'http://localhost:8000/product/getById/';
  private API_GET_TOP = 'http://localhost:8000/product/getTop';

  //blog
  private API_GET_BLOG = 'http://localhost:8000/blog'
  private API_GET_LIMIT_BLOG = 'http://localhost:8000/blog_limit'

  //favorite
  private API_POST_FAVORITE = 'http://localhost:8000/favorite/add'
  private API_GET_FAVORITE = 'http://localhost:8000/favorite/get/'
  private API_GET_COUNT_FAVORITE = 'http://localhost:8000/favorite/getCount/'
  private API_DELETE_FAVORITE = 'http://localhost:8000/favorite/delete/'

  //favorite
  private API_POST_CART = 'http://localhost:8000/cart/add'
  private API_GET_CART = 'http://localhost:8000/cart/get/'
  private API_GET_COUNT_CART = 'http://localhost:8000/cart/getCount/'
  private API_DELETE_CART = 'http://localhost:8000/cart/delete/'


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };


  constructor(private httpClient: HttpClient) { }

  public getProduct(): Observable<any> {
    const url = `${this.API_GET_PRODUCT}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public postProduct(data: any): Observable<any> {
    const url = `${this.API_POST_PRODUCT}`
    return this.httpClient.post<any>(url, data, this.httpOptions)
  }
  public deleteProduct(id: number): Observable<any> {
    const url = `${this.API_DELETE_PRODUCT}` + id
    return this.httpClient.delete<any>(url, this.httpOptions)
  }
  public getOneProduct(id: number): Observable<any> {
    const url = `${this.API_GET_DETAIL_PRODUCT}` + id
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public updateProduct(id: number, data: any): Observable<any> {
    const url = `${this.API_PUT_PRODUCT}` + id
    return this.httpClient.put<any>(url, data, this .httpOptions)
  }
  public searchProduct(data: any): Observable<any> {
    const url = `${this.API_SEARCH_PRODUCT}` + data
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public getByCategory(id: number): Observable<any> {
    const url = `${this.API_GET_BY_CATEGORY}` + id
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public getById(id: number): Observable<any> {
    const url = `${this.API_GET_BY_ID}` + id
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public getTop(): Observable<any> {
    const url = `${this.API_GET_TOP}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }

  //blog
  public getBlog(): Observable<any> {
    const url = `${this.API_GET_BLOG}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public getBlogLimit(): Observable<any> {
    const url = `${this.API_GET_LIMIT_BLOG}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  //FAVORITE
  public getFavorite(account_id: number): Observable<any> {
    const url = `${this.API_GET_FAVORITE}` + account_id
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public getCountFavorite(account_id: number): Observable<any> {
    const url = `${this.API_GET_COUNT_FAVORITE}` + account_id
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public postFavorite(data: any): Observable<any> {
    const url = `${this.API_POST_FAVORITE}`
    return this.httpClient.post<any>(url, data, this.httpOptions)
  }
  public deleteFavorite(account_id: number, product_id: number): Observable<any> {
    const url = `${this.API_DELETE_FAVORITE}` + account_id + '/' + product_id
    return this.httpClient.delete<any>(url, this.httpOptions)
  }

  //CART
  public getCart(account_id: number): Observable<any> {
    const url = `${this.API_GET_CART}` + account_id
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public getCountCart(account_id: number): Observable<any> {
    const url = `${this.API_GET_COUNT_CART}` + account_id
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public postCart(data: any): Observable<any> {
    const url = `${this.API_POST_CART}`
    return this.httpClient.post<any>(url, data, this.httpOptions)
  }
  public deleteCart(account_id: number, product_id: number): Observable<any> {
    const url = `${this.API_DELETE_CART}` + account_id + '/' + product_id
    return this.httpClient.delete<any>(url, this.httpOptions)
  }
}
