import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators/map";

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {

  constructor(/*private http: HttpClient*/) { }
  baseUrl = 'http://api.userregistration.com/api/';
  /*listUser(){
    return this.http.get(this.baseUrl +'user').pipe(map(result => {
      return result;
    }));
  }*/
}
