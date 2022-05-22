import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { BlankPageComponent } from './my-profile.component';
import { MyProfileRoutingModule } from './my-profile.routing';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReviewProfileComponent } from './review-profile/review-profile.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [BlankPageComponent, EditProfileComponent, ReviewProfileComponent],
  imports: [
    QuillModule.forRoot(),
    SharedModule,
    MyProfileRoutingModule,
    LayoutContainersModule,
    FormsModule, NgSelectModule
  ]
})
export class MyProfileModule { }
