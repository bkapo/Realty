import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedPartyListComponent } from './involved-party-list.component';

describe('InvolvedPartyListComponent', () => {
  let component: InvolvedPartyListComponent;
  let fixture: ComponentFixture<InvolvedPartyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolvedPartyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvedPartyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
