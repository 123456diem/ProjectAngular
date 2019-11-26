import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignterComponent } from './resignter.component';

describe('ResignterComponent', () => {
  let component: ResignterComponent;
  let fixture: ComponentFixture<ResignterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResignterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResignterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
