import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AccordionAnchorDirective, AccordionDirective, AccordionLinkDirective} from './accordion';
import {CardRefreshDirective} from './card/card-refresh.directive';
import {CardToggleDirective} from './card/card-toggle.directive';
import {SpinnerComponent} from './spinner/spinner.component';
import {CardComponent} from './card/card.component';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {DataFilterPipe} from './element/data-filter.pipe';
import {MenuItems} from './menu-items/menu-items';
import {ParentRemoveDirective} from './element/parent-remove.directive';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import {ClickOutsideModule} from 'ng-click-outside';
import { MatTabsModule } from '@angular/material/tabs';

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
    SweetAlert2Module,
    MatTabsModule
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardRefreshDirective,
    CardToggleDirective,
    SpinnerComponent,
    CardComponent,
    ModalAnimationComponent,
    ModalBasicComponent,
    DataFilterPipe,
    ParentRemoveDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardRefreshDirective,
    CardToggleDirective,
    SpinnerComponent,
    CardComponent,
    ModalAnimationComponent,
    ModalBasicComponent,
    DataFilterPipe,
    ParentRemoveDirective,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    SweetAlert2Module,
    MatTabsModule

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
