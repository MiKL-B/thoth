import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideIconComponent } from "../../components/shared/lucide-icon/lucide-icon.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, LucideIconComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }
  authForm!: FormGroup;

  regexEmail: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  regexPassword: RegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/

  propFirstname: FormControl = new FormControl<string>('', [
    Validators.required
  ])
  propLastname: FormControl = new FormControl<string>('', [
    Validators.required
  ])
  propEmail: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(this.regexEmail)
  ]);
  propPassword: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(this.regexPassword)
  ])
  propRemember: FormControl = new FormControl<boolean>(false);
  propCondition: FormControl = new FormControl<boolean>(false, [
    Validators.requiredTrue
  ]);
  propHoneypot: FormControl = new FormControl<string>('');

  isRegisterForm: boolean = false;
  isVisiblePassword: boolean = false;


  ngOnInit(): void {
    this.initForm()
  }

  initForm() {

    this.authForm = new FormGroup({
      email: this.propEmail,
      password: this.propPassword
    })

    if (this.isRegisterForm) {
      this.authForm.addControl('firstname', this.propFirstname);
      this.authForm.addControl('lastname', this.propLastname);
      this.authForm.addControl('condition', this.propCondition);
    }
    else {
      this.authForm.addControl('remember', this.propRemember);
    }
  }
  resetForm(): void {
    this.authForm.reset()
  }

  onSubmitForm(): void {
    if (this.propHoneypot.value !== "" || this.authForm.invalid) {
      return
    }
    const formData = this.authForm.value;
    console.log(formData)
    if (this.isRegisterForm) {
      this.authService.register(formData).subscribe({
        next: (res) => {
          console.log("Inscription réussie", res)
          // rediriger ou afficher un message
        },
        error: (err) => {
          console.log('Erreur inscription', err)
        }
      })
    }
    else {
      this.authService.login(formData).subscribe({
        next: (res) => {
          console.log('Connexion réussie', res);
          // stocker token, rediriger, etc.
        },
        error: (err) => {
          console.error('Erreur connexion', err);
        }
      });
    }
  }

  toggleForm() {
    this.isRegisterForm = !this.isRegisterForm;
    this.resetForm();
    this.initForm();
  }
  togglePassword() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }

}
