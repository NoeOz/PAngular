import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from './services/categories.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  exports:
  [
    CategoriesComponent
  ],
  providers:
  [
    CategoriesService
  ]
})
export class CategoriesModule { }
