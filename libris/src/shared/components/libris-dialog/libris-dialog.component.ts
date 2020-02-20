import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-libris-dialog',
  templateUrl: './libris-dialog.component.html',
  styleUrls: ['./libris-dialog.component.scss']
})
export class LibrisDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
