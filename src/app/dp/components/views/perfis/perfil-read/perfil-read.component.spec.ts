import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilReadComponent } from './perfil-read.component';

describe('PerfilReadComponent', () => {
  let component: PerfilReadComponent;
  let fixture: ComponentFixture<PerfilReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
