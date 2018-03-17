import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertyMainComponent } from './realty-property-main.component';

describe('RealtyPropertyMainComponent', () => {
  let component: RealtyPropertyMainComponent;
  let fixture: ComponentFixture<RealtyPropertyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
