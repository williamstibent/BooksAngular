import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRightProfileComponent } from './aside-right-profile.component';

describe('AsideRightProfileComponent', () => {
  let component: AsideRightProfileComponent;
  let fixture: ComponentFixture<AsideRightProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideRightProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideRightProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
