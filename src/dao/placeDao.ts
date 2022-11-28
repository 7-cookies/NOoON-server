import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
    findPlaceIdByInvitationCode
}

export default placeDao;