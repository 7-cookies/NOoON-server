export interface PlaceRequestDto {
    name: string;
    background: number;
}

export interface PlaceCreateRequestDto {
    name: string;
    background: number;
    invitationCode: string;
}

export interface PlaceGetRequestDto{
    invitationCode: string;
}