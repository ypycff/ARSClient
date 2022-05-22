import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewProfileComponent } from '../my-profile/review-profile/review-profile.component';
import { MyPlacementComponent } from './my-placement.component';
import { EditPlacementComponent } from './edit-placement/edit-placement.component';
import { ReviewPlacementComponent } from './review-placement/review-placement.component';

const routes: Routes = [
    {
        path: '', component: MyPlacementComponent,
        children: [
            { path: '', redirectTo: 'edit-placement', pathMatch: 'full' },
            { path: 'edit-placement', component: EditPlacementComponent },
            { path: 'review-placement', component: ReviewPlacementComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }