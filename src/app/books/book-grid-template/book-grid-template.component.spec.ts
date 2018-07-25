import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGridTemplateComponent } from './book-grid-template.component';

describe('BookGridTemplateComponent', () => {
  let component: BookGridTemplateComponent;
  let fixture: ComponentFixture<BookGridTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGridTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGridTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
