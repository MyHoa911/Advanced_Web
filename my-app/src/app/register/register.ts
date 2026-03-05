import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../myservices/auth-service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (!this.username || !this.password) {
      this.errMessage = 'Username and password are required';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errMessage = 'Passwords do not match';
      return;
    }

    this.errMessage = '';
    this.successMessage = '';

    this.authService.register(this.username, this.password).subscribe({
      next: (res) => {
        this.successMessage = 'Registration successful! You can now login.';
        // Clear form
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
        // Redirect to login after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (err) => {
        this.errMessage = 'Registration failed: ' + err.message;
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
