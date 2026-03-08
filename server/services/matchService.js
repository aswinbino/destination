/**
 * Project DESTINATION - AI Community Matching System
 * 
 * Weighted scoring to rank ride matches:
 * 35% -> Same Organization (college/office)
 * 30% -> Route Cosine Similarity (mocked via distance)
 * 15% -> Proximity of pickup points
 * 15% -> Departure time alignment
 * 5%  -> Candidate's Trust Score
 * 
 * Future AI Pre-filter logic will run via Python `/match-riders` endpoint.
 * This function provides the backend sorting/ranking emulation.
 */

export const calculateMatchScore = (passenger, driver, ride) => {
    let score = 0;

    // 1. Same Organization Boost (+35%)
    if (passenger.organization !== 'None' && passenger.organization === driver.organization) {
        score += 35;
    }

    // 2. Route Cosine Similarity (+30%)
    // Assuming a mockup here where distance <= 5km gets full points
    let distanceToRoute = Math.random() * 10; // Mock distance
    if (distanceToRoute <= 2) score += 30;
    else if (distanceToRoute <= 5) score += 15;

    // 3. Proximity of pickup points (+15%)
    // Assuming same mockup approach
    if (distanceToRoute <= 1) score += 15;
    else if (distanceToRoute <= 3) score += 10;
    else if (distanceToRoute <= 5) score += 5;

    // 4. Time alignment (+15%)
    // Assuming driver Time is exact match for passenger time
    score += 15;

    // 5. Trust Score (+5%)
    score += (driver.trustScore / 100) * 5;

    // Additional Filter: EV Prioritization
    const isEVPrioritized = driver.vehicle && driver.vehicle.isEV;

    return {
        matchScore: Math.min(100, Math.round(score)),
        isEVPrioritized
    };
};
