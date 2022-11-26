import { PrismaClient } from '@prisma/client';
import { CreateSnowmanRequestDto } from '../dto/snowman/snowmanRequestDto';
import { CreateSnowmanResponseDto } from '../dto/snowman/snowmanResponseDto';

const prisma = new PrismaClient();

const createSnowman = async (createSnowmanRequestDto:CreateSnowmanRequestDto) => {
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
        }
    })

    const createSnowmanResponseDto: CreateSnowmanResponseDto = {
        id: snowman.id,
        head: snowman.head,
        accessory: snowman.accessory,
        eye: snowman.eye,
        nose: snowman.nose,
        mouse: snowman.mouse,
        arm: snowman.arm,
        letter: snowman.letter,
        creator: snowman.creator,
        createdDate: snowman.created_date as Date
    }

    return createSnowmanResponseDto;
}

const snowmanDao = {
    createSnowman
}

export default snowmanDao;