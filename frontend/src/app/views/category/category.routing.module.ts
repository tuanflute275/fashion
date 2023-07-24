import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadCategoryComponent } from './read-category/read-category.component';
import { PostCategoryComponent } from './post-category/post-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'category'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category'
      },
      {
        path: 'read-category',
        component: ReadCategoryComponent,
      },
      {
        path: 'post-category',
        component: PostCategoryComponent,
      },
      {
        path: 'update-category/:id',
        component: UpdateCategoryComponent,
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
