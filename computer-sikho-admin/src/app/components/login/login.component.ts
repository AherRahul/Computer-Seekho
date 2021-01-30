import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() isLoggedIn = new EventEmitter<any>();

  loginForm: FormGroup;
  errorMessage: string;
  userLoggedIn: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.init();
    this.userLoggedIn = this.tokenService.GetToken();
  }

  init () {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser () {
    this.loginForm.value.email = this.loginForm.value.email + '@computersikho.com'
    this.authService.loginUser(this.loginForm.value).subscribe(
      data => {
        this.tokenService.SetToken(data.token);
        this.loginForm.reset();
        this.isLoggedIn.emit(true);
        this.router.navigate(['dashboard']);
      },
      err => {
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
  }

  clearErrorMessage () {
    this.errorMessage = '';
  }

}
