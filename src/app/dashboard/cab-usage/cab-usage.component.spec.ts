import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabUsageComponent } from './cab-usage.component';

describe('CabUsageComponent', () => {
  let component: CabUsageComponent;
  let fixture: ComponentFixture<CabUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
