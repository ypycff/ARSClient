import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewRoutingModule } from './views.routing';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ViewsComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
    NgSelectModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ]
})
export class ViewsModule { }
