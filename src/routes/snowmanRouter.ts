import { Router } from "express";
import { snowmanController } from "../controllers";
import auth from "../middlewares/auth";
import { timeLimit } from "../middlewares";
import { body } from "express-validator";

const router: Router = Router();

router.post('/',
body('head').not().notEmpty().isNumeric(),
body('accessory').notEmpty().isNumeric(),
body('eye').notEmpty().isNumeric(),
body('nose').notEmpty().isNumeric(),
body('mouse').notEmpty().isNumeric(),
body('arm').notEmpty().isNumeric(),
body('letter').isString().isLength({min:1, max:100}).withMessage("편지는 최소 1자, 최대 100자입니다."),
body('creator').isString().isLength({min:1, max:10}).withMessage("만든사람은 최소 1자, 최대 10자입니다."),
auth,
snowmanController.createSnowman);

router.get('/:snowmanId', timeLimit, auth,
snowmanController.findSnowman)

export default router;