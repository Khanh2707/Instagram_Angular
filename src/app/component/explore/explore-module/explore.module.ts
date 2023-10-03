import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { exploreRoutes } from '../explore-route/explore.routes';
import { ExploreComponent } from '../explore-component/explore.component';
import { SidebarNavigationComponent } from "../../sidebar-navigation/sidebar-navigation-component/sidebar-navigation.component";



@NgModule({
  declarations: [
    // ExploreComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(exploreRoutes),
  ]
})
export class ExploreModule { }
