import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentcardComponent } from './identcard.component';

describe('IdentcardComponent', () => {
  let component: IdentcardComponent;
  let fixture: ComponentFixture<IdentcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
