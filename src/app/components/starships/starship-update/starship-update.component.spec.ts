import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipUpdateComponent } from './starship-update.component';

describe('StarshipUpdateComponent', () => {
  let component: StarshipUpdateComponent;
  let fixture: ComponentFixture<StarshipUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
