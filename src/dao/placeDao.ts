import { PrismaClient } from '@prisma/client';
import { PlaceCreateRequestDto } from '../dto/place/placeRequestDto';
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

// * 초대코드로 place id 조회
const findPlaceIdByInvitationCode = async (invitationCode: string) => {
    
    const data = await prisma.place.findFirst({
        where: {
            invitation_code: invitationCode
        }
    })

    return data?.id;
}

const placeDao = {
    findPlaceIdByInvitationCode,
    findPlaceByInvitationCode,
    createPlace
}

export default placeDao;