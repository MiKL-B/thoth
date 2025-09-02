import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookView } from './notebook-view';

describe('NotebookView', () => {
  let component: NotebookView;
  let fixture: ComponentFixture<NotebookView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotebookView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotebookView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
