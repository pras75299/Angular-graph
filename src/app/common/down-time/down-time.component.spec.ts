import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownTimeComponent } from './down-time.component';

describe('DownTimeComponent', () => {
  let component: DownTimeComponent;
  let fixture: ComponentFixture<DownTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
