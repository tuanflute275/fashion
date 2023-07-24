import { GlobalConstants } from './../../../shared/global-constants';
import { ProductService } from './../../../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.scss']
})
export class PostProductComponent implements OnInit {
  categories: any = []
  title: string = 'Add New Product'
  productFormPost: any = FormGroup;
  responseMessage: any;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) { };


  ngOnInit(): void {
    this.dataCategory()
    this.productFormPost = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      sale_price: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      status: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }
  dataCategory() {
    this.categoryService.getCategory().subscribe(response => {
      console.log(response);
      this.categories = response
    })
  }

  handleSubmit() {
    let formData = this.productFormPost.value;
    let data = {
      name: formData.name,
      price: formData.price,
      sale_price: formData.sale_price,
      image: formData.image,
      category_id: formData.category_id,
      status: formData.status,
      description: formData.description
    }
    console.log(data)
    this.productService.postProduct(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.router.navigate(['/product/read-product']);
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
