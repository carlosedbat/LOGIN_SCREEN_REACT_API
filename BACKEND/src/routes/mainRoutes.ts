import {Request, Response, Router} from 'express';
import * as homeController from '../controllers/home.controller';
import {Auth} from '../middlewares/Auth'
const router = Router();

//router.get('/api/login',homeController.login)

router.post('/api/signin',homeController.login)

router.get('/inicio',Auth.private,homeController.InitialScreen)

router.post('/api/validate', homeController.validateToken)

export default router;