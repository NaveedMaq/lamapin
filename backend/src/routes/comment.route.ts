import { Router } from 'express';
import { test } from '../controllers/comment.controller';

const router = Router();

router.get('/test', test);

export default router;
