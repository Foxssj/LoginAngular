import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

  constructor(private router: Router) {}


  Logout() {
    this.router.navigate(['/login']);
  }

}
