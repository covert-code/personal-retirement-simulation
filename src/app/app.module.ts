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
// Index Page
import { IndexComponent } from './index/index.component';
import { IndexJumbotronComponent } from './index.jumbotron/index.jumbotron.component';
import { IndexCardsComponent } from './index.cards/index.cards.component';
// Forms (and Dependencies)
import { InputService } from './services/input.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyFormComponent } from './survey.form/survey.form.component';
import { ParticipantdataFormComponent } from './participantdata.form/participantdata.form.component';


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
  ]
})
export class AppModule { }
