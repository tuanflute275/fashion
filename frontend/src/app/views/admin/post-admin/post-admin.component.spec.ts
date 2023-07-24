import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdminComponent } from './post-admin.component';

describe('PostAdminComponent', () => {
  let component: PostAdminComponent;
  let fixture: ComponentFixture<PostAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAdminComponent]
    });
    fixture = TestBed.createComponent(PostAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
