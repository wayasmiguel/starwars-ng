import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStarshipInfoComponent } from './my-starship-info.component';

describe('MyStarshipInfoComponent', () => {
  let component: MyStarshipInfoComponent;
  let fixture: ComponentFixture<MyStarshipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStarshipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStarshipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
