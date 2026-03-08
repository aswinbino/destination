import express from 'express';
import { createRide, searchRides } from '../controllers/rideController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createRide);
router.post('/search', protect, searchRides); // passenger searches

export default router;
