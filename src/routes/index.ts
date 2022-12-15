import { Router } from "express";
import userRouter from "./userRouter";
import placeRouter from "./placeRouter";
import snowmanRouter from "./snowmanRouter";


const router: Router = Router();

router.use("/user", userRouter);
router.use("/place", snowmanRouter);
router.use("/place", placeRouter);

export default router;