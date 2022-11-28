import { PrismaClient } from '@prisma/client';
import { PlaceCreateRequestDto, PlaceGetRequestDto } from '../dto/place/placeRequestDto';
import { PlaceResponseDto } from '../dto/place/placeResponseDto';

const prisma = new PrismaClient();

const createPlace = async (requestDto: PlaceCreateRequestDto) => {
    const responseDto:PlaceResponseDto = await prisma.place.create({
        data: {
            name: requestDto.name,
            background: requestDto.background,
            invitation_code: requestDto.invitationCode
        },
        select: {
            name: true,
            background: true,
            invitation_code: true,
        }
    })
    return responseDto;
}

const findPlaceByInvitationCode = async (invitationCode: string) => {
    const data = await prisma.place.findFirst({
        where: {
            invitation_code : invitationCode
        },
        select: {
            invitation_code : true
        }
    })

    return data;
}

const getPlace = async (placeGetRequestDto: PlaceGetRequestDto) => {
    const { invitationCode } = placeGetRequestDto;

    console.log(invitationCode);
    const data = await prisma.place.findFirst({
        where: {
            invitation_code: invitationCode,
        },
        select: {
            name: true,
            invitation_code: true,
            snowman_placeTosnowman_place_id: {
                select : {
                    id: true,
                    head: true,
                    accessory: true,
                    eye: true,
                    nose: true,
                    mouse: true,
                    arm: true,
                    creator: true
                },
            },    
        },
    })

    console.log(data);
    return data;
}

    const placeDao = {
    findPlaceByInvitationCode,
    createPlace,
    getPlace
}
export default placeDao;