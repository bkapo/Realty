import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertyItemComponent } from './realty-property-item.component';

describe('RealtyPropertyItemComponent', () => {
  let component: RealtyPropertyItemComponent;
  let fixture: ComponentFixture<RealtyPropertyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
