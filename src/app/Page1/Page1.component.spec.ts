/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Page1Component } from './Page1.component';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
