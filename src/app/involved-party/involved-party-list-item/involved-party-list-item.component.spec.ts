import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedPartyCardComponent } from './involved-party-card.component';

describe('InvolvedPartyCardComponent', () => {
  let component: InvolvedPartyCardComponent;
  let fixture: ComponentFixture<InvolvedPartyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvedPartyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvedPartyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
