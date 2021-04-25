import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserComComponent } from './browser-com.component';

describe('BrowserComComponent', () => {
  let component: BrowserComComponent;
  let fixture: ComponentFixture<BrowserComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
