import express from 'express';
import boardRouter from './routes/board.route';
import commentRouter from './routes/comment.route';
import pinRouter from './routes/pin.route';
import userRouter from './routes/user.route';
import { connectDb } from './utils/connectDb';

const app = express();

app.use(express.json());

app.use('/boards', boardRouter);
app.use('/comments', commentRouter);
app.use('/pins', pinRouter);
app.use('/users', userRouter);

app.listen(3500, () => {
  connectDb();
  console.log('Server is running');
});
