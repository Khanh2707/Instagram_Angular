import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalProfileComponent } from '../personal-profile-component/personal-profile.component';
import { RouterModule } from '@angular/router';
import { personalProfileRoutes } from '../personal-profile-route/personal-profile.routes';



@NgModule({
  declarations: [
    // PersonalProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(personalProfileRoutes)
  ]
})
export class PersonalProfileModule { }
