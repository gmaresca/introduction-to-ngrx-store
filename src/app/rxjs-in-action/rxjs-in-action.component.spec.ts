import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsInActionComponent } from './rxjs-in-action.component';

describe('RxjsInActionComponent', () => {
  let component: RxjsInActionComponent;
  let fixture: ComponentFixture<RxjsInActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsInActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsInActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
