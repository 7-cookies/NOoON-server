export interface UserResponseDto {
    username: string
};

export interface UserSignUpResponseDto {
    id: number;
    username?: string;
    password?: string;
    accessToken?: string;
}

export interface UserSignInResponseDto {
    id: number;
    username?: string;
    password?: string;
    accessToken?: string;
    hasPlace?: string;
}