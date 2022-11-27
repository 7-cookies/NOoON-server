import { Router } from "express";
import { placeController } from "../controllers";
import { body } from 'express-validator';
import auth from "../middlewares/auth";

const router: Router = Router();

router.post('/',
[body('name').notEmpty(),
body('name').isLength({min:1, max:20}),
body('background').isInt()],
// auth,
placeController.createPlace);

router.get('/:invitationCode/',
placeController.getPlace);

export default router;