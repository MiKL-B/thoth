import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EisenhowerViewComponent } from './eisenhower-view.component';

describe('EisenhowerViewComponent', () => {
  let component: EisenhowerViewComponent;
  let fixture: ComponentFixture<EisenhowerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EisenhowerViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EisenhowerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
