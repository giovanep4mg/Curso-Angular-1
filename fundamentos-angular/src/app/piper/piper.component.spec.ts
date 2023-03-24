import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiperComponent } from './piper.component';

describe('PiperComponent', () => {
  let component: PiperComponent;
  let fixture: ComponentFixture<PiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
