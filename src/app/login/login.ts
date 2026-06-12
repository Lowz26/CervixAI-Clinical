import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  entrarAlDashboard(event: Event) {
    event.preventDefault(); // Evita que la página recargue
    this.router.navigate(['/dashboard']);
  }
}