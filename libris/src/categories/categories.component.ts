import { Component, OnInit} from '@angular/core';
import { Categories } from 'src/shared/models/categories';
import { CategoriesService } from './services/categories.service';
import { Observable } from 'rxjs';
import { LibrisDialogComponent } from 'src/shared/components/libris-dialog/libris-dialog.component';
import {MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RessourcesComponent } from 'src/ressources/ressources.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private categories: CategoriesService, public dialog: MatDialog, private snackBar: MatSnackBar/*,
              private dialogUse: LibrisDialogComponent*/) { }

  categorie: Categories[];

  categoriesObservable$: Observable<Categories[]>;

  visible: boolean;
  selectedCat: Categories; // Edition
  selectedCategorie: Categories = new Categories(); // Creation
  dialogRef;

  ngOnInit(): void {
    this.categoriesObservable$ = this.categories.get();
    // console.log(this.categoriesObservable$);

    this.categoriesObservable$.subscribe({
        next: result => this.categorie = result,
        error: err => console.log(err),
        complete: () => console.log('finish')
      });

    this.visible = false;
  }

  openSnackBar(message: string, messageD: string) {
    this.snackBar.open(message, messageD, {duration: 2000});
  }

  onSelect(vis: boolean): void {
    this.visible = vis;
  }

  openDialog(categorie: Categories) {
    // this.dialogUse.cat = true;
    this.selectedCat = categorie;
    this.dialogRef = this.dialog.open(LibrisDialogComponent, {
      data: this.selectedCat
    });
  }

  addCat(corps: NgForm) {
    corps.value.id = this.categorie.length - 1;
    this.selectedCategorie.id = this.categorie[corps.value.id].id + 1;

    this.selectedCategorie.body = corps.value.body;
    console.log(this.selectedCategorie);
    this.categories.post(this.selectedCategorie).subscribe(() => {
      this.openSnackBar('Categorie enregistré', ' ');
      this.ngOnInit();
    });
    this.selectedCategorie = new Categories();
  }

  suppCat(id: number) {
    this.categories.delete(id).subscribe(() => {
      this.openSnackBar('Categorie supprimé', ' ');
      this.ngOnInit();
    });
  }

  close() {
    this.dialogRef.close();
  }

}
