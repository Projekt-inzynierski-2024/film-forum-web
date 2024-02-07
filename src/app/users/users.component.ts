import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UsersService) {
  }

  ngOnInit() {
  }
}
