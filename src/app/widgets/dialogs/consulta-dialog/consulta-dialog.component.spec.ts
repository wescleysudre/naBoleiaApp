import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDialogComponent } from './consulta-dialog.component';

describe('ConsultaDialogComponent', () => {
  let component: ConsultaDialogComponent;
  let fixture: ComponentFixture<ConsultaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
