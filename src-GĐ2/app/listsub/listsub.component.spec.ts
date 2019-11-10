import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsubComponent } from './listsub.component';

describe('ListsubComponent', () => {
  let component: ListsubComponent;
  let fixture: ComponentFixture<ListsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
