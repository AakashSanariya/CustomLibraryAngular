import { NgModule } from '@angular/core';
import { ApiCallingComponent } from './api-calling.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [ApiCallingComponent],
  imports: [
      CommonModule,
      HttpClientModule,
  ],
  exports: [ApiCallingComponent]
})
export class ApiCallingModule { }
