import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPoliciaisComponent } from './listagem-policiais.component';

describe('ListagemPoliciaisComponent', () => {
  let component: ListagemPoliciaisComponent;
  let fixture: ComponentFixture<ListagemPoliciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemPoliciaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPoliciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
