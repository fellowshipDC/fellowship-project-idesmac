import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartcomunitariaComponent } from './partcomunitaria.component';

describe('PartcomunitariaComponent', () => {
  let component: PartcomunitariaComponent;
  let fixture: ComponentFixture<PartcomunitariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartcomunitariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartcomunitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
