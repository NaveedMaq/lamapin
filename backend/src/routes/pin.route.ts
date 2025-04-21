import { Router } from 'express';
import { getPin, getPins } from '../controllers/pin.controller';

const router = Router();

router.route('/').get(getPins);

router.route('/:id').get(getPin);

export default router;
