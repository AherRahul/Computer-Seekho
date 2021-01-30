import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTablesComponent } from './staff-tables.component';

describe('StaffTablesComponent', () => {
  let component: StaffTablesComponent;
  let fixture: ComponentFixture<StaffTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
