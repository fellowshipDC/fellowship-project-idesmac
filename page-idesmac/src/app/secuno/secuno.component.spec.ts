import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecunoComponent } from './secuno.component';

describe('SecunoComponent', () => {
  let component: SecunoComponent;
  let fixture: ComponentFixture<SecunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
