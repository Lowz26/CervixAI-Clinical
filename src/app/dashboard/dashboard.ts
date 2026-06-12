import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- Importamos el enrutador

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink], // <-- Lo agregamos aquí
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
}