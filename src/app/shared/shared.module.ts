import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective} from './accordion';
import {CardRefreshDirective} from './card/card-refresh.directive';
import {CardToggleDirective} from './card/card-toggle.directive';
import {CardComponent} from './card/card.component';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {DataFilterPipe} from './element/data-filter.pipe';
import {MenuItems} from './menu-items/menu-items';
import {ParentRemoveDirective} from './element/parent-remove.directive';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import {ClickOutsideModule} from 'ng-click-outside';
import { MatTabsModule } from '@angular/material/tabs';
import { TemplateFormularioComponent } from './template/template-formulario/template-formulario.component';
import { RouterModule } from '@angular/router';
import { TemplatePesquisaComponent } from './template/template-pesquisa/template-pesquisa.component';
import { PrimengModule } from '../core/design/primeng.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    // ClickOutsideModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    MatTabsModule,
    RouterModule,
    PrimengModule
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardRefreshDirective,
    CardToggleDirective,
    CardComponent,
    ModalAnimationComponent,
    ModalBasicComponent,
    DataFilterPipe,
    ParentRemoveDirective,
    TemplateFormularioComponent,
    TemplatePesquisaComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardRefreshDirective,
    CardToggleDirective,
    CardComponent,
    ModalAnimationComponent,
    ModalBasicComponent,
    DataFilterPipe,
    ParentRemoveDirective,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    SweetAlert2Module,
    MatTabsModule,
    TemplateFormularioComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    TemplatePesquisaComponent,
    PrimengModule

    // ClickOutsideModule
  ],
  providers: [
    MenuItems,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
