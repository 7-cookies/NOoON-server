const message = {
    OK: "성공",
    BAD_REQUEST: "요청을 잘못 보냈습니다.",
    PAGE_NOT_FOUND: "요청하신 페이지를 찾을 수 없습니다",
    NEED_LOGIN: "로그인이 필요합니다.",
    NO_CONTENT: "데이터가 없습니다.",
    REPEATED_VALUE: "중복된 데이터입니다.",
    UNAUTHORIZED: "권한이 없습니다",
    INTERNAL_SERVER_ERROR: "서버 내부 오류",
    PASSWORD_NOT_VALID: "비밀번호를 형식이 잘못 되었습니다.",

    // JWT 관련
    NO_TOKEN: "TOKEN이 존재하지 않습니다.",
    TOKEN_INVALID: "TOKEN이 유효하지 않습니다.",
    TOKEN_EXPIRED: "TOKEN이 만료되었습니다.",

    // 로그인, 회원가입 관련
    NOT_FOUND: "",
    INVALID_PASSWORD: "패스워드가 유효하지 않습니다.",
    SIGN_IN_SUCCESS: "로그인 성공",
    SIGN_IN_FAIL: "로그아웃 실패",
    SIGN_UP_SUCCESS: "회원가입 성공",
    SIGN_UP_FAIL: "회원가입 실패",
    SIGN_UP_LIMIT: "username은 공백없이 영문, 숫자, 특수문자 1~20자입니다.",
    USER_EXIST: "존재하는 회원입니다.",
    

    // 동산
    CREATE_PLACE_SUCCESS: "동산 생성 성공",
    CREATE_PLACE_FAIL: "동산 생성 실패",
    GET_PLACE_SUCCESS: "동산 조회 성공",
    GET_PLACE_FAIL: "동산 조회 실패",

    // 눈사람
    CREATE_SNOWMAN_SUCCESS: "눈사람 생성 성공",
    CREATE_SNOWMAN_FAIL: "눈사람 생성 실패",
    GET_SNOWMAN_SUCCESS: "눈사람 조회 성공",
    GET_SNOWMAN_FAIL: "눈사람 조회 실패",
    GET_SNOWMAN_TIME_LIMIT: "눈사람 조회가 아직 불가능",

}

export default message;
