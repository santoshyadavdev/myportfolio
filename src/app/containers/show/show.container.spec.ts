import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowContainer } from './show.container';

describe('ShowContainer', () => {
  let component: ShowContainer;
  let fixture: ComponentFixture<ShowContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
