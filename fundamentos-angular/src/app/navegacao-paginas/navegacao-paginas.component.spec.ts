import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoPaginasComponent } from './navegacao-paginas.component';

describe('NavegacaoPaginasComponent', () => {
  let component: NavegacaoPaginasComponent;
  let fixture: ComponentFixture<NavegacaoPaginasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacaoPaginasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacaoPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
