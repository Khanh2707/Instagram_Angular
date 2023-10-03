import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/authUser/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})

export class LoginEmailComponent {
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router) { }

  userData: any;

  loginForm = this.builder.group({
    userName: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.getByCode(this.loginForm.value.userName).subscribe(res => {
        this.userData = res;
        if (this.userData.password === this.loginForm.value.password) {
          sessionStorage.setItem('user', JSON.stringify(this.userData));
          sessionStorage.setItem('userRole', this.userData.role);
          this.router.navigate(['']);
        }
        else {
          alert('Invalid credentials');
        }
      });
    }
  }
}
