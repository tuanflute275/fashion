import { GlobalConstants } from 'src/app/shared/global-constants';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.scss']
})
export class ReadProductComponent {

  page: number = 1;
  data: any;
  productFormSearch: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  responseMessage: any;

  constructor(private productService: ProductService, private router: Router) {
    this.productData();
  };

  ngOnInit() { }

  getFullData() {
    this.data = this.productData()
  }

  productData() {
    this.productService.getProduct().subscribe((response: any) => {
      this.data = response;
      console.log(this.data);
    }, (error) => {
      console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError
      }
    })
  }

  submitSearch() {
    let data = this.productFormSearch.value.name
    this.productService.searchProduct(data).subscribe((response: any) => {
        this.data=response;
        console.log("in search",this.data)
    })
    this.productFormSearch = new FormGroup({
      name: new FormControl('')
    });
  }

  onEditProduct(id: string) {
    this.data.find( (p: { id: any; }) => {return p.id === id})
    this.router.navigate([`/product/update-product/${id}`]);
  }

  onDeleteProduct(id: number) {
    if (confirm('Are you sure to delete record ?'))
      this.productService.deleteProduct(id).subscribe(response => {
        this.productService.getProduct().subscribe(data => {
          this.data = data
        })
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
