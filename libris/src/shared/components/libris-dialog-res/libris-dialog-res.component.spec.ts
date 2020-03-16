import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrisDialogResComponent } from './libris-dialog-res.component';

describe('LibrisDialogResComponent', () => {
  let component: LibrisDialogResComponent;
  let fixture: ComponentFixture<LibrisDialogResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrisDialogResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrisDialogResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
