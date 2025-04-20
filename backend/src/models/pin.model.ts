import { Document, model, Schema } from 'mongoose';
import { IBoard } from './board.model';

export interface IPin extends Document {
  media: string;
  width: number;
  height: number;
  title: string;
  description: string;
  link: string;
  board?: Schema.Types.ObjectId | IBoard;
  tags: string[];
  user: Schema.Types.ObjectId;
}

const pinSchema = new Schema<IPin>({
  media: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  link: {
    type: String,
  },
  board: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
  },

  tags: {
    type: [String],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const Pin = model<IPin>('Pin', pinSchema);
