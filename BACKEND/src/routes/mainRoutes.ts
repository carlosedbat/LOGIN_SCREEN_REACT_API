import {Request, Response, Router} from 'express';
import * as homeController from '../controllers/home.controller';

const router = Router();

router.get('/login',homeController.login)




export default router;