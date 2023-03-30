import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteamentoPaginaNEncontradaComponent } from './roteamento-pagina-n-encontrada.component';

describe('RoteamentoPaginaNEncontradaComponent', () => {
  let component: RoteamentoPaginaNEncontradaComponent;
  let fixture: ComponentFixture<RoteamentoPaginaNEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoteamentoPaginaNEncontradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoteamentoPaginaNEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
