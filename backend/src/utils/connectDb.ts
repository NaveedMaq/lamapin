import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('Mongo Db is connected');
  } catch (error) {
    console.log('MONGODB CONNECTION ERROR', error);
  }
};
