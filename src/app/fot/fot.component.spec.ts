/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FotComponent } from './fot.component';

describe('FotComponent', () => {
  let component: FotComponent;
  let fixture: ComponentFixture<FotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
