import { GlobalConstants } from './../../../shared/global-constants';
import { Router } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.scss']
})
export class PostCategoryComponent implements OnInit {
  categoryFormPost: any = FormGroup;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private router: Router) { };
  ngOnInit(): void {
    this.categoryFormPost = this.formBuilder.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
    })
  }

  handleSubmit() {
    let formData = this.categoryFormPost.value;
    let data = {
      name: formData.name,
      status: formData.status
    }
    this.categoryService.postCategory(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.router.navigate(['/category/read-category']);
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError
      }
    }
    )
  }
}
