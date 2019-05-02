import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	isHeaderCollapsed: boolean = true;
  authenticated: boolean;

  constructor(
    private router: Router,
    private authService: UserAuthService
  ) {
    this.authenticated = this.authService.state.isAuthenticated();
    this.authService.state.authenticatedStatus.subscribe(
      (status: boolean) => { this.authenticated = status }
    );
  }

  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}
