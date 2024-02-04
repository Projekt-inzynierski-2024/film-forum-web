import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserDto, UserLoginDto } from './dto/UserDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = API_URL;

  constructor(private http: HttpClient) { }

  login(userLoginDto: UserLoginDto): Observable<HttpResponse<UserDto>> {
    return this.http.post<UserDto>(this.url + "/login", userLoginDto, { observe: "response" });
  }
}
