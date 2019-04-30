import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
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
    private signupService: SignupService
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
    password: new FormControl()
  });

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
    return true; // todo
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
    this.signupService.postCreateUser(this.newUser).subscribe();
    return true; // todo
  }

  navigateNext() : void {
    this.router.navigate(['/about-you']);
  }

}
