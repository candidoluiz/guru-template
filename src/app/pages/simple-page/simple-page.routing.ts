import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplePageComponent } from './simple-page-form/simple-page.component';
import { SimplePagePesquisaComponent } from './simple-page-pesquisa/simple-page-pesquisa.component';

const routes: Routes = [
    {
        path: '', component: SimplePagePesquisaComponent,
        data: { breadcrumb: 'Exemplo' }
    },
    {
        path: 'new', component: SimplePageComponent,
        data: { breadcrumb: 'Novo Exemplo' }
    },
    {
        path: ':id/edit', component: SimplePageComponent,
        data: { breadcrumb: 'Editar Exemplo' }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SimplePageRoutingModule { }
