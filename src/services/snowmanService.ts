import { PlaceGetRequestDto } from './../dto/place/placeRequestDto';
import { FindSnowmanRequestDto } from './../dto/snowman/snowmanRequestDto';
import { FindSnowmanResponseDto } from './../dto/snowman/snowmanResponseDto';
import { sc } from "../constants";
import { placeDao, snowmanDao } from "../dao";
import { CreateSnowmanRequestDto } from "../dto/snowman/snowmanRequestDto";
import { CreateSnowmanResponseDto } from "../dto/snowman/snowmanResponseDto";
import snowmanCreateLimit from '../constants/snowmanCreateLimit';


const createSnowman = async (requestDto:CreateSnowmanRequestDto, invitationCode: string) => {
    try {
        const place = await placeDao.getPlace({invitationCode});
        const placeId = place?.id;

        if (placeId == null) {
            return null
        }
        
        const snowmanCount = place?._count.snowman_placeTosnowman_place_id as number;

        if (snowmanCount > snowmanCreateLimit.SNOWMAN_CREATE_LIMIT) {
            return sc.BAD_REQUEST;            
        } 

        const responseDto:CreateSnowmanResponseDto = await snowmanDao.createSnowman(requestDto, Number(placeId));

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

        return responseDto;

    } catch (error) {
        console.log(error);
        throw error;
    }
}


const snowmanService = {
    createSnowman,
    findSnowman
};

export default snowmanService;