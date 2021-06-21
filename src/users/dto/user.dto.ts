export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    username: string;
}

export class LoginUserDto {
    username: string;
    password: string;
}