import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalystProfilesComponent } from './analyst-profiles.component';
import { RecommendComponent } from './recommend/recommend.component';
import { AllProfileComponent } from './all-profile/all-profile.component';
import { ProfileDetailComponent } from './all-profile/profile-detail/profile-detail.component';



const routes: Routes = [
  {
    path: '', component: AnalystProfilesComponent,
    children: [
        {path: '', redirectTo:'edit-profile', pathMatch: 'full' },
        {path:'profile-detail',component:ProfileDetailComponent},
        {path:'all-profile',component:AllProfileComponent},
        {path:'recommend',component:RecommendComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalystProfilesRoutingModule { }