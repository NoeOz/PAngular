import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourcesComponent } from './ressources.component';
import { RessourcesService } from './services/ressources.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [RessourcesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:
  [
    RessourcesComponent
  ],
  providers:
  [
    RessourcesService
  ]
})
export class RessourcesModule { }
