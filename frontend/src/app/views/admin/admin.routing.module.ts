import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadAdminComponent } from './read-admin/read-admin.component';
import { PostAdminComponent } from './post-admin/post-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'admin'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin'
      },
      {
        path: 'read-admin',
        component: ReadAdminComponent,
      },
      {
        path: 'post-admin',
        component: PostAdminComponent,
      },
      {
        path: 'update-admin/:id',
        component: UpdateAdminComponent,
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
