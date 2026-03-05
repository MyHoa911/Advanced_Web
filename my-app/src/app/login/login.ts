import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../myservices/auth-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  username: string = '';
  password: string = '';
  errMessage = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    // Check for saved credentials in cookies
    this.http.get<any>('http://localhost:3002/check-login', { withCredentials: true }).subscribe({
      next: (res) => {
        if (res.success) {
          this.username = res.username;
          this.password = res.password;
        }
      },
      error: (err) => {
        // No saved credentials, that's fine
      }
    });
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe({
      next: (res) => {
        this.authService.setLoggedIn(true);
        this.router.navigate(['/ex53']);
      },
      error: (err) => {
        this.errMessage = 'Login failed: ' + err.message;
      }
    });
  }
}
