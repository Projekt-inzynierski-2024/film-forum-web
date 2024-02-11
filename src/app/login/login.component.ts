import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { ToastUtils } from '../../utils/ToastUtils';
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
    private toastUtils: ToastUtils) {
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
      complete: (loggedUser?: UserLoginDto) => {
        this.toastUtils.showSuccess("Success", "You have been logged in successfully");
        this.loading = false;
      }, error: () => {
        this.toastUtils.showError("Wrong credentials", "Wrong email or password");
        this.loginForm.controls.password.reset();
        this.loading = false;
      }
    });
  }
}
