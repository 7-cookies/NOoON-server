

<br />

# 내가 만든 눈사람 ☃️ Server
- 🦁 중앙대학교 멋쟁이사자처럼 대학 10기 중커톤
- 🦁 프로젝트 일시: 2022.10.30 ~ Ing

## ☃️ Our Service
  #### 서비스 소개
-  눈사람을 꾸며주고 메시지를 작성하여 마음을 공유하는 따뜻한 크리스마스 이야기


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
  
  |                **☃️ [나영경](https://github.com/na-yk)**                 |                **☃️ [최윤한](https://github.com/unanchoi)**                 |
  |:-----------------------------------:|:-----------------------------------:|
| [![FVCproductions](https://avatars.githubusercontent.com/u/102007066?v=4)]() | [![FVCproductions](https://avatars.githubusercontent.com/u/81692211?v=4)]() |
|                                 서버 개발자                                 |                                 서버 개발자                                 |
|        프로젝트 세팅<br />서버 배포<br />DB 설계<br />Place API 작성<br />        |        프로젝트 세팅<br />서버 배포<br />DB 설계<br />User, Snowman API 작성<br />        |

<br/>
