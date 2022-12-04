export interface UserSignUpRequestDto {
    username: string;
    password: string;
}

export interface JwtLoginUserDto {
    accessToken: string;
}

export interface UserSignInRequestDto {
    username: string;
    password: string;
}