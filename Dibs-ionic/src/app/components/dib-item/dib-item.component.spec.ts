import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DibItemComponent } from './dib-item.component';

describe('DibItemComponent', () => {
  let component: DibItemComponent;
  let fixture: ComponentFixture<DibItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DibItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DibItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
