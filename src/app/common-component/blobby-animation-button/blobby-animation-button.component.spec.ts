import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobbyAnimationButtonComponent } from './blobby-animation-button.component';

describe('BlobbyAnimationButtonComponent', () => {
  let component: BlobbyAnimationButtonComponent;
  let fixture: ComponentFixture<BlobbyAnimationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlobbyAnimationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlobbyAnimationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
