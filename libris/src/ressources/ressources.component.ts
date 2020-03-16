import { Component, OnInit } from '@angular/core';
import { Ressources } from 'src/shared/models/ressources';
import { Categories } from 'src/shared/models/categories';
import { RessourcesService } from './services/ressources.service';
import { CategoriesService } from 'src/categories/services/categories.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LibrisDialogResComponent } from 'src/shared/components/libris-dialog-res/libris-dialog-res.component';


@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.scss']
})
export class RessourcesComponent implements OnInit {

  constructor(private ressources: RessourcesService, private categories: CategoriesService, public dialog: MatDialog,
              private snackBar: MatSnackBar, private route: ActivatedRoute) { }
  ressource: Ressources[];
  displayedColumns: string[] = ['id', 'title', 'author', 'categoriesId', 'types'];

  ressourcesObservable$: Observable<Ressources[]>;
  categoriesObservable$: Observable<Categories[]>;

  visible: boolean;
  selectedRes: Ressources; // Edition
  selectedRessource: Ressources = new Ressources(); // Creation
  dialogRef;

  cat: Categories[];

  catId: number;
  verCatId: boolean;

  ngOnInit(): void {
    this.verCatId = false;

    this.catId = Number(this.route.snapshot.paramMap.get('id'));

    this.categoriesObservable$ = this.categories.get();
    this.ressourcesObservable$ = this.ressources.get();

    this.ressourcesObservable$.subscribe({
      next: result => this.ressource = result,
      error: err => console.log(err),
      complete: () => console.log('finish')
    });

    this.categoriesObservable$.forEach(element => {
        this.cat = element;
    });

    this.visible = false;

    if (this.catId > 0) {
      this.verCatId = true;
      this.ressourcesObservable$ = this.ressources.getResCat(this.catId);
    } else {
      this.verCatId = false;
    }

  }

  openSnackBar(message: string, messageD: string) {
    this.snackBar.open(message, messageD, {duration: 2000});
  }

  onSelect(vis: boolean): void {
    this.visible = vis;
  }

  openDialog(categorie: Ressources) {
    this.selectedRes = categorie;
    this.dialogRef = this.dialog.open(LibrisDialogResComponent, {
      data: this.selectedRes
    });
  }

  addRes(corps: NgForm) {
    corps.value.id = this.ressource.length - 1;
    this.selectedRessource.id = this.ressource[corps.value.id].id + 1;

    this.selectedRessource.title = corps.value.title;
    this.selectedRessource.author = corps.value.author;
    this.selectedRessource.categoriesId = corps.value.categoriesId;
    this.selectedRessource.types = corps.value.types;

    this.ressources.post(this.selectedRessource).subscribe(() => {
      this.openSnackBar('Ressource enregistré', ' ');
      this.ngOnInit();
    });
    this.selectedRessource = new Ressources();
  }

  suppRes(id: number) {
    this.ressources.delete(id).subscribe(() => {
      this.openSnackBar('Ressource supprimé', ' ');
      this.ngOnInit();
    });
  }

  close() {
    this.dialogRef.close();
  }

}
