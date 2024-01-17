import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

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
    private readonly router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit(): void {}

  onRegister(): void {
    this.router.navigate(['/auth/register']);
  }

  @HostListener('window:keyup.enter', ['$event', 'undefined'])
  async onLogin() {
    if (this.email && this.password) {
      const loading = await this.loadingCtrl.create();
      loading.present();

      this.authService.login(this.email, this.password).then(() => {
        loading.dismiss();
        this.router.navigate(['/home/friends-list']);
      });
    }
  }
}
