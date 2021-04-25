import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabRequestsHeaderComponent } from './cab-requests-header.component';

describe('CabRequestsHeaderComponent', () => {
  let component: CabRequestsHeaderComponent;
  let fixture: ComponentFixture<CabRequestsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabRequestsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabRequestsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
