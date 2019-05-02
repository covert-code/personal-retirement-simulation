import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserAuthService } from 'src/app/services/userauth.service';
import {
  IUserLoginQuery
} from 'src/app/services/userauth.service.models/service-interface';

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

  // Hide/Show password
  passwordFieldType: string = 'password';

  // Main function when submit button is pushed
  onFormSubmitClick(): void {
    this.validateFormContents().subscribe(
      (formValid: boolean) => {
        if (formValid) {
          this.submitFormContents().subscribe(
            (submissionSuccess: boolean) => {
              if (submissionSuccess) {
                this.navigateNext();
              }
            }
          );
        }
      }
    );
  }


  /* On-Submit Form Validation */
  loginFormFlags = {
    authFail: false,
  }

  validateFormContents(): Observable<boolean> {
    return of(this.loginForm.valid);
  }


  /* Submit to Server */
  submitFormContents() : Observable<boolean> {
    var userLoginQuery: IUserLoginQuery = {
      user_email: this.loginForm.get('email').value,
      user_password: this.loginForm.get('password').value,
    };

    return this.authService.loginUser(userLoginQuery)
      .pipe(
        // Post-Reply Behavior
        map((authSuccess: boolean) => {
          this.loginFormFlags.authFail = !authSuccess;
          return authSuccess;
        })
      );
  }

  /* Navigation to Next Route */
  navigateNext() : void {
    this.router.navigate(['/about-you']); // todo
  }
}
