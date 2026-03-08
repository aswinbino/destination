import Booking from '../models/Booking.js';
import Ride from '../models/Ride.js';

// @desc Request a booking
// @route POST /api/bookings
export const requestBooking = async (req, res, next) => {
    try {
        const { rideId, pickupLocation, dropLocation, seatsBooked } = req.body;

        const ride = await Ride.findById(rideId);
        if (!ride) {
            res.status(404);
            throw new Error('Ride not found');
        }

        const totalCost = ride.costPerSeat * seatsBooked;

        const booking = await Booking.create({
            ride: rideId,
            passenger: req.user._id,
            pickupLocation,
            dropLocation,
            seatsBooked,
            totalCost
        });

        res.status(201).json(booking);
    } catch (error) {
        next(error);
    }
};
