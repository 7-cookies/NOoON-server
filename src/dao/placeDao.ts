import { PrismaClient } from '@prisma/client';
import { PlaceCreateRequestDto, PlaceGetRequestDto } from '../dto/place/placeRequestDto';
import { PlaceGetResponseDto, PlaceResponseDto } from '../dto/place/placeResponseDto';

const prisma = new PrismaClient();

const createPlace = async (requestDto: PlaceCreateRequestDto) => {
    const responseDto = await prisma.place.create({
        data: {
            name: requestDto.name,
            background: requestDto.background,
            invitation_code: requestDto.invitationCode
        }
    })
    return responseDto;
}

const findPlaceIdByInvitationCode = async (invitationCode: string) => {
    const data = await prisma.place.findFirst({
        where: {
            invitation_code : invitationCode
        },
        select: {
            id: true,
            invitation_code : true
        }
    })
    return data;
}

const findPlaceInvitationCodeById = async (placeId: number) => {
    const data = await prisma.place.findFirst({
        where: {
            id : placeId
        },
        select: {
            id: true,
            invitation_code : true
        }
    })
    return data;
}

const getPlace = async (placeGetRequestDto: PlaceGetRequestDto) => {
    const { invitationCode } = placeGetRequestDto;

    const data = await prisma.place.findFirst({
        where: {
            invitation_code: invitationCode,
        },
        select: {
            name: true,
            invitation_code: true,
            background:true,
            snowman_placeTosnowman_place_id: {
                orderBy:{
                    created_date: 'asc'
                },
                select : {
                    id: true,
                    head: true,
                    accessory: true,
                    eye: true,
                    nose: true,
                    mouth: true,
                    arm: true,
                    creator: true
                },
            },
            _count: {
                select:{
                    snowman_placeTosnowman_place_id: true
                },
            },   
        },
    })

    return data;
}

const placeDao = {
    findPlaceIdByInvitationCode,
    createPlace,
    getPlace,
    findPlaceInvitationCodeById
}
export default placeDao;