import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './ui/dashboard/dashboard.component';
import { UserComponent }      from './ui/user/user.component';
import { UserDetailComponent }  from './ui/user-detail/user-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'users',     component: UserComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}