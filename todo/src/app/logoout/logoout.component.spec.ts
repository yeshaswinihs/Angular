import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogooutComponent } from './logoout.component';

describe('LogooutComponent', () => {
  let component: LogooutComponent;
  let fixture: ComponentFixture<LogooutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogooutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogooutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
