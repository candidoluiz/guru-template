import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authentication',
      status: false
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./login/basic-login.module').then(m => m.BasicLoginModule)
      },
    //   {
    //     path: 'registration',
    //     loadChildren: () => import('./registration/basic-reg.module').then(m => m.BasicRegModule)
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
