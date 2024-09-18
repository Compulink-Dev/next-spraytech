import mongoose, { Document, Schema } from 'mongoose';

interface IAppointment extends Document {
    customerName: string;
    service: string;
    date: Date;
    time: string;
}

const AppointmentSchema: Schema = new Schema({
    customerName: { type: String, required: true },
    service: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }
});

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);
