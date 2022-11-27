import { PrismaClient } from '@prisma/client';
import { PlaceCreateRequestDto } from '../dto/place/placeRequestDto';
import { PlaceResponseDto } from '../dto/place/placeResponseDto';

const prisma = new PrismaClient();

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

const placeDao = {
    findPlaceByInvitationCode,
}
export default placeDao;