import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityGamesComponent } from './unity-games.component';

describe('UnityGamesComponent', () => {
  let component: UnityGamesComponent;
  let fixture: ComponentFixture<UnityGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
