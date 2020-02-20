import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrisToolbarComponent } from './components/libris-toolbar/libris-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LibrisDialogComponent } from './components/libris-dialog/libris-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LibrisToolbarComponent, NotFoundComponent, LibrisDialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  entryComponents: [LibrisDialogComponent],
  exports: [
    LibrisToolbarComponent,
    NotFoundComponent,
    LibrisDialogComponent
  ]
})
export class SharedModule {
}
