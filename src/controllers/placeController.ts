import { Request, Response } from "express"
import { validationResult } from 'express-validator';
import { m, sc } from "../constants";
import { fail, success } from "../constants/response";
import { PlaceRequestDto } from "../dto/place/placeRequestDto";
import { placeService } from "../services";

const createPlace= async (req:Request, res:Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()){
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.BAD_REQUEST));
    }
    
    const placeRequestDto: PlaceRequestDto = req.body;
    try {
        const placeResponseDto = await placeService.createPlace(placeRequestDto);
        
        if(!placeResponseDto) { 
            return res.status(sc.BAD_REQUEST).send(fail)
        }
        return res.status(sc.OK).send(success(sc.OK, m.OK, placeResponseDto));
    } catch (error){
        console.log(error);
        if(error == sc.BAD_REQUEST){
            return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST,m.BAD_REQUEST));
        }
        return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR,m.INTERNAL_SERVER_ERROR));

    }
}


const placeController = {
    createPlace
}

export default placeController;