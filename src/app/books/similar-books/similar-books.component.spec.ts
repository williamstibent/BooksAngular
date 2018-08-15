import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarBooksComponent } from './similar-books.component';

describe('SimilarBooksComponent', () => {
  let component: SimilarBooksComponent;
  let fixture: ComponentFixture<SimilarBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
