import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinelinkComponent } from './onlinelink.component';

describe('OnlinelinkComponent', () => {
  let component: OnlinelinkComponent;
  let fixture: ComponentFixture<OnlinelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
