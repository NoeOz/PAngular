import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from './services/categories.service';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    SharedModule
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
export class CategoriesModule {
}
