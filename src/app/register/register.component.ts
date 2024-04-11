import { Component } from '@angular/core';
import { ApiService} from "../service/api.service"
import { RegisterI } from '../modelos/register.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private apiService: ApiService) {}


  onRegister(form: RegisterI) {

  }

}
