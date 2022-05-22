import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboards' },
            { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
            { path: 'applications', loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule) },
            { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
            { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
            { path: 'my-placement', loadChildren: () => import('./my-placement/my-placement.module').then(m => m.MenuModule) },
            { path: 'my-profile', loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule) },
            { path: 'job-description', loadChildren: () => import('./job-description/job-description.module').then(m => m.JobDescriptionModule) },
            { path: 'analyst-profiles', loadChildren: () => import('./analyst-profiles/analyst-profiles.module').then(m => m.AnalystProfilesModule) },
            { path: 'match', loadChildren: () => import('./match/match.module').then(m => m.MatchModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
