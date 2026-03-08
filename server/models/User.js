import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ['passenger', 'driver', 'admin'], default: 'passenger' },
    trustScore: { type: Number, default: 100 },
    verified: { type: Boolean, default: false },
    co2Saved: { type: Number, default: 0 },
    organization: { type: String, default: 'None' },
    faceEncoding: { type: [Number] }, // 128-d vector for face verification
    vehicle: {
        make: String,
        model: String,
        plate: String,
        color: String,
        capacity: Number,
        isEV: { type: Boolean, default: false } // Prioritize Electric Vehicles
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);
