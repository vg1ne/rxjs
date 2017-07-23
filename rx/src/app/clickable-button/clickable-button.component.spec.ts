import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableButtonComponent } from './clickable-button.component';

describe('ClickableButtonComponent', () => {
  let component: ClickableButtonComponent;
  let fixture: ComponentFixture<ClickableButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
