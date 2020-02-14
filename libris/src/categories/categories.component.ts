import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/shared/models/categories';
import { CategoriesService } from './services/categories.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  /*toto = 'AAA';
  Onclic() {
    alert('hello world');
  }*/

  categorie:Categories[];
  displayedColumns: string[] = ['id', 'body'];

  categoriesObservable$: Observable<Categories[]>;
  constructor(private categories: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesObservable$ = this.categories.get();
    console.log(this.categoriesObservable$);

    this.categoriesObservable$.subscribe({
        next: result => this.categorie = result,
        error: err => console.log(err),
        complete: () => console.log('finish')
      });
  }

}
