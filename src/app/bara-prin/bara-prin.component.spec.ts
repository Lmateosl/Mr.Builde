/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BaraPrinComponent } from './bara-prin.component';

describe('BaraPrinComponent', () => {
  let component: BaraPrinComponent;
  let fixture: ComponentFixture<BaraPrinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaraPrinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaraPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
