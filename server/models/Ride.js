import mongoose from 'mongoose';

const rideSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startLocation: {
        address: { type: String, required: true },
        coordinates: { type: [Number], required: true } // [lng, lat]
    },
    endLocation: {
        address: { type: String, required: true },
        coordinates: { type: [Number], required: true }
    },
    startTime: { type: Date, required: true },
    seatsAvailable: { type: Number, required: true },
    costPerSeat: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'active', 'completed', 'cancelled'], default: 'pending' },
    isTrustedCircleOnly: { type: Boolean, default: false },
    allowedGender: { type: String, enum: ['any', 'male', 'female'], default: 'any' },
    distance: { type: Number }, // in km
    co2SavingsEstimate: { type: Number } // in kg
}, { timestamps: true });

export default mongoose.model('Ride', rideSchema);
