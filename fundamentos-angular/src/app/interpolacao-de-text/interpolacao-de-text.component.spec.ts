import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacaoDeTextComponent } from './interpolacao-de-text.component';

describe('InterpolacaoDeTextComponent', () => {
  let component: InterpolacaoDeTextComponent;
  let fixture: ComponentFixture<InterpolacaoDeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolacaoDeTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolacaoDeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
