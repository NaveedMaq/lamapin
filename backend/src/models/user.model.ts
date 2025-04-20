import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  _id: Schema.Types.ObjectId;
  displayName: string;
  username: string;
  email: string;
  img?: string;
  hashedPassword: string;
}

const userSchema = new Schema<IUser>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>('User', userSchema);
