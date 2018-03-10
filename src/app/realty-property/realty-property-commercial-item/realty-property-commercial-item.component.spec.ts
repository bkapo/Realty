import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertyCommercialItemComponent } from './realty-property-commercial-item.component';

describe('RealtyPropertyCommercialItemComponent', () => {
  let component: RealtyPropertyCommercialItemComponent;
  let fixture: ComponentFixture<RealtyPropertyCommercialItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertyCommercialItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertyCommercialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
