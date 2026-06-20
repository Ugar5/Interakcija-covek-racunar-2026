import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { Utills } from '../utills';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utils: Utills,
  ) {
    this.form = this.formBuilder.group({
      email: ['john.doe@example.com', [Validators.required, Validators.email]],
      password: ['password123', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      this.utils.showAlert('Invalid form data!');
      return;
    }

    const isLoggedIn = UserService.login(
      this.form.value.email,
      this.form.value.password
    );

    if (!isLoggedIn) {
      this.utils.showAlert('Invalid credentials!');
      return;
    }

    this.router.navigateByUrl('/');
  }
}