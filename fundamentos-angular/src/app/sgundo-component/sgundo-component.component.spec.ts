import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgundoComponentComponent } from './sgundo-component.component';

describe('SgundoComponentComponent', () => {
  let component: SgundoComponentComponent;
  let fixture: ComponentFixture<SgundoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgundoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgundoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
