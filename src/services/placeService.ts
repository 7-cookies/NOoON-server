import { PrismaClientValidationError } from "@prisma/client/runtime";
import { sc } from "../constants";
import { placeDao } from '../dao';
import { PlaceRequestDto, PlaceCreateRequestDto, PlaceGetRequestDto } from "../dto/place/placeRequestDto";
import { PlaceGetResponseDto, PlaceResponseDto, PlaceGetResponseFinalDto } from "../dto/place/placeResponseDto";

const createPlace = async(placeRequestDto: PlaceRequestDto) => {
    try {
        const { name, background } = placeRequestDto;
        //초대코드 생성
        let invitationCode = Math.random().toString(36).substring(2,8);
        //호출해서 비교
        while(await placeDao.findPlaceIdByInvitationCode(invitationCode) != null){
            invitationCode = Math.random().toString(36).substring(2,8);
        }
        
        const placeCreateRequestDto: PlaceCreateRequestDto = {
            name: name,
            background: background,
            invitationCode: invitationCode
        }
        
        const placeCreateResponseDto:PlaceResponseDto = await placeDao.createPlace(placeCreateRequestDto);
        //다시 검증
        if (!placeCreateResponseDto){
            return sc.BAD_REQUEST
        }
        else return placeCreateResponseDto;
    }
    catch (error) {
        console.log(error);
        throw error
    }
};

const getPlace = async(placeGetRequestDto : PlaceGetRequestDto) => {
    try{
        const data: (PlaceGetResponseDto|null) = await placeDao.getPlace(placeGetRequestDto);

        if (data==null){
            return null
        }

        const placeGetResponseDto: PlaceGetResponseFinalDto = {
            name: data.name,
            invitation_code: data.invitation_code,
            snowmans: data.snowman_placeTosnowman_place_id,
            count: data._count.snowman_placeTosnowman_place_id
        }

        return placeGetResponseDto;
    }
    catch(error) {
        console.log(error);
        throw error
    }
}
const placeService = {
    createPlace, 
    getPlace
};

export default placeService;

