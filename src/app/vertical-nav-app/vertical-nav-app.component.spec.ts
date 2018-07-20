import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalNavAppComponent } from './vertical-nav-app.component';

describe('VerticalNavAppComponent', () => {
  let component: VerticalNavAppComponent;
  let fixture: ComponentFixture<VerticalNavAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalNavAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalNavAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
