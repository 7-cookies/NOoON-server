import { FindSnowmanRequestDto } from './../dto/snowman/snowmanRequestDto';
import { FindSnowmanResponseDto } from './../dto/snowman/snowmanResponseDto';
import { sc } from "../constants";
import { placeDao, snowmanDao } from "../dao";
import { CreateSnowmanRequestDto } from "../dto/snowman/snowmanRequestDto";
import { CreateSnowmanResponseDto } from "../dto/snowman/snowmanResponseDto";


const createSnowman = async (requestDto:CreateSnowmanRequestDto, invitationCode: string) => {
    try {
        const place = await placeDao.findPlaceIdByInvitationCode(invitationCode);
        const placeId = place?.id;

        if (placeId == null) {
            return null
        }

        const responseDto:CreateSnowmanResponseDto = await snowmanDao.createSnowman(requestDto, Number(placeId));
        console.log(responseDto);

        if (responseDto == null) {
            return null
        }

        return responseDto;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

const findSnowman = async (requestDto:FindSnowmanRequestDto) => {
    try {
        const data = await snowmanDao.findSnowmanById(requestDto);

        if (data == null) {
            return null
        }

    const responseDto:FindSnowmanResponseDto = {
        id: data?.id,
        head: data?.head,
        accessory: data?.accessory,
        eye: data?.eye,
        nose: data?.nose,
        mouth: data?.mouth,
        arm: data?.arm,
        letter: data?.letter as string,
        creator: data?.creator,
        createdDate: data?.created_date as Date
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