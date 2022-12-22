import { FindSnowmanRequestDto } from './../dto/snowman/snowmanRequestDto';
import { fail, success } from './../constants/response';
import { validationResult } from 'express-validator';
import { Request, Response } from "express"
import { m, sc } from '../constants';
import { snowmanService } from '../services';

// * 눈사람 생성 
// * request data: head, accessory, eye, nose, mouse, arm, letter, creator
const createSnowman = async (req:Request, res:Response) => {

    const error =  validationResult(req);
    if (!error.isEmpty) {
        console.log(error)
        return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.BAD_REQUEST));
    }

    try {
        
        const createSnowmanRequestDto = req.body;
        const { invitationCode } = req.params;

        const createSnowmanResponseDto = await snowmanService.createSnowman(createSnowmanRequestDto, invitationCode);

        if (createSnowmanResponseDto == sc.BAD_REQUEST) {
            return res.status(sc.BAD_REQUEST).send(fail(sc.OK, m.CREATE_SNOWMAN_LIMIT))
        }
        if(!createSnowmanResponseDto) {
            return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.CREATE_SNOWMAN_FAIL));
        }

        return res.status(sc.CREATED).send(success(sc.CREATED, m.CREATE_SNOWMAN_SUCCESS, createSnowmanResponseDto));
        
    } catch (error) {
        console.log(error)
        if (error == sc.BAD_REQUEST) {
            return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.BAD_REQUEST));
        }
        
        return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, m.INTERNAL_SERVER_ERROR));
    }

   
}

// * 눈사람 조회
const findSnowman = async (req:Request, res:Response) => {
    const { invitationCode, snowmanId } = req.params;

    const findSnowmanRequestDto: FindSnowmanRequestDto = {
        invitationCode,
        snowmanId: Number(snowmanId)
    }

    try {
        const responseDto = await snowmanService.findSnowman(findSnowmanRequestDto);

        if (responseDto == null) {
            return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST,m.GET_SNOWMAN_FAIL))
        }

        return res.status(sc.OK).send(success(sc.OK, m.GET_SNOWMAN_SUCCESS, responseDto))
    } catch (error) {
        if (error == sc.BAD_REQUEST) {
            return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, m.BAD_REQUEST))
        }
        return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, m.INTERNAL_SERVER_ERROR))
    }
}

const snowmanController = {
    createSnowman,
    findSnowman
};

export default snowmanController;