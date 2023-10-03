import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../service/authUser/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {

  constructor(private service: AuthService, private dialog: MatDialog) {
    this.loadUser();
  }

  userList: any;
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  loadUser() {
    this.service.getAll().subscribe(res => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'follow', 'follower', 'action'];

  UpdateUser(code: any) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      width: '50%',
      data: {
        userCode: code,
      }
    });

    popup.afterClosed().subscribe(res => {
      this.loadUser();
    });
  }

  OpenDialog() {

  }
}
