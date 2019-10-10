/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DisenaComponent } from './disena.component';

describe('DisenaComponent', () => {
  let component: DisenaComponent;
  let fixture: ComponentFixture<DisenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
