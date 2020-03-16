import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourcesComponent } from './ressources.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [RessourcesComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule
  ],
  exports : [
    RessourcesComponent
  ]
})
export class RessourcesModule { }
