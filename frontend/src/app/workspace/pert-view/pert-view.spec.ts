import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertView } from './pert-view';

describe('PertView', () => {
  let component: PertView;
  let fixture: ComponentFixture<PertView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PertView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PertView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
