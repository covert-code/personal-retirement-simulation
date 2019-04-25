import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyFormComponent } from './content-pages/survey/survey.form/survey.form.component';
import { IndexComponent } from './content-pages/index/index.component';
import { ParticipantdataFormComponent } from './content-pages/participantdata/participantdata.form/participantdata.form.component';

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
