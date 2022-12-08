export interface PlaceResponseDto {
    name: string;
    background: number;
    invitation_code?: string;
}
export interface PlaceResponseFinalDto {
    name: string;
    background: number;
    invitationCode?: string;
}

export interface PlaceGetResponseDto {
    name: string;
    invitation_code: string;
    snowman_placeTosnowman_place_id: {
        id?: number;
        head?: number;
        accessory?: number;
        eye?: number;
        nose?: number;
        mouth?: number;
        arm?: number;
        creator?: string;
    }[];
    _count: {
        snowman_placeTosnowman_place_id?: number;
    };
}
export interface PlaceGetResponseFinalDto{
    name: string;
    invitationCode: string;
    snowmans: {
        id?: number;
        head?: number;
        accessory?: number;
        eye?: number;
        nose?: number;
        mouth?: number;
        arm?: number;
        creator?: string;
    }[];
    count?: number;
}