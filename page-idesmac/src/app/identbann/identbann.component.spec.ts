import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentbannComponent } from './identbann.component';

describe('IdentbannComponent', () => {
  let component: IdentbannComponent;
  let fixture: ComponentFixture<IdentbannComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentbannComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentbannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
