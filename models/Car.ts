import { Schema, model, models } from 'mongoose';

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    images: [String],
    videos: [String],
    description: String,
});

const Car = models.Car || model('Car', carSchema);

export default Car;
