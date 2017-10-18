import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './ui/dashboard/dashboard.component';
import { UserComponent }      from './ui/user/user.component';
import { SignUpComponent }      from './ui/sign-up/sign-up.component';
import { UserDetailComponent }  from './ui/user-detail/user-detail.component';

import { AuthGuardService } from './services/auth.guard.service';
 
const routes: Routes = [
	{ path: '', redirectTo: '/signup', pathMatch: 'full' },
	{ path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: 'users/:id', component: UserDetailComponent, canActivate: [AuthGuardService] },
    { path: 'users',     component: UserComponent, canActivate: [AuthGuardService] },
    { path: 'signup',     component: SignUpComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}