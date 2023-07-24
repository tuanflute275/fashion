import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent {
  categoryFormUpdate = new FormGroup({
    name: new FormControl(''),
    status: new FormControl('')
  });
  responseMessage: any;

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { };
  ngOnInit(): void {
    this.categoryService.getOneCategory(this.route.snapshot.params['id']).subscribe((response: any) => {
      console.warn('response =>', response)
      this.categoryFormUpdate = new FormGroup({
        name: new FormControl(response[0].name),
        status: new FormControl(response[0].status)
      });
    });
  }

  handleSubmit() {
    let formData = this.categoryFormUpdate.value;
    let data = {
      name: formData.name,
      status: formData.status
    }
    this.categoryService.updateCategory(this.route.snapshot.params['id'], data).subscribe((response: any) => {
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
    console.log(data)
  }
}
