import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TableModule } from '../components/table/table.module';
import { NavbarModule } from '../components/navbar/navbar.module';


@NgModule({
    declarations: [
        HomeComponent,

    ],
    imports: [
        CommonModule,
        TableModule,
        NavbarModule

    ],
    exports: [

    ]

})
export class HomeModule { }
