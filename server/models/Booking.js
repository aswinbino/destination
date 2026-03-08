import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    ride: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride', required: true },
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pickupLocation: {
        address: String,
        coordinates: [Number]
    },
    dropLocation: {
        address: String,
        coordinates: [Number]
    },
    seatsBooked: { type: Number, default: 1 },
    totalCost: { type: Number, required: true },
    status: { type: String, enum: ['requested', 'approved', 'rejected', 'completed', 'cancelled'], default: 'requested' }
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
