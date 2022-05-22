import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchRoutingModule } from './match-routing.module';
import { MatchComponent } from './match.component';
import { QuillModule } from 'ngx-quill';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MatchComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatchRoutingModule,
    QuillModule.forRoot(),
    LayoutContainersModule,
    NgSelectModule,
    CommonModule,
    NgSelectModule,
  ]
})
export class MatchModule { }
