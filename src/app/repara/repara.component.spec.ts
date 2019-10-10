/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReparaComponent } from './repara.component';

describe('ReparaComponent', () => {
  let component: ReparaComponent;
  let fixture: ComponentFixture<ReparaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
