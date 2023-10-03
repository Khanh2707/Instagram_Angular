import { Component } from '@angular/core';
import {UserInfoService} from "../../../service/authUser/user-info.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdateAvatarComponent} from "../personal-profile-child/update-avatar/update-avatar.component";

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css'],
})

export class PersonalProfileComponent {

  constructor(private data: UserInfoService, private dialog: MatDialog) { }

  user: any;

  ngOnInit() {
    this.data.currentUser.subscribe(user => this.user = user);
    console.log(this.user)
  }

  UpdateImg() {
    this.dialog.open(UpdateAvatarComponent, {
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      width: '400px',
      autoFocus: false,
      panelClass: 'custom-dialog-container'
    });
  }
}
