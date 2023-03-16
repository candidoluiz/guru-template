import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}, 
      {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard-default.module').then(m => m.DashboardDefaultModule)}, 
      {path: 'basic', loadChildren: () => import('./pages/ui-elements/ui-elements.module').then(m => m.BasicModule)},
      {path: 'user', loadChildren: () => import('./pages/user/profile.module').then(m => m.ProfileModule)}, 
      {path: 'simple-page', loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)}
    ]
  },

  {
    path: '', component: AuthComponent, children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
