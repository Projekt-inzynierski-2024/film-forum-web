import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { UserLoginDto } from './dto/UserDto';
import { UsersService } from './users.service';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService, private messageService: MessageService, private ref: ChangeDetectorRef) { }

  userLoginDto: UserLoginDto = {};

  @ViewChild(NgForm, { static: false }) form: any;

  ngOnInit() {
  }

  save() {
    this.ref.detach();
    this.userService.login(this.userLoginDto).subscribe(response => {
      if (response.status === 200) {
        const loggedUser = response.body;
        this.onSuccess("Success", "You have been logged in successfully");
        this.ref.detectChanges();
      }
    }, (_: HttpErrorResponse) => {
      this.onError("Wrong credentials", "Wrong email or password");
      this.ref.detectChanges();
    }, null);
  }

  onSuccess(summary: string, detail: string) {
    this.messageService.add({ severity: 'success', summary: summary, detail: detail });
  }

  onError(summary: string, detail: string) {
    this.messageService.add({ severity: 'error', summary: summary, detail: detail });
  }
}
