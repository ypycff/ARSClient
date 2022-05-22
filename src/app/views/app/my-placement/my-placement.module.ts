import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuRoutingModule } from './my-placement.routing';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { MyPlacementComponent } from './my-placement.component';
import { EditPlacementComponent } from './edit-placement/edit-placement.component';
import { ReviewPlacementComponent } from './review-placement/review-placement.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [MyPlacementComponent, EditPlacementComponent, ReviewPlacementComponent],
  imports: [
    SharedModule,
    MenuRoutingModule,
    LayoutContainersModule,
    QuillModule.forRoot(),
    SharedModule,
    LayoutContainersModule,
    FormsModule, NgSelectModule
  ]
})
export class MenuModule { }
