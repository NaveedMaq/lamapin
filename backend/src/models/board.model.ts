import { Document, model, Schema } from 'mongoose';
import { IUser } from './user.model';

export interface IBoard extends Document {
  title: string;
  user: Schema.Types.ObjectId | IUser;
  createdAt?: Date;
  updatedAt?: Date;
}

const boardSchema = new Schema<IBoard>(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

export const Board = model<IBoard>('Board', boardSchema);
