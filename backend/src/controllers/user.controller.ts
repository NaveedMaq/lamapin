import { Request, Response } from 'express';
import { IUser, User } from '../models/user.model';

export const getUser = async (req: Request, res: Response) => {
  const { username } = req.params;

  const user = await User.findOne({
    username,
  });

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

  res.status(200).json(detailsWithoutPassword);
};
