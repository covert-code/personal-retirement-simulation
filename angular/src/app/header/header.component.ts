import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // header collapse trigger
	isHeaderCollapsed = true;

  constructor(authService: UserAuthService) { }
}
