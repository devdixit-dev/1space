import mongoose from "mongoose";

const BlockedBookingSchema = new mongoose.Schema({
  bookingID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  }
});

const BlockedBooking = mongoose.model('BlockedBooking', BlockedBookingSchema);

export default BlockedBooking;