import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMeCofeeComponent } from './buy-me-cofee.component';

describe('BuyMeCofeeComponent', () => {
  let component: BuyMeCofeeComponent;
  let fixture: ComponentFixture<BuyMeCofeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyMeCofeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyMeCofeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
