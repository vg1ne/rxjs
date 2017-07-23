import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChipsComponent } from './custom-chips.component';

describe('CustomChipsComponent', () => {
  let component: CustomChipsComponent;
  let fixture: ComponentFixture<CustomChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomChipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
