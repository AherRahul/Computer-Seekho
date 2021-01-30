import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBannerComponent } from './change-banner.component';

describe('ChangeBannerComponent', () => {
  let component: ChangeBannerComponent;
  let fixture: ComponentFixture<ChangeBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
