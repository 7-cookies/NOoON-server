export interface CreateSnowmanRequestDto {
    head: number;
    accessory: number;
    eye: number;
    nose: number;
    mouse: number;
    arm: number;
    letter: string;
    creator: string;
}

export interface FindSnowmanRequestDto {
    invitationCode: string;
    snowmanId: number;
}