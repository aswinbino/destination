import express from 'express';
import { requestBooking } from '../controllers/bookingController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, requestBooking);

export default router;
