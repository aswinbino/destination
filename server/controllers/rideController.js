import Ride from '../models/Ride.js';
import { matchSmartRoute, simulateCarbonFootprintSavings } from '../services/aiSimulation.js';

// @desc Create a ride
// @route POST /api/rides
export const createRide = async (req, res, next) => {
    try {
        const { startLocation, endLocation, startTime, seatsAvailable, costPerSeat, isTrustedCircleOnly, allowedGender, distance } = req.body;

        const co2SavingsEstimate = simulateCarbonFootprintSavings(distance);

        const ride = await Ride.create({
            driver: req.user._id,
            startLocation,
            endLocation,
            startTime,
            seatsAvailable,
            costPerSeat,
            isTrustedCircleOnly,
            allowedGender,
            distance,
            co2SavingsEstimate
        });

        res.status(201).json(ride);
    } catch (error) {
        next(error);
    }
};

// @desc Search rides
// @route POST /api/rides/search
export const searchRides = async (req, res, next) => {
    try {
        const { startCoordinates, endCoordinates, startTime, seatsRequested } = req.body;

        // In real app, we'd do geospatial queries. Here we just get pending rides
        const availableRides = await Ride.find({ status: 'pending' }).populate('driver', 'name trustScore');

        const matchedRides = matchSmartRoute(availableRides, { seatsRequested });

        res.json(matchedRides);
    } catch (error) {
        next(error);
    }
};
