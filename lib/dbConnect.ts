import mongoose from 'mongoose';

const connectDb = async () => {
    if (mongoose.connections[0].readyState) return;

    await mongoose.connect(process.env.MONGODB_URI as string, {
        //@ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default connectDb;
