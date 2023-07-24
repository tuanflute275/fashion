import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {
    this.currentUser = new BehaviorSubject(null);
    this.currentUser$ = this.currentUser.asObservable();
  }
  private currentUser!: BehaviorSubject<any>;
  public currentUser$!: Observable<any>;

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    } else {
      return true;
    }
  }
  public setCurrentUser(user: any) {
    if (!user) return;
    this.currentUser.next(user);
  }
}
