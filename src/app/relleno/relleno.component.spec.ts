/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RellenoComponent } from './relleno.component';

describe('RellenoComponent', () => {
  let component: RellenoComponent;
  let fixture: ComponentFixture<RellenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RellenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RellenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
