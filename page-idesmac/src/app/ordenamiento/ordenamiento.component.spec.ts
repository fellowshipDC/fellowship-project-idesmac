import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenamientoComponent } from './ordenamiento.component';

describe('OrdenamientoComponent', () => {
  let component: OrdenamientoComponent;
  let fixture: ComponentFixture<OrdenamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
