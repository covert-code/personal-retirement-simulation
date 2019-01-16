import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyFormComponent } from './survey.form/survey.form.component';
import { IndexJumbotronComponent } from './index.jumbotron/index.jumbotron.component';
import { ParticipantdataFormComponent } from './participantdata.form/participantdata.form.component';

const routes: Routes = [
  { path: 'home', component: IndexJumbotronComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'participantdata', component: ParticipantdataFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
