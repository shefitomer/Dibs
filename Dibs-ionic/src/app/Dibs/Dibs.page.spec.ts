import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DibsPage } from './Dibs.page';

describe('DibsPage', () => {
  let component: DibsPage;
  let fixture: ComponentFixture<DibsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DibsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DibsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
