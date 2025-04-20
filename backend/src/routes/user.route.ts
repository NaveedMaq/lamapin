import { Router } from 'express';
import brcypt from 'bcryptjs';

import { test } from '../controllers/user.controller';
import { User } from '../models/user.model';

const router = Router();

router.post('/create', async (req, res) => {
  const userInformation = req.body;

  console.log({ userInformation });

  const newUser = await User.create({
    displayName: userInformation.displayName,
    username: userInformation.username,
    email: userInformation.email,
    hashedPassword: await brcypt.hash(userInformation.password, 10),
  });

  res.status(201).json(newUser);
});

router.get('/fetch', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

router.patch('/update', async (req, res) => {
  const updatedUser = await User.updateOne({ username: 'test' }, req.body);

  res.json(updatedUser);
});

router.delete('/', async (req, res) => {
  const deletedUser = await User.updateOne({ username: 'test' });

  res.json(deletedUser);
});

export default router;
