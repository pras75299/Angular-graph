import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularcabTripSheetComponent } from './regularcab-tripsheet.component';

describe('RegularcabTripSheetComponent', () => {
  let component: RegularcabTripSheetComponent;
  let fixture: ComponentFixture<RegularcabTripSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularcabTripSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularcabTripSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
