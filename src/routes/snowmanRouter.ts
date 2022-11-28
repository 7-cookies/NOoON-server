import { Router } from "express";
import { snowmanController } from "../controllers";
import auth from "../middlewares/auth";
import { body } from "express-validator";

const router: Router = Router();

router.post('/',
body('head').not().notEmpty(),
body('accessory').notEmpty(),
body('eye').notEmpty(),
body('nose').notEmpty(),
body('mouse').notEmpty(),
body('arm').notEmpty(),
body('letter').isString().isLength({max:100}),
body('creator').isString().isLength({max:10}),
snowmanController.createSnowman);

router.get('/:snowmanId',
snowmanController.findSnowman)

export default router;