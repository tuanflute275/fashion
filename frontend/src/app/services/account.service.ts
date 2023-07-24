import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // account admin
  private API_GET_ADMIN = 'http://localhost:8000/account/getAdmin'
  private API_POST_ADMIN = 'http://localhost:8000/account/add'
  private API_GET_ONE_ADMIN = 'http://localhost:8000/account/getOneAdmin/'
  private API_PUT_ADMIN = 'http://localhost:8000/account/update/'
    //account user
    private API_GET_USER = 'http://localhost:8000/account/getUser'
    private API_GET_STATUS = 'http://localhost:8000/account/getStatus/'
    private API_GET_UPDATE = 'http://localhost:8000/account/updateStatus/'
    private API_DELETE_USER = 'http://localhost:8000/account/delete/'

    //dashboard
    private API_GET_COUNT_ADMIN = 'http://localhost:8000/account/getCountAdmin'
    private API_GET_COUNT_USER = 'http://localhost:8000/account/getCountUser'
    private API_GET_COUNT_CATEGORY = 'http://localhost:8000/category/getCountCategory'
    private API_GET_COUNT_PRODUCT = 'http://localhost:8000/product/getCountProduct'

    //search
    private API_SEARCH_ADMIN = 'http://localhost:8000/account/searchAdmin/?name='
    private API_SEARCH_USER = 'http://localhost:8000/account/searchUser/?name='



    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': "application/json",
        // Authorization: 'my-auth-token'
      }),
    };

    constructor(private httpClient: HttpClient) { }

    // account user
    public getUser(){
      const url = `${this.API_GET_USER}`
      return this.httpClient.get<any>(url, this.httpOptions)
    }
    public deleteUser(id: number): Observable<any> {
      const url = `${this.API_DELETE_USER}` + id
      return this.httpClient.delete<any>(url, this.httpOptions)
    }
    public getStatus(id: number): Observable<any> {
      const url = `${this.API_GET_STATUS}` + id
      return this.httpClient.get<any>(url, this.httpOptions)
    }
    public updateStatus(id: number, data: any): Observable<any> {
      const url = `${this.API_GET_UPDATE}` + id
      return this.httpClient.put<any>(url, data, this .httpOptions)
    }

    // account admin
    public getAdmin(){
      const url = `${this.API_GET_ADMIN}`
      return this.httpClient.get<any>(url, this.httpOptions)
    }
    public getOneAdmin(id: number){
      const url = `${this.API_GET_ONE_ADMIN}` + id
      return this.httpClient.get<any>(url, this.httpOptions)
    }
    public postAdmin(data: any){
      const url = `${this.API_POST_ADMIN}`
      return this.httpClient.post<any>(url,data, this.httpOptions)
    }
    public updateAdmin(id : number,data: any){
      const url = `${this.API_PUT_ADMIN}` + id
      return this.httpClient.put<any>(url,data, this.httpOptions)
    }

    //dashboard
    public getCountAdmin(){
      const url = `${this.API_GET_COUNT_ADMIN}`
      return this.httpClient.get<any>(url, this.httpOptions)
    }
    public getCountUser(){
      const url = `${this.API_GET_COUNT_USER}`
      return this.httpClient.get<any>(url, this.httpOptions)
    }
    public getCountCategory(){
      const url = `${this.API_GET_COUNT_CATEGORY}`
      return this.httpClient.get<any>(url, this.httpOptions)
    }
    public getCountProduct(){
      const url = `${this.API_GET_COUNT_PRODUCT}`
      return this.httpClient.get<any>(url, this.httpOptions)
    }

    //search
    public searchAdmin(data: any): Observable<any> {
      const url = `${this.API_SEARCH_ADMIN}` + data
      return this.httpClient.get<any>(url, this.httpOptions)
    }
    public searchUser(data: any): Observable<any> {
      const url = `${this.API_SEARCH_USER}` + data
      return this.httpClient.get<any>(url, this.httpOptions)
    }
}
