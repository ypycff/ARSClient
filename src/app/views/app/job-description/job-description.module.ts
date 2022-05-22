import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPlacementComponent } from './all-placement/all-placement.component';
import { RecommendComponent } from './recommend/recommend.component';
import { JobDescriptionComponent } from './job-description.component';
import { JobDescriptionRoutingModule } from './job-description.routing';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { PlacementDetailComponent } from './all-placement/placement-detail/placement-detail.component';



import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HotkeyModule } from 'angular2-hotkeys';
import { ApplicationsContainersModule } from 'src/app/containers/applications/applications.containers.module';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import { SortablejsModule } from 'ngx-sortablejs';
import { CollapseModule, TabsModule, ProgressbarModule, ModalModule } from 'ngx-bootstrap';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';


@NgModule({
  declarations: [PlacementDetailComponent, AllPlacementComponent, RecommendComponent, JobDescriptionComponent, RecentOrdersComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    LayoutContainersModule,
    ApplicationsContainersModule,
    ComponentsChartModule,
    SortablejsModule,
    HotkeyModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
    JobDescriptionRoutingModule
  ]
})
export class JobDescriptionModule { }
