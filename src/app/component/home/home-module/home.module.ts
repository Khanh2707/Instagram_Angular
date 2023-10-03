import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "../home-component/home.component";
import { homeRoutes } from "../home-route/home.route";
import {SidebarNavigationModule} from "../../sidebar-navigation/sidebar-navigation-module/sidebar-navigation.module";



@NgModule({
  declarations: [
    // HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
  ],
})
export class HomeModule { }
