import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // header collapse trigger
	isHeaderCollapsed = true;

  constructor(
    private router: Router,
    private authService: UserAuthService
  ) { }

  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}
