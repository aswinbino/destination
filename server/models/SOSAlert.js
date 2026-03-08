import mongoose from 'mongoose';

const sosAlertSchema = new mongoose.Schema({
    ride: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    status: { type: String, enum: ['active', 'resolved', 'false_alarm'], default: 'active' }
}, { timestamps: true });

export default mongoose.model('SOSAlert', sosAlertSchema);
