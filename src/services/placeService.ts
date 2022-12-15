import { PrismaClientValidationError } from "@prisma/client/runtime";
import { sc } from "../constants";
import { placeDao, userDao } from '../dao';
import { PlaceRequestDto, PlaceCreateRequestDto, PlaceGetRequestDto } from "../dto/place/placeRequestDto";
import { UserUpdateRequestDto } from "../dto/user/userRequestDto";
import { PlaceGetResponseDto, PlaceResponseFinalDto, PlaceGetResponseFinalDto } from "../dto/place/placeResponseDto";

const createPlace = async(placeRequestDto: PlaceRequestDto) => {
    try {
        const { name, background, userId } = placeRequestDto;

        //초대코드 생성
        let invitationCode = Math.random().toString(36).substring(2,8);
        //호출해서 비교
        while(await placeDao.findPlaceIdByInvitationCode(invitationCode) != null){
            invitationCode = Math.random().toString(36).substring(2,8);
        }
        
        const placeCreateRequestDto: PlaceCreateRequestDto = {
            name,
            background,
            invitationCode: invitationCode
        }
        
        const data = await placeDao.createPlace(placeCreateRequestDto);
        
        const userUpdateRequestDto: UserUpdateRequestDto = {
            userId: userId,
            placeId: data.id
        }
        
        const user = await userDao.findUserByUserId(userId);
        if(user?.place_id == null) {
            const updateUser = await userDao.updateUserPlaceId(userUpdateRequestDto);
        }
        else{
            return null
        }        

        if (data == null){
            return null;
        }
        else {
            const responseDto:PlaceResponseFinalDto = {
                name,
                background,
                invitationCode: data.invitation_code
            }
            return responseDto;
        }
    }
    catch (error) {
        console.log(error);
        throw error
    }
};

const getPlace = async(placeGetRequestDto : PlaceGetRequestDto) => {
    try{
        const data = await placeDao.getPlace(placeGetRequestDto);

        if (data==null){
            return null
        }

        const placeGetResponseDto = {
            name: data.name,
            invitationCode: data.invitation_code,
            background: data.background,
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

