import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePageNotFoundComponent } from './page-page-not-found.component';

describe('PagePageNotFoundComponent', () => {
  let component: PagePageNotFoundComponent;
  let fixture: ComponentFixture<PagePageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
