import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css']
})
export class RegisterStaffComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  selectedRole: any;
  roleOptions = [
    {
      id: 1,
      display: 'Super'
    },
    {
      id: 2,
      display: 'Medium'
    },
    {
      id: 3,
      display: 'Basic'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init () {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  registerStaff () {

    console.log(this.registerForm);
    
    
    this.authService.registerUser(this.registerForm.value).subscribe(
      data => {
        this.tokenService.SetToken(data.token);
        
        setTimeout(() => {
          this.successMessage = "User is successfully register..!!";
          this.registerForm.reset();
        }, 2000);
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
    this.successMessage = '';
  }

}
