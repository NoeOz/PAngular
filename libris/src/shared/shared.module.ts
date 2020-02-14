import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrisToolbarComponent } from './components/libris-toolbar/libris-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LibrisToolbarComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    LibrisToolbarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
