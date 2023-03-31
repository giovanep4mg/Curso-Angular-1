import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteamentoLazyLoadingComponent } from './roteamento-lazy-loading.component';

describe('RoteamentoLazyLoadingComponent', () => {
  let component: RoteamentoLazyLoadingComponent;
  let fixture: ComponentFixture<RoteamentoLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoteamentoLazyLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoteamentoLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
