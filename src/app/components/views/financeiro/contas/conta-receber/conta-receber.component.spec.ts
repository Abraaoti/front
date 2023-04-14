import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaReceberComponent } from './conta-receber.component';

describe('ContaReceberComponent', () => {
  let component: ContaReceberComponent;
  let fixture: ComponentFixture<ContaReceberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaReceberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
