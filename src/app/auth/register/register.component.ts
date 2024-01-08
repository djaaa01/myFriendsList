import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/home/core/services/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  repeatPassword: string;
  message: string;
  isToastOpen = false;

  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {}

  onRegister(): void {
    if (this.password === this.repeatPassword) {
      this.mainService.register(this.email, this.password).then(
        () => {
          setTimeout(() => {
            location.reload();
          }, 200);
        },
        (error) => {
          this.message = error.message;
          this.isToastOpen = true;
        }
      );
    } else {
      this.message = 'Passwords do not match. Please try again.';
      this.isToastOpen = true;
    }
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
}
