import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { TableComponent } from './table.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


@NgModule({

  declarations: [TableComponent],

  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule

  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
