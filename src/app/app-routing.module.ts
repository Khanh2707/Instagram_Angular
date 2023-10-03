import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { AuthGuard } from './guard/guardUser/auth.guard';
import { InboxComponent } from "./component/inbox/inbox-component/inbox.component";

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./component/home/home-module/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]
  },
  {
    path: 'explore', loadChildren: () => import('./component/explore/explore-module/explore.module').then(m => m.ExploreModule), canActivate: [AuthGuard]
  },
  {
    path: 'personal_profile', loadChildren: () => import('./component/personal-profile/personal-profile-module/personal-profile.module').then(m => m.PersonalProfileModule), canActivate: [AuthGuard]
  },
  {
    path: 'inbox', component: InboxComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'user', component: UserListComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
