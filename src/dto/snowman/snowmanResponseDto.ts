export interface CreateSnowmanResponseDto {
    id?: number;
    head?: number;
    accessory?: number;
    eye?: number;
    nose?: number;
    mouth?: number;
    arm?: number;
    letter?: string | null;
    creator?: string;
    createdDate?: Date;
};


export interface FindSnowmanResponseDto {
    id?: number;
    head?: number;
    accessory?: number;
    eye?: number;
    nose?: number;
    mouth?: number;
    arm?: number;
    letter?: string;
    creator?: string;
    createdDate?: Date;
};
