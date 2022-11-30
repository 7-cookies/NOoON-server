<br/>
<img src ="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c07a5cac-4fa7-4690-b4ae-304743c27b04/%EC%A0%9C%EB%AA%A9_%EC%97%86%EB%8A%94_%EC%95%84%ED%8A%B8%EC%9B%8C%ED%81%AC_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221130T073504Z&X-Amz-Expires=86400&X-Amz-Signature=34e06741172ca2d7a0dd6736799ec34cb552aab4ea1ec0845c1261618ff02746&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25EC%25A0%259C%25EB%25AA%25A9_%25EC%2597%2586%25EB%258A%2594_%25EC%2595%2584%25ED%258A%25B8%25EC%259B%258C%25ED%2581%25AC%25205.png%22&x-id=GetObject" width="320" height="320" />

<br />

# 내가 만든 눈사람 ☃️ Server
- 🦁 중앙대학교 멋쟁이사자처럼 대학 10기 중커톤
- 🦁 프로젝트 일시: 2022.10.30 ~ Ing

## ☃️ Our Service
눈사람을 꾸며주고 메시지를 작성하여 마음을 공유하는 따뜻한 크리스마스 이야기



<br/> 

## ☃️ NOoON Server 프로젝트를 소개합니다 ☃️

### [🛠️ 기술 스택](https://panoramic-alligator-297.notion.site/Stack-7b4095964f924ef08c2d39af745f36c1)

### [🚀 API 명세서](https://www.notion.so/ee75a24a1301441f8f15ef413feef0e9?v=52b0079e699b4ad1bbc2e015667982fb)
### [📕 Convention ](https://panoramic-alligator-297.notion.site/Convention-b440fbdc18af45b0a2df2325df9b6499)


<br/>

# 🗂 프로젝트 폴더 구조

```
📦prisma
 ┗ 📜schema.prisma.ts
📦src
 ┣ 📂config
 ┃ ┗ 📜index.ts
 ┣ 📂controller
 ┃ ┣ 📜placeController.ts
 ┃ ┣ 📜snowmanController.ts
 ┃ ┣ 📜userController.ts
 ┃ ┗ 📜index.ts
 ┣ 📂dto
 ┃ ┣ 📂place
 ┃ ┃ ┣ 📜placeRequestDto.ts
 ┃ ┃ ┗ 📜placeResponseDto.ts
 ┃ ┣ 📂snowman
 ┃ ┃ ┣ 📜snowmanRequestDto.ts
 ┃ ┃ ┗ 📜snowmanResponseDto.ts
 ┃ ┗ 📂user
 ┃ ┃ ┗ 📜userRequestDto.ts
 ┃ ┃ ┗ 📜userResponseDto.ts
 ┣ 📂constants
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜tokenType.ts
 ┃ ┣ 📜statusCode.ts
 ┃ ┣ 📜response.ts
 ┃ ┗ 📜responseMessage.ts
 ┣ 📂middleware
 ┃ ┣ 📜auth.ts
 ┃ ┗ 📜index.ts
 ┣ 📂routes
 ┃ ┣ 📜placeRouter.ts
 ┃ ┣ 📜snowmanRouter.ts
 ┃ ┣ 📜userRouter.ts
 ┃ ┗ 📜index.ts
 ┣ 📂service
 ┃ ┣ 📜placeService.ts
 ┃ ┣ 📜snowmanService.ts
 ┃ ┣ 📜userService.ts
 ┃ ┗ 📜index.ts
 ┣ 📂modules
 ┃ ┗ 📜jwtHandler.ts
 ┃ 📂dao
 ┃ ┣ 📜placeDao.ts
 ┃ ┣ 📜snowmanDao.ts
 ┃ ┣ 📜userDao.ts
 ┃ ┗ 📜index.ts
 ┗ 📜index.ts
```

## 🚀 실행 방법
```
$ glt clone https://github.com/7-cookies/NOoON-server.git

$ yarn

$ yarn prisma db push 

$ yarn primsa generate

$ yarn run dev

```

<br>

## 👨‍👧‍👦 Team  
  
  |                **☃️ [나영경](https://github.com/holmir97)**                 |                **☃️ [최윤한](https://github.com/unanchoi)**                 |
  |:-----------------------------------:|:-----------------------------------:|
| [![FVCproductions](https://avatars.githubusercontent.com/u/102007066?v=4)]() | [![FVCproductions](https://avatars.githubusercontent.com/u/81692211?v=4)]() |
|                                 서버 개발자                                 |                                 서버 개발자                                 |
|        프로젝트 세팅<br />서버 배포<br />DB 설계<br />Place API 작성<br />        |        프로젝트 세팅<br />서버 배포<br />DB 설계<br />User, Snowman API 작성<br />        |


<br/>
