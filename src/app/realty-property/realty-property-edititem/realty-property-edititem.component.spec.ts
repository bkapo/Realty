import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertyEdititemComponent } from './realty-property-edititem.component';

describe('RealtyPropertyEdititemComponent', () => {
  let component: RealtyPropertyEdititemComponent;
  let fixture: ComponentFixture<RealtyPropertyEdititemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertyEdititemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertyEdititemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
