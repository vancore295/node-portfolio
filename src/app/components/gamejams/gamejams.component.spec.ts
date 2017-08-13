import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamejamsComponent } from './gamejams.component';

describe('GamejamsComponent', () => {
  let component: GamejamsComponent;
  let fixture: ComponentFixture<GamejamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamejamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamejamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
