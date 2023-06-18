import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective } from './accordion';
import { CardRefreshDirective } from './card/card-refresh.directive';
import { CardToggleDirective } from './card/card-toggle.directive';
import { CardComponent } from './card/card.component';
import { MenuItems } from './menu-items/menu-items';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatTabsModule } from '@angular/material/tabs';
import { TemplateFormularioComponent } from './template/template-formulario/template-formulario.component';
import { RouterModule } from '@angular/router';
import { TemplatePesquisaComponent } from './template/template-pesquisa/template-pesquisa.component';
import { PrimengModule } from '../core/design/primeng.module';
import { TemplateDatatableComponent } from './template/template-datatable/template-datatable.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { ErrorMsgComponent } from './components/validacao/error-msg/error-msg.component';
import { TemplateModalDatatableComponent } from './template/template-modal-datatable/template-modal-datatable.component';
import { ModalComponent } from './template/template-modal-datatable/modal/modal.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        CommonModule,
        PerfectScrollbarModule,
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
        TemplateFormularioComponent,
        TemplatePesquisaComponent,
        TemplateDatatableComponent,
        CustomInputComponent,
        ErrorMsgComponent,
        TemplateModalDatatableComponent,
        ModalComponent
    ],
    exports: [
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
        CardRefreshDirective,
        CardToggleDirective,
        CardComponent,
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
        PrimengModule,
        TemplateDatatableComponent,
        CustomInputComponent,
        TemplateModalDatatableComponent,
        ModalComponent

        // ClickOutsideModule
    ],
    providers: [
        MenuItems,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
