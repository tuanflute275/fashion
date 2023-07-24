import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_GET_CATEGORY = 'http://localhost:8000/category/get';
  private API_GET_DETAIL_CATEGORY = 'http://localhost:8000/category/getOneCategory/';
  private API_SEARCH_CATEGORY = 'http://localhost:8000/category/searchCategory/?name=';
  private API_POST_CATEGORY = 'http://localhost:8000/category/add';
  private API_PUT_CATEGORY = 'http://localhost:8000/category/update/';
  private API_DELETE_CATEGORY = 'http://localhost:8000/category/delete/';


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };


  constructor(private httpClient: HttpClient) { }

  public getCategory(): Observable<any> {
    const url = `${this.API_GET_CATEGORY}`
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public searchCategory(data: any): Observable<any> {
    const url = `${this.API_SEARCH_CATEGORY}` + data
    return this.httpClient.get<any>(url, this.httpOptions)
  }

  public postCategory(data: any): Observable<any> {
    const url = `${this.API_POST_CATEGORY}`
    return this.httpClient.post<any>(url, data, this.httpOptions)
  }
  public deleteCategory(id: number): Observable<any> {
    const url = `${this.API_DELETE_CATEGORY}` + id
    return this.httpClient.delete<any>(url, this.httpOptions)
  }
  public getOneCategory(id: number): Observable<any> {
    const url = `${this.API_GET_DETAIL_CATEGORY}` + id
    return this.httpClient.get<any>(url, this.httpOptions)
  }
  public updateCategory(id: number, data: any): Observable<any> {
    const url = `${this.API_PUT_CATEGORY}` + id
    return this.httpClient.put<any>(url, data, this.httpOptions)
  }
}
