import { Router } from 'express';
import { getUserBoards } from '../controllers/board.controller';

const router = Router();

router.get('/:userId', getUserBoards);

export default router;
