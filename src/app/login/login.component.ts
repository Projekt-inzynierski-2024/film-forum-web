import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { ToastUtils } from '../../utils/ToastUtils';
import { UserDto, UserLoginDto } from '../users/dto/UserDto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hasAnyLowercaseLetterValidator, hasAnyNumberValidator, hasAnyUppercaseLetterValidator } from '../../validators/auth.validator';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../users/auth.service';
import { Router } from '@angular/router';

interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [UsersService, AuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
      hasAnyNumberValidator(),
      hasAnyLowercaseLetterValidator(),
      hasAnyUppercaseLetterValidator()
    ]),
  });

  loading: boolean = false;

  constructor(
    private userService: UsersService,
    private toastUtils: ToastUtils,
    private authService: AuthService,
    private router: Router) {

    if (this.authService.isAuth()) {
      this.router.navigate(['users']);
    }
  }

  ngOnInit(): void {

  }

  save() {
    if (!this.loginForm.valid) {
      return;
    }

    this.loading = true;

    const { email, password } = this.loginForm.value;
    const userLoginDto: UserLoginDto = { email: email || "", password: password || "" };

    this.userService.login(userLoginDto).subscribe({
      next: (response: HttpResponse<UserDto>) => {
        if (response.status === 200) {
          this.authService.login(response.body);
          location.reload();
        }

        this.loading = false;
      }, error: () => {
        this.toastUtils.showError("Wrong credentials", "Wrong email or password");
        this.loginForm.controls.password.reset();
        this.loading = false;
      }
    });
  }
}
