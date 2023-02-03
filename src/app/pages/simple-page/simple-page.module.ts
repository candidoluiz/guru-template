import { NgModule } from '@angular/core';
import { SimplePageRoutingModule } from './simple-page.routing';
import { SimplePagePesquisaComponent } from './simple-page-pesquisa/simple-page-pesquisa.component';
import { SharedModule } from '../../shared/shared.module';
import { SimplePageComponent } from './simple-page-form/simple-page.component';


@NgModule({
  imports: [
    SimplePageRoutingModule,
    SharedModule
  ],
  declarations: [SimplePageComponent, SimplePagePesquisaComponent]
})
export class SimplePageModule { }
