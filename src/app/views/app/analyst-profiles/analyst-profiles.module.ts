import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendComponent } from './recommend/recommend.component';
import { AnalystProfilesComponent } from './analyst-profiles.component';
import { AllProfileComponent } from './all-profile/all-profile.component';
import { ProfileDetailComponent } from './all-profile/profile-detail/profile-detail.component';
import { AnalystProfilesRoutingModule } from './analyst-profiles.routing';



import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HotkeyModule } from 'angular2-hotkeys';
import { ApplicationsContainersModule } from 'src/app/containers/applications/applications.containers.module';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import { SortablejsModule } from 'ngx-sortablejs';
import { CollapseModule, TabsModule, ProgressbarModule, ModalModule } from 'ngx-bootstrap';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';


@NgModule({
  declarations: [ProfileDetailComponent, RecommendComponent, AnalystProfilesComponent, AllProfileComponent],
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
    AnalystProfilesRoutingModule
  ]
})
export class AnalystProfilesModule { }
