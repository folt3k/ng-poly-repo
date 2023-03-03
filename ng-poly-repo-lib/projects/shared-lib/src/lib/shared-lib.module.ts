import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    SharedLibComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    SharedLibComponent
  ]
})
export class SharedLibModule { }
