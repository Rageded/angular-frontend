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
import { UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    UserComponent,
    DashboardComponent,
    UserDetailComponent
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
  providers: [UserService],
  bootstrap: [AppComponent]
})


export class AppModule { }
