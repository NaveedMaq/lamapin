import { Request, Response } from 'express';
import { Board } from '../models/board.model';
import { Pin } from '../models/pin.model';

export const getUserBoards = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const boards = await Board.find({ user: userId });

  const boardsWithPinDetails = await Promise.all(
    boards.map(async (board) => {
      const pinCount = await Pin.countDocuments({ board: board._id });

      const firstPin = await Pin.findOne({ board: board._id });

      return {
        ...board.toObject(),
        pinCount,
        firstPin: firstPin,
      };
    })
  );

  res.status(200).json(boardsWithPinDetails);
};
