import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertyListContainerComponent } from './realty-property-list-container.component';

describe('RealtyPropertyContainerComponent', () => {
  let component: RealtyPropertyListContainerComponent;
  let fixture: ComponentFixture<RealtyPropertyListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertyListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertyListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
