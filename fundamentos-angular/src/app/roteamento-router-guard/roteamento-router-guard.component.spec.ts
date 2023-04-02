import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteamentoRouterGuardComponent } from './roteamento-router-guard.component';

describe('RoteamentoRouterGuardComponent', () => {
  let component: RoteamentoRouterGuardComponent;
  let fixture: ComponentFixture<RoteamentoRouterGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoteamentoRouterGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoteamentoRouterGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
