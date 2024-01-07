import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  UserCredential,
  User as FirebaseUser,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: Auth, private router: Router) {}

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.fireAuth, email, password);
  }

  getCurrentUse(): FirebaseUser | null {
    return this.fireAuth.currentUser;
  }

  async logout() {
    await this.fireAuth.signOut();
    this.router.navigate(['/auth']);
  }
}
