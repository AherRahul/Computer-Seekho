import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchTablesComponent } from './batch-tables.component';

describe('BatchTablesComponent', () => {
  let component: BatchTablesComponent;
  let fixture: ComponentFixture<BatchTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
