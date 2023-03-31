import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteamentoParametroRotaComponent } from './roteamento-parametro-rota.component';

describe('RoteamentoParametroRotaComponent', () => {
  let component: RoteamentoParametroRotaComponent;
  let fixture: ComponentFixture<RoteamentoParametroRotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoteamentoParametroRotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoteamentoParametroRotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
