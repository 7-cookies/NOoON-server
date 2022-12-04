import bcrypt, { hash } from 'bcrypt';
import config from '../config';
import { m, sc} from '../constants';
import { userDao } from '../dao';
import { UserSignInResponseDto, UserSignUpResponseDto } from '../dto/user/userReponseDto';
import { UserSignUpRequestDto, UserSignInRequestDto } from '../dto/user/userRequestDto';
import jwtHandler from '../modules/jwtHandler';

// * 로그인
const signIn = async (userRequestDto:UserSignUpRequestDto) => {
    try {
        const user = await userDao.findUserByUsername(userRequestDto);
        if (!user) return null;
        
        const password:string = String(userRequestDto.password);
        
        // * 비밀번호 비교
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return sc.UNAUTHORIZED;

        return user.id;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

// * 회원가입
const signUp = async (userRequestDto:UserSignUpRequestDto) => {
    try {
        const { username, password } = userRequestDto;
        const saltRound:number = Number(config.saltRounds);
        const salt:string = await bcrypt.genSalt(saltRound);
        const hashedPassword:string = await bcrypt.hash(String(password), salt);

        const data = await userDao.findUserIdByUsername(username);

        if (data) return null;

        const userSignUpRequestDto: UserSignUpRequestDto =  { 
            username: username,
            password: hashedPassword
         };

        const userSignUpResponseDto:UserSignUpResponseDto = await userDao.createUser(userSignUpRequestDto);

        const accessToken = jwtHandler.sign(userSignUpResponseDto.id);

        const returnDto: UserSignUpResponseDto = {
            id: userSignUpResponseDto.id,
            username: userSignUpResponseDto.username,
            accessToken: accessToken
        }
        return returnDto;
    } catch (error) {
        console.log(error);
        throw error;
    }
};    

const userService = {
    signUp,
    signIn
};

export default userService;