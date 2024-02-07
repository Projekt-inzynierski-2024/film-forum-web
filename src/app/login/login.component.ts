import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { ToastUtils } from '../../utils/ToastUtils';
import { HttpErrorResponse } from '@angular/common/http';
import { UserLoginDto } from '../users/dto/UserDto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hasAnyLowercaseLetterValidator, hasAnyNumberValidator, hasAnyUppercaseLetterValidator } from '../../validators/auth.validator';

interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  userLoginDto: UserLoginDto = {};

  loginForm: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    email: new FormControl(this.userLoginDto.email ?? "", [Validators.email, Validators.required]),
    password: new FormControl(this.userLoginDto.password ?? "", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      hasAnyNumberValidator(),
      hasAnyLowercaseLetterValidator(),
      hasAnyUppercaseLetterValidator()
    ]),
  });

  constructor(
    private userService: UsersService,
    private ref: ChangeDetectorRef,
    private toastUtils: ToastUtils) {
  }

  ngOnInit(): void {
  }

  save() {
    if (!this.loginForm.valid) {
      return;
    }

    this.ref.detach();
    this.userService.login(this.userLoginDto).subscribe(response => {
      if (response.status === 200) {
        const loggedUser = response.body;
        this.toastUtils.showSuccess("Success", "You have been logged in successfully");
        this.ref.detectChanges();
      }
    }, (_: HttpErrorResponse) => {
      this.toastUtils.showError("Wrong credentials", "Wrong email or password");
      this.ref.detectChanges();
    });
  }
}
