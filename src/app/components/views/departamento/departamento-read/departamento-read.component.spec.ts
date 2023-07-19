import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoReadComponent } from './departamento-read.component';

describe('DepartamentoReadComponent', () => {
  let component: DepartamentoReadComponent;
  let fixture: ComponentFixture<DepartamentoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
