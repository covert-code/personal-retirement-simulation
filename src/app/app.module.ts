// Basic Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// Main App
import { AppComponent } from './app.component';
// Heder, Footer
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// Forms (and Dependencies)
import { InputService } from './services/input.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexJumbotronComponent } from './index.jumbotron/index.jumbotron.component';
import { SurveyFormComponent } from './survey.form/survey.form.component';
import { ParticipantdataFormComponent } from './participantdata.form/participantdata.form.component';
import { IndexComponent } from './index/index.component';
import { Index } from './index.cards/index.cards.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexJumbotronComponent,
    SurveyFormComponent,
    ParticipantdataFormComponent,
    IndexComponent,
    Index.CardsComponent
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
    FooterComponent,
    IndexJumbotronComponent,
    SurveyFormComponent,
    ParticipantdataFormComponent,
  ]
})
export class AppModule { }
