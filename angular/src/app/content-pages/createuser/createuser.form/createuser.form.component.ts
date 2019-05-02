import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserAuthService } from 'src/app/services/userauth.service';
import {
  IUserUnavailableQuery,
  IUserRegistrationQuery,
} from 'src/app/services/userauth.service.models';

@Component({
  selector: 'app-createuser.form',
  templateUrl: './createuser.form.component.html',
  styleUrls: ['./createuser.form.component.css']
})
export class CreateUserFormComponent implements OnInit {

  newUserForm: FormGroup;

  constructor(
    private router: Router,
    private authService: UserAuthService
  ) { }

  ngOnInit() {
    this.newUserForm = new FormGroup({
      title: new FormControl(''),
      firstName: new FormControl('', [Validators.required]),
      initial: new FormControl('', [Validators.maxLength(1)]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(6), Validators.maxLength(50),
      ]),
      password_conf: new FormControl('', [
        Validators.required, Validators.minLength(6), Validators.maxLength(50),
      ]),
      password_vis_toggle: new FormControl(false),
    });
  }

  // Password Visibility Toggle
  passwordFieldType: string = 'password';
  passwordFieldTypeToggleDescriptor: string = 'show';
  setPasswordFieldType(): void {
    if (this.newUserForm.get('password_vis_toggle').value) {
      this.passwordFieldType = 'text';
      this.passwordFieldTypeToggleDescriptor = 'hide';
    } else {
      this.passwordFieldType = 'password';
      this.passwordFieldTypeToggleDescriptor = 'show';
    }
  }

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
  newUserFormFlags = {
    emailAvailable: true,
    passwordMatch: true,
  };

  validateFormContents(): Observable<boolean> {
    // Explicit Validation
    if (!this.newUserForm.valid) { return of(false); }

    // Terminal Validators
    return forkJoin(
      this.validatePasswordMatch(),
      this.validateFormEmailAvailable()
    ).pipe(
      // Here we combine all output with reduce on (a && b)
      map((values: boolean[]) => {
        return values.reduce(
          (a: boolean, b: boolean) => {
            return a && b;
          })
      })
    );
  }

  validatePasswordMatch(): Observable<boolean> {
    var password_text = this.newUserForm.get('password').value;
    var password_conf = this.newUserForm.get('password_conf').value;
    var valid: boolean = password_text == password_conf;

    // set and return
    this.newUserFormFlags.passwordMatch = valid;
    return of(valid);
  }

  validateFormEmailAvailable(): Observable<boolean> {
    // Ask auth service if the email address is available
    var userUnavailableQuery: IUserUnavailableQuery = {
      user_email: this.newUserForm.get('email').value
    }

    return this.authService.checkAvailable(userUnavailableQuery)
    .pipe(
      map(
        (exists: boolean) => {
          // when we get it, read the boolean to see if available
          var valid: boolean = !exists

          // set and return
          this.newUserFormFlags.emailAvailable = valid;
          return valid;
        }
      )
    );
  }

  submitFormContents() : Observable<boolean> {
    var userRegistrationQuery : IUserRegistrationQuery = {
      user_email: this.newUserForm.get('email').value,
      user_password: this.newUserForm.get('password').value,
      user_title: this.newUserForm.get('title').value,
      user_fname: this.newUserForm.get('firstName').value,
      user_initial: this.newUserForm.get('initial').value,
      user_lname: this.newUserForm.get('lastName').value,
    }

    return this.authService.registerCreateUser(userRegistrationQuery);
  }

  navigateNext() : void {
    this.router.navigate(['/about-you']);
  }

}
