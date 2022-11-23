import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error();
}

export default {
    port: process.env.PORT,
    env: process.env.NODE_ENV as string,

    // 인증/인가 관련
    jwtSecret: process.env.JWT_SECRET as string,
    saltRounds: process.env.SALT_ROUNDS as string
};