import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Categories } from 'src/shared/models/categories';
import { CategoriesService } from 'src/categories/services/categories.service';
import { CategoriesComponent } from 'src/categories/categories.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-libris-dialog',
  templateUrl: './libris-dialog.component.html',
  styleUrls: ['./libris-dialog.component.scss']
})
export class LibrisDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Categories, public serviceCat: CategoriesService, public snackBar: MatSnackBar) { }

  objPutCat: Categories = new Categories();
  objRan: any;
  catComp: CategoriesComponent;

  ngOnInit(): void {}

  openSnackBar(message: string, messageD: string) {
    this.snackBar.open(message, messageD, {duration: 2000});
  }

  update(f) {
    this.objPutCat.id = this.data.id;
    this.objPutCat.body = f.value.body;
    this.serviceCat.update(this.objPutCat).subscribe(() => {
      this.openSnackBar('Categorie enregistré', ' ');
    });
    this.objPutCat = new Categories();
  }

  cancel() {
    this.catComp.close();
  }

}
