import mongoose from 'mongoose';

const paymentTransactionSchema = new mongoose.Schema({
    booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    status: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' },
    paymentMethod: { type: String, enum: ['card', 'wallet', 'cash', 'upi'], default: 'upi' },
    transactionId: { type: String },
    // 70/27/3 Business Logic Revenue Split
    revenueSplit: {
        driverShare: { type: Number, required: true }, // 70%
        opsShare: { type: Number, required: true },    // 27%
        platformFee: { type: Number, required: true }  // 3%
    }
}, { timestamps: true });

export default mongoose.model('PaymentTransaction', paymentTransactionSchema);
