import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/authUser/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router) { }

  registerForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(7)])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    role: this.builder.control('user'),
  });

  proceedRegisteration() {
    if (this.registerForm.valid) {
      this.service.proceedRegister(this.registerForm.value).subscribe(res => {
        alert('Register successfully');
        this.router.navigate(['login']);
      });
    }
    else {
      alert('Please enter valid data');
    }
  }
}
