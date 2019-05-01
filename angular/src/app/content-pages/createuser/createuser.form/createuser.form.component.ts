import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserAuthService } from 'src/app/services/userauth.service';
import {
  IUserUnavailableQuery,
  IUserRegistrationQuery,
} from 'src/app/services/userauth.service.models';

import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-createuser.form',
  templateUrl: './createuser.form.component.html',
  styleUrls: ['./createuser.form.component.css']
})
export class CreateUserFormComponent implements OnInit {

  // Data model
  newUser: IUser;

  // Control element for Form
  newUserForm = new FormGroup({
    title: new FormControl(),
    firstName: new FormControl(),
    initial: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    password_conf: new FormControl()
  });

  newUserFormFlags = {
    email_available: true,
    password_match: true,
  };

  constructor(
    private router: Router,
    private authService: UserAuthService
  ) {
    // initialize data model
    this.newUser =  {
      user_email: null,
      user_password: null,
      user_title: null,
      user_fname: null,
      user_initial: null,
      user_lname: null
    };
  }

  ngOnInit() {
    // initialize form values
    for (const field in this.newUserForm.controls) {
      this.newUserForm.get(field).setValue('');
    }
  }

  // Main function when submit button is pushed
  onFormSubmitClick(): void {
    this.validateFormContents().subscribe(
      (form_errors: boolean) => {
        if (form_errors) {
          this.commitFormContents();
          if (this.submitFormContents()) {
            this.navigateNext();
          }
        }
      }
    );
  }


  /* Active Form Validation */

  validateFormContents(): Observable<boolean> {
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
    this.newUserFormFlags.password_match = valid;
    return of(valid);
  }

  validateFormEmailAvailable(): Observable<boolean> {
    // Ask auth service if the email address is available
    return this.authService.checkAvailable({
      user_email: this.newUserForm.get('email').value
    })
    .pipe(
      map((exists: boolean) => {
        // when we get it, read the boolean to see if available
        var valid: boolean = !exists

        // set and return
        this.newUserFormFlags.email_available = valid;
        return valid;
      })
    );
  }

  commitFormContents(): void {
    this.newUser.user_email = this.newUserForm.get('email').value;
    this.newUser.user_password = this.newUserForm.get('password').value;
    this.newUser.user_title = this.newUserForm.get('title').value;
    this.newUser.user_fname = this.newUserForm.get('firstName').value;
    this.newUser.user_initial = this.newUserForm.get('initial').value;
    this.newUser.user_lname = this.newUserForm.get('lastName').value;
  }

  submitFormContents() : boolean {
    this.authService.registerCreateUser(this.newUser).subscribe();
    return true; // todo
  }

  navigateNext() : void {
    this.router.navigate(['/about-you']);
  }

}
