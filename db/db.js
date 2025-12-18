import mongoose from 'mongoose';
export const db = () => {
    mongoose.connect(process.env.MONGO_DB_URL).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}