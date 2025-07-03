import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookListItemComponent } from './notebook-list-item.component';

describe('NotebookListItemComponent', () => {
  let component: NotebookListItemComponent;
  let fixture: ComponentFixture<NotebookListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotebookListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotebookListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
