import { Request, Response } from 'express';
import { Pin } from '../models/pin.model';

export const getPins = async (req: Request, res: Response): Promise<void> => {
  const pageNumber = Number(req.query.cursor) || 0;
  const search = req.query.search as string;
  const userId = req.query.userId as string;
  const boardId = req.query.boardId as string;
  const LIMIT = 21;
  const pins = await Pin.find(
    search
      ? {
          $or: [
            { title: { $regex: search, $options: 'i' } },
            { tags: { $in: [search] } },
          ],
        }
      : userId
      ? { user: userId }
      : boardId
      ? { board: boardId }
      : {}
  )
    .limit(LIMIT)
    .skip(pageNumber * LIMIT);

  const hasNextPage = pins.length === LIMIT;

  res
    .status(200)
    .json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
};

export const getPin = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const pin = await Pin.findById(id).populate(
    'user',
    'username img displayName'
  );

  if (!pin) {
    res.status(404).json({ message: 'Pin not found' });
    return;
  }

  res.status(200).json(pin);
};
