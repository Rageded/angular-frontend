import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'; 
import { HttpModule }    from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { UserComponent } from './ui/user/user.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { UserDetailComponent } from './ui/user-detail/user-detail.component';
import { SignUpComponent } from './ui/sign-up/sign-up.component';

import { UserService} from './services/user.service';
import { LoginService} from './services/login.service';
import { AuthGuardService} from './services/auth.guard.service';



@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    UserComponent,
    DashboardComponent,
    UserDetailComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    UserService, 
    LoginService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
