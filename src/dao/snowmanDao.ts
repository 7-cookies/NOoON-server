import { PrismaClient } from '@prisma/client';
import { CreateSnowmanResponseDto } from '../dto/snowman/snowmanResponseDto';

const prisma = new PrismaClient();

// * 눈사람 생성
// request data: head, accessory, eye, nose, mouse, arm, letter, creator, place_id
// response data: head, accessory, eye, nose, mouse, arm, letter, creator, created_date
const createSnowman = async (createSnowmanRequestDto:any, placeId:number) => {
    const { head, accessory, eye, nose, mouse, arm, letter, creator } = createSnowmanRequestDto;
    const snowman = await prisma.snowman.create({
        data: {
            head: head,
            accessory: accessory,
            eye: eye,
            nose: nose,
            mouse: mouse,
            arm: arm,
            letter: letter,
            creator: creator,
            place_id: placeId
        }
    })

    console.log(snowman)

    const createSnowmanResponseDto = {
        id: snowman.id,
        head: snowman.head,
        accessory: snowman.accessory,
        eye: snowman.eye,
        nose: snowman.nose,
        mouse: snowman.mouse,
        arm: snowman.arm,
        letter: snowman.letter,
        creator: snowman.creator,
        createdDate: snowman.created_date as Date,
    }

    console.log(createSnowmanResponseDto)

    return createSnowmanResponseDto;
}

// * 눈사람 id로 조회 
const findSnowmanById = async (findSnowmanRequestDto:any) => {
    const snowmanId:number = Number(findSnowmanRequestDto.snowmanId)

    const responseDto = await prisma.snowman.findFirst({
        where: {
            id: snowmanId
        }
    })

    console.log(responseDto)
    
    return responseDto;
}

const snowmanDao = {
    createSnowman,
    findSnowmanById
}

export default snowmanDao;