import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  displayName: string;
  userName: string;
  email: string;
  img?: string;
  hashedPassword: string;
}

const userSchema = new Schema<IUser>(
  {
    displayName: {
      type: String,
      required: true,
    },
    userName: {
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
