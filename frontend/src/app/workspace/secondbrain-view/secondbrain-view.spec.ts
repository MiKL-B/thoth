import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondbrainView } from './secondbrain-view';

describe('SecondbrainView', () => {
  let component: SecondbrainView;
  let fixture: ComponentFixture<SecondbrainView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondbrainView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondbrainView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
