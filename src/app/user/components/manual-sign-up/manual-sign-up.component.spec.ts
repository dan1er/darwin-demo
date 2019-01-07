import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSignUpComponent } from './manual-sign-up.component';

describe('ManualSignUpComponent', () => {
  let component: ManualSignUpComponent;
  let fixture: ComponentFixture<ManualSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
