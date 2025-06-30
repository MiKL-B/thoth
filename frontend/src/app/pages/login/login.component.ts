import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule,HeaderComponent,FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isRegister: boolean = false;
  isVisiblePassword: boolean = false;
  name: string = '';
  email: string = '';
  password: string = '';
  toggleForm() {
    this.isRegister = !this.isRegister;
    this.name = '';
    this.email = '';
    this.password = '';
  }
  togglePassword() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }
  onSubmit() {
    console.log('Formulaire soumis');
    // ton traitement ici...
  }
}
