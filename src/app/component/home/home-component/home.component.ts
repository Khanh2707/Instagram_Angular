import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/authUser/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  isAdminUser = false;

  constructor(private service: AuthService, private router: Router) { }

  ngDoCheck(): void {
    if (this.service.getUserRole() === 'admin') {
      this.isAdminUser = true;
    }
    else {
      this.isAdminUser = false;
    }
  }

  clearSession() {
    sessionStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
