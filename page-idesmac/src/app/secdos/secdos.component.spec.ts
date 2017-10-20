import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecdosComponent } from './secdos.component';

describe('SecdosComponent', () => {
  let component: SecdosComponent;
  let fixture: ComponentFixture<SecdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
