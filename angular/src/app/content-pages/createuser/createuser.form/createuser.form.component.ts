import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
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
export class CreateUserFormComponent {

  newUser: IUser;

  constructor(
    private router: Router,
    private authService: UserAuthService
  ) {
      this.newUser =  {
        user_email: null,
        user_password: null,
        user_title: null,
        user_fname: null,
        user_initial: null,
        user_lname: null
    };
  }

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
    email_unavailable: false,
  };

  // Main function when submit button is pushed
  onFormSubmitClick(): void {
    if (this.validateFormContents()) {
      this.commitFormContents();
      if (this.submitFormContents()) {
        this.navigateNext();
      }
    }  
  }

  validateFormContents(): boolean {
    // Check if the email address is alredy registered
    this.authService.checkAvailable({
      user_email: this.newUserForm.get('email').value
    }).subscribe((exists: boolean) => {
      if (exists) {
        console.log("Email Not OK");
        this.newUserFormFlags.email_unavailable = true;
      }
      else {
        console.log("Email OK");
        this.newUserFormFlags.email_unavailable = false;
        // todo proceed
      }
    });
    return false; // todo make obs
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
