import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsFallingComponent } from './stars-falling.component';

describe('StarsFallingComponent', () => {
  let component: StarsFallingComponent;
  let fixture: ComponentFixture<StarsFallingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsFallingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsFallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
