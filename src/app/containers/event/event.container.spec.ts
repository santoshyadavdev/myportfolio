import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventContainer } from './event.container';

describe('EventContainer', () => {
  let component: EventContainer;
  let fixture: ComponentFixture<EventContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
