import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucideIcon } from './lucide-icon';

describe('LucideIcon', () => {
  let component: LucideIcon;
  let fixture: ComponentFixture<LucideIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LucideIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LucideIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
