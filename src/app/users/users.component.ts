import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [UsersService, AuthService],
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkAuth();
  }
}
