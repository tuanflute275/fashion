import { GlobalConstants } from './../../../shared/global-constants';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from './../../../services/category.service';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-read-category',
  templateUrl: './read-category.component.html',
  styleUrls: ['./read-category.component.scss']
})
export class ReadCategoryComponent implements OnInit {
  page: number = 1;
  data: any;
  categoryFormSearch: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  responseMessage: any;

  constructor(private categoryService: CategoryService, private userService: UserService, private router: Router) {
    this.categoryData();
  };

  ngOnInit() { }

  getFullData() {
    this.data = this.categoryData()
  }

  categoryData() {
    this.categoryService.getCategory().subscribe((response: any) => {
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
    let data = this.categoryFormSearch.value.name
    this.categoryService.searchCategory(data).subscribe((response: any) => {
      this.data = response;
    })
    this.categoryFormSearch = new FormGroup({
      name: new FormControl('')
    });
  }

  onEditCategory(id: string) {
    this.data.find((p: { id: any; }) => { return p.id === id })
    this.router.navigate([`/category/update-category/${id}`]);
  }

  onDeleteCategory(id: number) {
    if (confirm('Are you sure to delete record ?'))
      this.categoryService.deleteCategory(id).subscribe(response => {
        this.categoryService.getCategory().subscribe(data => {
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
