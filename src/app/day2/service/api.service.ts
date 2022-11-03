import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(
    private http: HttpClient,
 
  ) { }

  getRecords() {
 
    return this.http.get("https://reqres.in/api/users?page=1")
      .pipe(
        catchError(err => {

          return of([]);
        }),
      ) as Observable<any>;
  }
 
}
