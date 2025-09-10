import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'app-auth',
  imports: [NgClass, LucideIcon, ReactiveFormsModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth implements OnInit {
  constructor(private authService: AuthService) {}

  authForm!: FormGroup;
  regexEmail: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  regexPassword: RegExp =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  propFirstname: FormControl = new FormControl<string>('', [
    Validators.required,
  ]);
  propLastname: FormControl = new FormControl<string>('', [
    Validators.required,
  ]);
  propEmail: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(this.regexEmail),
  ]);
  propPassword: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(this.regexPassword),
  ]);
  propRemember: FormControl = new FormControl<boolean>(false);
  propCondition: FormControl = new FormControl<boolean>(false, [
    Validators.requiredTrue,
  ]);
  propHoneypot: FormControl = new FormControl<string>('');

  isRegisterForm: boolean = false;
  isVisiblePassword: boolean = false;
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = new FormGroup({
      email: this.propEmail,
      password: this.propPassword,
    });

    if (this.isRegisterForm) {
      this.authForm.addControl('firstname', this.propFirstname);
      this.authForm.addControl('lastname', this.propLastname);
      this.authForm.addControl('condition', this.propCondition);
    } else {
      this.authForm.addControl('remember', this.propRemember);
    }
  }
  resetForm(): void {
    this.authForm.reset();
  }

  onSubmitForm(): void {
    if (this.propHoneypot.value !== '' || this.authForm.invalid) {
      return;
    }
    console.log(this.authForm.value);
    if (!this.isRegisterForm) {
      this.loginForm();
    } else {
      this.registerForm();
    }
  }
  loginForm() {
    this.authService.login(this.authForm.value);
  }
  registerForm() {
    this.authService.register(this.authForm.value);
  }
  displayRegisterForm(isRegister: boolean) {
    this.isRegisterForm = isRegister;
    this.resetForm();
    this.initForm();
  }

  toggleVisiblePassword() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }
}
