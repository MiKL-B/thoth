import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttView } from './gantt-view';

describe('GanttView', () => {
  let component: GanttView;
  let fixture: ComponentFixture<GanttView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GanttView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanttView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
