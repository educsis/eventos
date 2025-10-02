import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  onLogin() {
    // later you’ll validate credentials here
    this.router.navigate(['/events']);
  }

  goToRegister() {
    // we can create this later
    //alert('Register not implemented yet!');
  }
}
