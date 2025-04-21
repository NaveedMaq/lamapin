import express from 'express';
import cors from 'cors';
import boardRouter from './routes/board.route';
import commentRouter from './routes/comment.route';
import pinRouter from './routes/pin.route';
import userRouter from './routes/user.route';
import { connectDb } from './utils/connectDb';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

app.use('/boards', boardRouter);
app.use('/comments', commentRouter);
app.use('/pins', pinRouter);
app.use('/users', userRouter);

app.listen(3500, async () => {
  await connectDb();

  console.log('Server is running');
});
