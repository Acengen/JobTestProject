/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Page1ItemComponent } from './Page1Item.component';

describe('Page1ItemComponent', () => {
  let component: Page1ItemComponent;
  let fixture: ComponentFixture<Page1ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
