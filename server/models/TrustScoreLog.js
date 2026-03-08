import mongoose from 'mongoose';

const trustScoreLogSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    change: { type: Number, required: true }, // positive or negative
    reason: { type: String, required: true },
    relatedRide: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride' }
}, { timestamps: true });

export default mongoose.model('TrustScoreLog', trustScoreLogSchema);
