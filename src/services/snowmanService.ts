import { sc } from "../constants";
import { placeDao, snowmanDao } from "../dao";
import { CreateSnowmanRequestDto } from "../dto/snowman/snowmanRequestDto";
import { CreateSnowmanResponseDto } from "../dto/snowman/snowmanResponseDto";

const createSnowman = async (requestDto:any, invitationCode: string) => {
    try {
        const placeId:number = await placeDao.findPlaceIdByInvitationCode(invitationCode) as number;

        const responseDto:any = await snowmanDao.createSnowman(requestDto, placeId);
        console.log(responseDto);

        if (responseDto == null) {
            return sc.BAD_REQUEST
        }

        return responseDto;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findSnowman = async (requestDto:any) => {
    try {
        const responseDto = await snowmanDao.findSnowmanById(requestDto);

        if (responseDto == null) {
            return sc.BAD_REQUEST
        }

        console.log(responseDto)
        return responseDto;

    } catch (error) {
        console.log(error)
        throw error;
    }
}

const snowmanService = {
    createSnowman,
    findSnowman
};

export default snowmanService;