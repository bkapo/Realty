import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertyAdditemComponent } from './realty-property-additem.component';

describe('RealtyPropertyAdditemComponent', () => {
  let component: RealtyPropertyAdditemComponent;
  let fixture: ComponentFixture<RealtyPropertyAdditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertyAdditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertyAdditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
