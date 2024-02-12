import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {

  is_auth: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.is_auth = this.authService.isAuth();
  }

  logout() {
    this.authService.logout();
  }

}
