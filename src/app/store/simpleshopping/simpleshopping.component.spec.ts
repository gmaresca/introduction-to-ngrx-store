import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleshoppingComponent } from './simpleshopping.component';

describe('SimpleshoppingComponent', () => {
  let component: SimpleshoppingComponent;
  let fixture: ComponentFixture<SimpleshoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleshoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
