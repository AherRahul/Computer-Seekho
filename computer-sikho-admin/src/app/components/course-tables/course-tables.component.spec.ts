import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTablesComponent } from './course-tables.component';

describe('CourseTablesComponent', () => {
  let component: CourseTablesComponent;
  let fixture: ComponentFixture<CourseTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
