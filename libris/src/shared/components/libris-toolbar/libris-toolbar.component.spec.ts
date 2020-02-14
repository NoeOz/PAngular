import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrisToolbarComponent } from './libris-toolbar.component';

describe('LibrisToolbarComponent', () => {
  let component: LibrisToolbarComponent;
  let fixture: ComponentFixture<LibrisToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrisToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrisToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
