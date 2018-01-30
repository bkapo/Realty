import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertyListComponent } from './realty-property-list.component';

describe('RealtyPropertyListComponent', () => {
  let component: RealtyPropertyListComponent;
  let fixture: ComponentFixture<RealtyPropertyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
