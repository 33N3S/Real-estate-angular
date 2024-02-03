/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropretyCardComponent } from './proprety-card.component';

describe('PropretyCardComponent', () => {
  let component: PropretyCardComponent;
  let fixture: ComponentFixture<PropretyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropretyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropretyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
