import jwt from "jsonwebtoken";
import tokenType from "../constants/tokenType";
const dotenv = require('dotenv');
dotenv.config()

// AccessToken을 생성하는 Code
const sign = (userId: number) => {
  const payload = {
    userId,
  };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "2h" });
  return accessToken;
};

// token을 검증하는 함수
const verify = (token: string) => {
  let decoded: string | jwt.JwtPayload;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error: any) {
    if (error.message === "jwt expired") {
      return tokenType.TOKEN_EXPIRED;
    } else if (error.message === "invalid token") {
      return tokenType.TOKEN_INVALID;
    } else {
      return tokenType.TOKEN_INVALID;
    }
  }

  return decoded;
};

export default {
  sign,
  verify,
};