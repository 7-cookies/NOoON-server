import { PrismaClient } from '@prisma/client';
import { UserSignInResponseDto, UserSignUpResponseDto } from '../dto/user/userReponseDto';
import { UserSignInRequestDto,UserUpdateRequestDto } from '../dto/user/userRequestDto';

const prisma = new PrismaClient();

const findPasswordByUsername = async (username: string) => {
    const data = prisma.user.findFirst({
        where: {
            username: username
        },
        select: {
            password: true
        }
    })
    return data;
};


const findUserIdByUsername = async (username: string) => {
    const data = await prisma.user.findFirst({
        where: {
            username: username
        },
        select: {
            id: true
        }
    })
    return data;
};


const createUser = async (requestDto: UserSignInRequestDto) => {
    const responseDto:UserSignUpResponseDto = await prisma.user.create({
        data: {
            username: requestDto.username,
            password: requestDto.password
        },
        select: {
            id: true,
            username: true,
            password: true,
        }
    })
    return responseDto;
}


const findUserByUsername = async (requestDto: UserSignInRequestDto) => {
    const user = await prisma.user.findFirst({
        where: {
            username: requestDto.username
        },
    });
    return user;
}


const updateUserPlaceId = async (requestDto: UserUpdateRequestDto) => {
    const user = await prisma.user.update({
        where: {
            id: requestDto.userId
        },
        data: {
            place: {
                connect: {
                    id: requestDto.placeId
                },
            },
        },
    });

    return user;
}




const userDao = {
    findPasswordByUsername,
    findUserIdByUsername,
    createUser,
    findUserByUsername,
    updateUserPlaceId,
}

export default userDao;