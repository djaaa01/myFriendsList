import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: Auth, private router: Router) {}

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.fireAuth, email, password);
  }

  async logout() {
    await this.fireAuth.signOut();
    this.router.navigate(['/auth']);
  }
}
