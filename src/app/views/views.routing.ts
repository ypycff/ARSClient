import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { ErrorComponent } from './error/error.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { environment } from './../../environments/environment';

const redirectUnauthorizedToLogin = () =>  redirectUnauthorizedTo(['/user']) ;
const redirectLoggedInToItems = () => redirectLoggedInTo(['/app']);

let routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
