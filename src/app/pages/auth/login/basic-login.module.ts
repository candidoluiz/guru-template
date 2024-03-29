import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-login.component';
import {BasicLoginRoutingModule} from './login.routing';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicLoginRoutingModule,
    SharedModule
  ],
  declarations: [BasicLoginComponent]
})
export class BasicLoginModule { }
