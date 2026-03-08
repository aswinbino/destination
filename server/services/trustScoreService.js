/**
 * Project DESTINATION - AI Trust Score System
 * 
 * Formula (Exponential Moving Average):
 * newScore = (0.3 × rawScore) + (0.7 × previousScore)
 */

export const calculateNewTrustScore = (previousScore, rideDetails) => {
    // rawScore = 50% punctuality + 35% average star rating + 15% base - cancellations + safety bonus

    // Simulate punctuality score (out of 100) -> 50% weight
    const punctualityScore = rideDetails.wasOnTime ? 100 * 0.50 : 30 * 0.50;

    // Simulate star rating score (out of 100) -> 35% weight
    // e.g. 5 stars = 100, 4 stars = 80
    const ratingScore = (rideDetails.rating / 5) * 100 * 0.35;

    const baseScore = 100 * 0.15; // 15% base

    let rawScore = punctualityScore + ratingScore + baseScore;

    // Apply penalties/bonuses
    if (rideDetails.cancelledLate) rawScore -= 30; // -30 pts for late cancellation
    if (rideDetails.noSafetyAlerts) rawScore += 5; // +5 safety bonus

    // Cap raw score between 0 and 100
    rawScore = Math.max(0, Math.min(100, rawScore));

    // Exponential Moving Average
    const newScore = (0.3 * rawScore) + (0.7 * previousScore);

    return {
        newScore: Math.round(newScore),
        rawCalculated: Math.round(rawScore),
        delta: Math.round(newScore - previousScore)
    };
};
