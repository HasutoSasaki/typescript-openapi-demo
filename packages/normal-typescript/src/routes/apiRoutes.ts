import { Router } from 'express';
import { ApiController } from '../controllers/apiController';

const router = Router();
const apiController = new ApiController();

router.get('/example', apiController.getMethod);
router.get('/example/:id', apiController.getMethodById);

export default router;