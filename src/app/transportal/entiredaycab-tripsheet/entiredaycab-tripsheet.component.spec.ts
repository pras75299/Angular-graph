import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntiredayCabSheetComponent } from './entiredaycab-tripsheet.component';

describe('EntiredayCabSheetComponent', () => {
  let component: EntiredayCabSheetComponent;
  let fixture: ComponentFixture<EntiredayCabSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntiredayCabSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntiredayCabSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
