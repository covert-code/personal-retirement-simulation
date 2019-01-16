import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexJumbotronComponent } from './index.jumbotron/index.jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexJumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    IndexJumbotronComponent
  ]
})
export class AppModule { }
