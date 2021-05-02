import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogsContainerComponent } from './blogs-container.component';

describe('BlogsContainerComponent', () => {
  let component: BlogsContainerComponent;
  let fixture: ComponentFixture<BlogsContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
