import mongoose, { Document, Schema } from 'mongoose';

interface IService extends Document {
    title: string;
    description: string;
    price: number;
    image: string;
}

const ServiceSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
