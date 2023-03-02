import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetailsUrl = 'https://jsonplaceholder.typicode.com/users/1'
  constructor(private http: HttpClient) { }
  
  getUserDetails(): Observable<any> {
    return this.http.get(this.userDetailsUrl).pipe(tap(data => console.log(data)))
  }
}
