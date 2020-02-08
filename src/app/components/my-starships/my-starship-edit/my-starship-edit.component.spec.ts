import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStarshipEditComponent } from './my-starship-edit.component';

describe('MyStarshipEditComponent', () => {
  let component: MyStarshipEditComponent;
  let fixture: ComponentFixture<MyStarshipEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStarshipEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStarshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
