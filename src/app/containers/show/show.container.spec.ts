import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContainer } from './show.container';

describe('ShowContainer', () => {
  let component: ShowContainer;
  let fixture: ComponentFixture<ShowContainer>;

  beforeEach(async(() => {
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
