import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralPubComponent } from './lateral-pub.component';

describe('LateralPubComponent', () => {
  let component: LateralPubComponent;
  let fixture: ComponentFixture<LateralPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
