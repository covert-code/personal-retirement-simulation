import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyFormComponent } from './survey.form/survey.form.component';
import { IndexComponent } from './index/index.component';
import { ParticipantdataFormComponent } from './participantdata.form/participantdata.form.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'about-you', component: ParticipantdataFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
