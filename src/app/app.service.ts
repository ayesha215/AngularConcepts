import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { getLocaleWeekEndRange } from '@angular/common';
import { productModel } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  // sharingData = { name: '' };

  // saveData(name: any) {
  //   this.sharingData.name = name;
  // }

  // getData() {
  //   return this.sharingData.name;
  // }

  login(profile: any): Observable<Object> {
    const headers = { 'content-type': 'application/json' };

    return this.http.post('http://localhost:3000/api/v1/auth', profile, {
      headers: headers,
    });
  }

  Register(profile: any) {
    const headers = { 'content-type': 'application/json' };

    return this.http.post('http://localhost:3000/api/v1/users', profile, {
      headers: headers,
    });
  }

  ShowProfile() {
    const token = localStorage.getItem('key') || '';
    const headers = {
      'content-type': 'application/json',
      Authorization: token,
    };
    return this.http.get('http://localhost:3000/api/v1/users', {
      headers: headers,
    });
  }

  UpdateProfile(profile: any) {
    const token = localStorage.getItem('key') || '';

    const headers = {
      'content-type': 'application/json',
      Authorization: token,
    };

    return this.http.patch(`http://localhost:3000/api/v1/users`, profile, {
      headers: headers,
    });
  }

  getCurrentData() {
    const token = localStorage.getItem('key') || '';

    const headers = {
      'content-type': 'application/json',
      Authorization: token,
    };
    return this.http.get('http://localhost:3000/api/v1/users', {
      headers: headers,
    });
  }

  isLoggedIn() {
    let token = localStorage.getItem('key');
    if (token != null) {
      return true;
    }
    return false;
  }

  getAllProducts(): Observable<productModel[]> {
    return this.http.get<productModel[]>('https://fakestoreapi.com/products');
  }
}
