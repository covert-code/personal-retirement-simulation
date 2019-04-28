// Basic Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// Main App
import { AppComponent } from './app.component';
// Heder, Footer
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// Index Page
import { IndexComponent } from './content-pages/index/index.component';
import { IndexJumbotronComponent } from './content-pages/index/index.jumbotron/index.jumbotron.component';
import { IndexCardsComponent } from './content-pages/index/index.cards/index.cards.component';
// Forms (and Dependencies)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyFormComponent } from './content-pages/survey/survey.form/survey.form.component';
import { ParticipantdataFormComponent } from './content-pages/participantdata/participantdata.form/participantdata.form.component';
// Services
import { SignupService } from './services/signup.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SurveyFormComponent,
    ParticipantdataFormComponent,
    IndexComponent,
    IndexJumbotronComponent,
    IndexCardsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SignupService
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class AppModule { }
