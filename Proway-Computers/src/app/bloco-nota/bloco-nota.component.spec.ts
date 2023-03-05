import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoNotaComponent } from './bloco-nota.component';

describe('BlocoNotaComponent', () => {
  let component: BlocoNotaComponent;
  let fixture: ComponentFixture<BlocoNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocoNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
