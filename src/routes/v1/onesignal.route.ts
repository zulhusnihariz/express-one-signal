import { Router } from 'express';
import { oneSignalController } from '../../controller';
import { validateRequest } from '../../utils';
import { oneSignalValidation } from '../../validations/';

const router = Router();

router.route('/notification').post(validateRequest(oneSignalValidation), oneSignalController.sendNotifications);

export default router;
