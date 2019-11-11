import { Component, OnInit, Input } from '@angular/core';
import {ApiCallingService} from "./api-calling.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'lib-ApiCalling',
  templateUrl: './api-calling.component.html',
  styleUrls: ['./api-calling.component.css']
})
export class ApiCallingComponent implements OnInit {

  constructor(private apiService: ApiCallingService/*, private http: HttpClient*/) { }

  @Input() userId: any;
  @Input() user: any;

  ngOnInit() {
    console.log(this.user);
    console.log(this.userId);
    /*let baseUrl = 'http://api.userregistration.com/api/';
     let name = this.http.get(baseUrl +'user').subscribe();
    console.log(name);*/
  }

}
