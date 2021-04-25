import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabRequestsCardComponent } from './cab-requests-card.component';

describe('CabRequestsCardComponent', () => {
  let component: CabRequestsCardComponent;
  let fixture: ComponentFixture<CabRequestsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabRequestsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabRequestsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
