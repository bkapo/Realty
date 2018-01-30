import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertyListItemComponent } from './realty-property-list-item.component';

describe('RealtyPropertyListItemComponent', () => {
  let component: RealtyPropertyListItemComponent;
  let fixture: ComponentFixture<RealtyPropertyListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertyListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
