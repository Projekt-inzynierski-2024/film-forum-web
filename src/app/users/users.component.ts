import { Component, OnInit } from '@angular/core';
import { UserDto, UserLoginDto } from './dto/UserDto';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  user: UserLoginDto = new UserLoginDto();

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  save() {
    this.userService.login(this.user).subscribe(response => {
      if (response.status === 200) {
        const loggedUser = response.body;
        console.log(loggedUser);
      }
    });
  }
}
