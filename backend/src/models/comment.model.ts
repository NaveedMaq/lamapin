import { Document, model, Schema } from 'mongoose';
import { IUser } from './user.model';
import { IPin } from './pin.model';

export interface IComment extends Document {
  description: string;
  pin: Schema.Types.ObjectId | IPin;
  user: Schema.Types.ObjectId | IUser;
}

const commentSchema = new Schema<IComment>(
  {
    description: {
      type: String,
      required: true,
    },
    pin: {
      type: Schema.Types.ObjectId,
      ref: 'Pin',
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

export const Comment = model<IComment>('Comment', commentSchema);
