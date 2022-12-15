import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import router from "./routes";

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000 ;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(
    cors({
        credentials: true,
        origin: [
            "118.223.59.127",
            "118.223.59.127:3000", 
            "https://noonsaram-server.shop",
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "http://nooon-bucket.s3-website.ap-northeast-2.amazonaws.com:3000",
            "http://nooon-bucket.s3-website.ap-northeast-2.amazonaws.com"
        ],
    })
);

// route
app.use("/api/v1", router); 

app.get("/", (req:Request, res:Response, next:NextFunction) => {
})

const server = app
    .listen(port, () => {
    console.log(
        `
        |-------------------|
        | ⛄️ NoOoN Server⛄️ |
        |   Port : ${port}     |
        |-------------------|
        `
    )
})
.on('error', (err) => {
    console.log(err);
    process.exit(1);
});

server.timeout = 1000000;

module.exports = app;