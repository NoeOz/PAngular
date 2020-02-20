import { Component, OnInit, Inject } from '@angular/core';
import { Categories } from 'src/shared/models/categories';
import { CategoriesService } from './services/categories.service';
import { Observable } from 'rxjs';
import { LibrisDialogComponent } from 'src/shared/components/libris-dialog/libris-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private categories: CategoriesService, public dialog: MatDialog) { }

  categorie: Categories[];
  displayedColumns: string[] = ['id', 'body'];

  categoriesObservable$: Observable<Categories[]>;

  selectedCat: Categories;

  ngOnInit(): void {
    this.categoriesObservable$ = this.categories.get();
    console.log(this.categoriesObservable$);

    this.categoriesObservable$.subscribe({
        next: result => this.categorie = result,
        error: err => console.log(err),
        complete: () => console.log('finish')
      });
  }
  onSelect(categorie: Categories): void {
    this.selectedCat = categorie;
  }

  openDialog(categorie: Categories) {
    this.selectedCat = categorie;
    this.dialog.open(LibrisDialogComponent, {
      data: {body: this.selectedCat.body, id: this.selectedCat.id}
    });
  }

}
