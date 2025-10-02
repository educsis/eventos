import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private router: Router) {}

  register(user: { name: string; email: string; password: string }): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.email === user.email)) return false;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify({ name: user.name, email: user.email }));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }
}
