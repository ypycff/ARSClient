import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankPageComponent } from './my-profile.component';
import { ReviewProfileComponent } from './review-profile/review-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '', component: BlankPageComponent,
    children: [
        { path: '', redirectTo:'edit-profile', pathMatch: 'full' },
        {path:'review-profile',component:ReviewProfileComponent},
        {path:'edit-profile',component:EditProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }