import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexJumbotronComponent } from './index.jumbotron/index.jumbotron.component';
import { SurveyFormComponent } from './survey.form/survey.form.component';
import { ParticipantdataFormComponent } from './participantdata.form/participantdata.form.component';
import { InputService } from './services/input.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexJumbotronComponent,
    SurveyFormComponent,
    ParticipantdataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    InputService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    IndexJumbotronComponent,
    SurveyFormComponent,
    ParticipantdataFormComponent
  ]
})
export class AppModule { }
