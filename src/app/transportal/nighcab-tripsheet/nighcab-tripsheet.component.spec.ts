import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightcabTripSheetComponent } from './nighcab-tripsheet.component';

describe('NightcabTripSheetComponent', () => {
  let component: NightcabTripSheetComponent;
  let fixture: ComponentFixture<NightcabTripSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightcabTripSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightcabTripSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
