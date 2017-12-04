import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsumacintaComponent } from './usumacinta.component';

describe('UsumacintaComponent', () => {
  let component: UsumacintaComponent;
  let fixture: ComponentFixture<UsumacintaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsumacintaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsumacintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
