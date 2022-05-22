import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './match.component';
import { InterviewComponent } from './interview/interview.component';
import { PreferenceComponent } from './preference/preference.component';
import { MatchResultComponent } from './match-result/match-result.component';


const routes: Routes = [
  {
      path: '', component: MatchComponent,
      children: [
          { path: '', redirectTo: 'match-result', pathMatch: 'full' },
          { path: 'interview', component: InterviewComponent },
          { path: 'preference', component: PreferenceComponent },
          { path: 'match-result', component: MatchResultComponent },
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
