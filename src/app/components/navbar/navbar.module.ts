import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [NavbarComponent],

  imports: [
    MatIconModule,
    CommonModule,
    MatToolbarModule,
    MatDialogModule,


  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
