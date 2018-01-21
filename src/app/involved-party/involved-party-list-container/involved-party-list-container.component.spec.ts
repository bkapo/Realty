import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedPartyListContainerComponent } from './involved-party-list-container.component';

describe('InvolvedPartyListContainerComponent', () => {
  let component: InvolvedPartyListContainerComponent;
  let fixture: ComponentFixture<InvolvedPartyListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvedPartyListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvedPartyListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
