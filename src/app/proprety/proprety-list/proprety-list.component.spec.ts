/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropretyListComponent } from './proprety-list.component';

describe('PropretyListComponent', () => {
  let component: PropretyListComponent;
  let fixture: ComponentFixture<PropretyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropretyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropretyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
