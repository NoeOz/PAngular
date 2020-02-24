import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Categories } from 'src/shared/models/categories';
import { CategoriesService } from 'src/categories/services/categories.service';
import { CategoriesComponent } from 'src/categories/categories.component';

@Component({
  selector: 'app-libris-dialog',
  templateUrl: './libris-dialog.component.html',
  styleUrls: ['./libris-dialog.component.scss']
})
export class LibrisDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Categories, public serviceCat: CategoriesService) { }

  objPutCat: Categories = new Categories();
  catComp: CategoriesComponent;

  ngOnInit(): void {
  }

  update(f) {
    this.objPutCat.id = this.data.id;
    this.objPutCat.body = f.value.body;
    this.serviceCat.update(this.objPutCat).subscribe(() => {
      console.log('Categorie mis à jour');
      // window.location.reload();
      this.catComp.ngOnInit();
    });
    this.objPutCat = new Categories();
  }

  cancel() {
    this.catComp.close();
  }

}
