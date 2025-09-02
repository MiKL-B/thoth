import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatisationView } from './automatisation-view';

describe('AutomatisationView', () => {
  let component: AutomatisationView;
  let fixture: ComponentFixture<AutomatisationView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatisationView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomatisationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
