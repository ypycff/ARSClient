import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobDescriptionComponent } from './job-description.component';
import { AllPlacementComponent } from './all-placement/all-placement.component';
import { RecommendComponent } from './recommend/recommend.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { PlacementDetailComponent } from './all-placement/placement-detail/placement-detail.component';

const routes: Routes = [
  {
    path: '', component: JobDescriptionComponent,
    children: [
        {path: '', redirectTo:'edit-profile', pathMatch: 'full' },
        {path:'all-placement',component:AllPlacementComponent},
        {path:'recommend',component:RecommendComponent},
        {path:'recent-orders',component:RecentOrdersComponent},
        {path:'placement-detail',component:PlacementDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobDescriptionRoutingModule { }