import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVendorsComponent } from './top-vendors.component';

describe('TopVendorsComponent', () => {
  let component: TopVendorsComponent;
  let fixture: ComponentFixture<TopVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
