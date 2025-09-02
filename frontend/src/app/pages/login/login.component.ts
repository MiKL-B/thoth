import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideIconComponent } from "../../components/shared/lucide-icon/lucide-icon.component";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, LucideIconComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
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
    console.log(this.authForm.value)
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
