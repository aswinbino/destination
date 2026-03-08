import User from '../models/User.js';

// @desc Get user profile
// @route GET /api/users/profile
export const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                trustScore: user.trustScore,
                co2Saved: user.co2Saved,
                verified: user.verified,
                vehicle: user.vehicle
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    } catch (error) {
        next(error);
    }
};
