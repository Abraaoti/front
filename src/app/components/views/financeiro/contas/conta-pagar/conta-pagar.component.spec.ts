import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaPagarComponent } from './conta-pagar.component';

describe('ContaPagarComponent', () => {
  let component: ContaPagarComponent;
  let fixture: ComponentFixture<ContaPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaPagarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
