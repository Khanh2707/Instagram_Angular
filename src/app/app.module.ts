import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarNavigationComponent } from './component/sidebar-navigation/sidebar-navigation-component/sidebar-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/module/material.module';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UpdatepopupComponent } from './component/updatepopup/updatepopup.component';
import { LoginEmailComponent } from './component/login/login-email/login-email.component';
import { InboxComponent } from './component/inbox/inbox-component/inbox.component';
import { HomeComponent } from "./component/home/home-component/home.component";
import { ExploreComponent } from "./component/explore/explore-component/explore.component";
import {
  PersonalProfileComponent
} from "./component/personal-profile/personal-profile-component/personal-profile.component";
import { UpdateAvatarComponent } from './component/personal-profile/personal-profile-child/update-avatar/update-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavigationComponent,
    RegisterComponent,
    LoginComponent,
    UserListComponent,
    UpdatepopupComponent,
    LoginEmailComponent,
    InboxComponent,
    HomeComponent,
    ExploreComponent,
    PersonalProfileComponent,
    UpdateAvatarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
