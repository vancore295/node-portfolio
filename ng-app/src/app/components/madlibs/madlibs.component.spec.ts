import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadlibsComponent } from './madlibs.component';

describe('MadlibsComponent', () => {
  let component: MadlibsComponent;
  let fixture: ComponentFixture<MadlibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadlibsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadlibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
