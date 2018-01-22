import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadlibListItemComponent } from './madlib-list-item.component';

describe('MadlibListItemComponent', () => {
  let component: MadlibListItemComponent;
  let fixture: ComponentFixture<MadlibListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadlibListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadlibListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
