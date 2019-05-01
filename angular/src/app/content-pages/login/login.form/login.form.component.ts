import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserAuthService } from 'src/app/services/userauth.service';
import {
} from 'src/app/services/userauth.service.models';

@Component({
  selector: 'app-login.form',
  templateUrl: './login.form.component.html',
  styleUrls: ['./login.form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: UserAuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // Main function when submit button is pushed
  onFormSubmitClick(): void {
    
  }
}
