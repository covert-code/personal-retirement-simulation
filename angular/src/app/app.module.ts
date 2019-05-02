// Basic Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
// Routing Module
import { AppRoutingModule } from './app-routing.module';
// Main App
import { AppComponent } from './app.component';
// Services
import { UserAuthService } from './services/userauth.service';
// Heder, Footer
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// Content Pages
import { IndexComponent } from './content-pages/index/index.component';
import { IndexJumbotronComponent } from './content-pages/index/index.jumbotron/index.jumbotron.component';
import { IndexCardsComponent } from './content-pages/index/index.cards/index.cards.component';
import { SurveyFormComponent } from './content-pages/survey/survey.form/survey.form.component';
import { ParticipantdataFormComponent } from './content-pages/participantdata/participantdata.form/participantdata.form.component';
import { CreateUserFormComponent } from './content-pages/createuser/createuser.form/createuser.form.component';
import { LoginFormComponent } from './content-pages/login/login.form/login.form.component';

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
    CreateUserFormComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
  ],
  providers: [
    UserAuthService,
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class AppModule { }
