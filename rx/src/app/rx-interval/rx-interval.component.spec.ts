import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxIntervalComponent } from './rx-interval.component';

describe('RxIntervalComponent', () => {
  let component: RxIntervalComponent;
  let fixture: ComponentFixture<RxIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
