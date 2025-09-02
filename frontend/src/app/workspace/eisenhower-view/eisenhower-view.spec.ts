import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EisenhowerView } from './eisenhower-view';

describe('EisenhowerView', () => {
  let component: EisenhowerView;
  let fixture: ComponentFixture<EisenhowerView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EisenhowerView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EisenhowerView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
