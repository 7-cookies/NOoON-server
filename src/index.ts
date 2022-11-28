import express, { NextFunction, Request, Response } from "express";
import router from "./routes";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/v1", router); 

app.get("/", (req:Request, res:Response, next:NextFunction) => {
})

app.listen(port, () => {
    console.log(
        `
        |-------------------|
        | ⛄️ NoOoN Server⛄️ |
        |   Port : ${port}     |
        |-------------------|
        `
    )
}); 

module.exports = app;