import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCategoryComponent } from './read-category.component';

describe('ReadCategoryComponent', () => {
  let component: ReadCategoryComponent;
  let fixture: ComponentFixture<ReadCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadCategoryComponent]
    });
    fixture = TestBed.createComponent(ReadCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
