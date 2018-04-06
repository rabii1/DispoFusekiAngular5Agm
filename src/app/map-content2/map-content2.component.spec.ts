import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapContent2Component } from './map-content2.component';

describe('MapContent2Component', () => {
  let component: MapContent2Component;
  let fixture: ComponentFixture<MapContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
