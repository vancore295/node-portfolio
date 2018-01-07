import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverbsComponent } from './proverbs.component';

describe('ProverbsComponent', () => {
  let component: ProverbsComponent;
  let fixture: ComponentFixture<ProverbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProverbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProverbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
