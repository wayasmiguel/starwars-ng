import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStarshipsComponent } from './my-starships.component';

describe('MyStarshipsComponent', () => {
  let component: MyStarshipsComponent;
  let fixture: ComponentFixture<MyStarshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStarshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
