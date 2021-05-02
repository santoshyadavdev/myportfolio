import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecentblogsComponent } from './recentblogs.component';

describe('RecentblogsComponent', () => {
  let component: RecentblogsComponent;
  let fixture: ComponentFixture<RecentblogsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
