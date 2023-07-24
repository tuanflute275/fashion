import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCustomerComponent } from './read-customer.component';

describe('ReadCustomerComponent', () => {
  let component: ReadCustomerComponent;
  let fixture: ComponentFixture<ReadCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadCustomerComponent]
    });
    fixture = TestBed.createComponent(ReadCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
