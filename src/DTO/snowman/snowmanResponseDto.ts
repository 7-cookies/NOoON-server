export interface CreateSnowmanResponseDto {
    id: number;
    head: number;
    accessory: number;
    eye: number;
    nose: number;
    mouse: number;
    arm: number;
    letter: string | null;
    creator: string;
    createdDate?: Date;
}

export interface FindSnowmanResponseDto {
    
}
