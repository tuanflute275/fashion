import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAdminComponent } from './read-admin.component';

describe('ReadAdminComponent', () => {
  let component: ReadAdminComponent;
  let fixture: ComponentFixture<ReadAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadAdminComponent]
    });
    fixture = TestBed.createComponent(ReadAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
