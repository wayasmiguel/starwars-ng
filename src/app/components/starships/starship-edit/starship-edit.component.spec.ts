import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipEditComponent } from './starship-edit.component';

describe('StarshipEditComponent', () => {
  let component: StarshipEditComponent;
  let fixture: ComponentFixture<StarshipEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
