import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/authUser/auth.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})

export class UpdatepopupComponent {

  constructor(private builder: FormBuilder, private service: AuthService, @Inject(MAT_DIALOG_DATA) public data: any, private matDialogRef: MatDialogRef<UpdatepopupComponent>) {

  }

  editData: any;
  roleList: any;

  registerForm = this.builder.group({
    id: this.builder.control(''),
    email: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    role: this.builder.control('', Validators.required),
  });

  ngOnInit(): void {
    this.service.getAllRole().subscribe(res => {
      this.roleList = res;
    });

    if (this.data.userCode != null && this.data.userCode != '') {
      this.service.getByCode(this.data.userCode).subscribe(res => {
        this.editData = res;
        console.log(this.data.userCode);
        this.registerForm.setValue({
          id: this.editData.id,
          name: this.editData.name,
          email: this.editData.email,
          password: this.editData.password,
          role: this.editData.role,
        });
      });
    }
  }

  UpdateUser() {
    if (this.registerForm.valid) {
      this.service.updateUser(this.registerForm.value.id, this.registerForm.value).subscribe(res => {
        alert('Update successfully !');
        this.matDialogRef.close();
      });
    }
    else {
      alert('Please select role !');
    }
  }
}
