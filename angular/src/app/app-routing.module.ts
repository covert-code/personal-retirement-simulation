import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './content-pages/index/index.component';
import { LoginFormComponent } from './content-pages/login/login.form/login.form.component';
import { CreateUserFormComponent } from './content-pages/createuser/createuser.form/createuser.form.component';
import { ParticipantdataFormComponent } from './content-pages/participantdata/participantdata.form/participantdata.form.component';
import { SurveyFormComponent } from './content-pages/survey/survey.form/survey.form.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: CreateUserFormComponent },
  { path: 'about-you', component: ParticipantdataFormComponent },
  { path: 'survey', component: SurveyFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
