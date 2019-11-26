import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinforComponent } from './updateinfor.component';

describe('UpdateinforComponent', () => {
  let component: UpdateinforComponent;
  let fixture: ComponentFixture<UpdateinforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateinforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
