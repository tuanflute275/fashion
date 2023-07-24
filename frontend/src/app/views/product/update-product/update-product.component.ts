import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from './../../../shared/global-constants';
import { ProductService } from './../../../services/product.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  categories: any = []
  productFormUpdate = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    sale_price: new FormControl(''),
    image: new FormControl(''),
    category_id: new FormControl(''),
    status: new FormControl(''),
    description: new FormControl('')
  });
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
    ) { };
  ngOnInit(): void {
    this.dataCategory()
    this.productService.getOneProduct(this.route.snapshot.params['id']).subscribe((response: any) => {
      this.productFormUpdate = new FormGroup({
        name: new FormControl(response[0].name),
        price: new FormControl(response[0].price),
        sale_price: new FormControl(response[0].sale_price),
        image: new FormControl(response[0].image),
        category_id: new FormControl(response[0].category_id),
        status: new FormControl(response[0].status),
        description: new FormControl(response[0].description)
      });
    });
  }
  dataCategory() {
    this.categoryService.getCategory().subscribe(response => {
      console.log(response);
      this.categories = response[0].status
    })
  }

  handleSubmit() {
    let formData = this.productFormUpdate.value;
    let data = {
      name: formData.name,
      price: formData.price,
      sale_price: formData.sale_price,
      image: formData.image,
      category_id: formData.category_id,
      status: formData.status,
      description: formData.description
    }
    this.productService.updateProduct(this.route.snapshot.params['id'], data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.router.navigate(['/product/read-product']);
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError
      }
    })
  }
}
