import { Component, OnInit } from '@angular/core';

// subcomponents
import { IndexJumbotronComponent } from './index.jumbotron/index.jumbotron.component';
import { IndexCardsComponent } from './index.cards/index.cards.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
