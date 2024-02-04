export class UserLoginDto {
  constructor(public email?: string, public password?: string, public totpCode?: string) { }
}

export class UserDto {
  constructor(public id: number, public username: string, public jwt: string) { }
}
