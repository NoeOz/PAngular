import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrisToolbarComponent } from './components/libris-toolbar/libris-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LibrisDialogComponent } from './components/libris-dialog/libris-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { LibrisDialogResComponent } from './components/libris-dialog-res/libris-dialog-res.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [LibrisToolbarComponent, NotFoundComponent, LibrisDialogComponent, LibrisDialogResComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  // entryComponents: [LibrisDialogComponent],
  exports: [
    LibrisToolbarComponent,
    NotFoundComponent,
    LibrisDialogComponent
  ]
})
export class SharedModule {
}
