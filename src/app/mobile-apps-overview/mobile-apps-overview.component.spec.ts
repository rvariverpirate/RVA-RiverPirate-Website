import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppsOverviewComponent } from './mobile-apps-overview.component';

describe('MobileAppsOverviewComponent', () => {
  let component: MobileAppsOverviewComponent;
  let fixture: ComponentFixture<MobileAppsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
