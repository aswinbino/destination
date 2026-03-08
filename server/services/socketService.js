import { detectRouteDeviation } from './aiSimulation.js';

export const configureSockets = (io) => {
    io.on('connection', (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        // Join a specific ride room for tracking
        socket.on('join_ride', (rideId) => {
            socket.join(`ride_${rideId}`);
            console.log(`User joined ride room: ride_${rideId}`);
        });

        // Real-time location updates
        socket.on('update_location', (data) => {
            // data: { rideId, lat, lng }
            io.to(`ride_${data.rideId}`).emit('location_updated', data);

            // Simulate route deviation AI logic
            const isDeviated = detectRouteDeviation([], [data.lat, data.lng]);
            if (isDeviated) {
                io.to(`ride_${data.rideId}`).emit('route_deviation_alert', {
                    rideId: data.rideId,
                    message: 'AI detected a significant route deviation.'
                });
            }
        });

        // SOS Alerts
        socket.on('trigger_sos', (data) => {
            // data: { rideId, userId, lat, lng }
            io.emit('sos_alert_broadcast', data); // Alert all admins or nearby users
            console.log('SOS Triggered:', data);
        });

        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });
    });
};
