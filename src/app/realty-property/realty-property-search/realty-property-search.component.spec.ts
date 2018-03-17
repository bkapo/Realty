import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtyPropertySearchComponent } from './realty-property-search.component';

describe('RealtyPropertySearchComponent', () => {
  let component: RealtyPropertySearchComponent;
  let fixture: ComponentFixture<RealtyPropertySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtyPropertySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtyPropertySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
