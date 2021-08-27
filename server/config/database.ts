
import mongoose from 'mongoose';

const URI = process.env.MONGODB_URL;


export const connectDB = () => {
    mongoose.connect(`${URI}`, {
        socketTimeoutMS: 0,
        keepAlive: true,
    }, err => {
        if (err) throw err;
        console.log('DB connection successful!')
    })
};
