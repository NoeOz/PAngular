import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ressources } from 'src/shared/models/ressources';
import { RessourcesService } from 'src/ressources/services/ressources.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RessourcesComponent } from 'src/ressources/ressources.component';
import { Categories } from 'src/shared/models/categories';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/categories/services/categories.service';

@Component({
  selector: 'app-libris-dialog-res',
  templateUrl: './libris-dialog-res.component.html',
  styleUrls: ['./libris-dialog-res.component.scss']
})
export class LibrisDialogResComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Ressources, public serviceRes: RessourcesService, public snackBar: MatSnackBar,
              private categories: CategoriesService) { }

  objPutRes: Ressources = new Ressources();
  objRan: any;
  resComp: RessourcesComponent;

  categoriesObservable$: Observable<Categories[]>;

  ngOnInit(): void {
    this.categoriesObservable$ = this.categories.get();
  }

  openSnackBar(message: string, messageD: string) {
    this.snackBar.open(message, messageD, {duration: 2000});
  }

  update(f) {
    this.objPutRes.id = this.data.id;
    this.objPutRes.title = f.value.title;
    this.objPutRes.author = f.value.author;
    this.objPutRes.categoriesId = f.value.categoriesId;
    this.objPutRes.types = f.value.types;

    this.serviceRes.update(this.objPutRes).subscribe(() => {
      this.openSnackBar('Categorie enregistré', ' ');
    });
    this.objPutRes = new Ressources();
  }

  cancel() {
    this.resComp.close();
  }

}
