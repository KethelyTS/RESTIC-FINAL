login.component.ts
@@ -0,0 +1,40 @@
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  async loginWithGoogle() {
    try {
      const provider = new auth.GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      const user = result.user;
      if (user) {
        console.log('User signed in: ', user);
        this.router.navigate(['/home']); // Redireciona para a página principal após login
      }
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      console.log('User signed out');
    } catch (error) {
      console.error(error);
    }
  }
