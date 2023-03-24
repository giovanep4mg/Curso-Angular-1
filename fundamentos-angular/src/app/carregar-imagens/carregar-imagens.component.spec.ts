import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregarImagensComponent } from './carregar-imagens.component';

describe('CarregarImagensComponent', () => {
  let component: CarregarImagensComponent;
  let fixture: ComponentFixture<CarregarImagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarregarImagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarregarImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
