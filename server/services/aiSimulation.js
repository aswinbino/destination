// Simulating AI Trust Score and Route calculations

export const calculateTrustScoreChange = (factor, value) => {
    let change = 0;
    let reason = '';
    switch (factor) {
        case 'rating':
            change = (value - 3) * 2; // e.g., 5 star -> +4, 1 star -> -4
            reason = `Received ${value}-star rating`;
            break;
        case 'cancellation':
            change = -5;
            reason = 'Cancelled ride late';
            break;
        case 'aggressive_driving_flag':
            change = -10;
            reason = 'Flagged for aggressive driving speed/deviation';
            break;
        default:
            break;
    }
    return { change, reason };
};

export const simulateCarbonFootprintSavings = (distanceKm) => {
    // Average car emits 192g CO2 per km.
    // Pooling saves approximately 50% of that per passenger.
    return parseFloat((distanceKm * 0.192 * 0.5).toFixed(2));
};

export const detectRouteDeviation = (expectedRoute, actualLocation) => {
    // Simulated deviation detection
    const isDeviated = Math.random() > 0.95; // 5% chance to simulate deviation
    return isDeviated;
};

export const matchSmartRoute = (availableRides, requestData) => {
    // AI Simulation for Route Optimization & Matching
    return availableRides.filter(ride => {
        // In real-world, we'd use bounding boxes or geospatial queries
        // Here we simulate a high match chance
        const timeMatch = true; // simplified
        const seatsMatch = ride.seatsAvailable >= requestData.seatsRequested;
        return timeMatch && seatsMatch;
    });
};
