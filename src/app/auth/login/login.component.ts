import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}
  @HostListener('window:keyup.enter', ['$event', 'undefined'])
  onLogin(): void {
    if (this.email && this.password) {
      // this.isLoading = true;
      this.authService.login(this.email, this.password).then(() => {
        // this.isLoading = false;
        this.router.navigate(['/home/friends-list']);
      });
    }
  }
}
