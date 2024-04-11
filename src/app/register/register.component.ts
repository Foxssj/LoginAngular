import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { RegisterI } from '../modelos/register.interface';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {

  RegisterForm = {
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    country: "",
    password: ""
  }

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
  }

  Register(form: RegisterI) {
    this.api.Register(form).subscribe(data =>  {
      console.log(data);
      this.router.navigate(['login']);
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
