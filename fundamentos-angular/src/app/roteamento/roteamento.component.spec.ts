import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteamentoComponent } from './roteamento.component';

describe('RoteamentoComponent', () => {
  let component: RoteamentoComponent;
  let fixture: ComponentFixture<RoteamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoteamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoteamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
