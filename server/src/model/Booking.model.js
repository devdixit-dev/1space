import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  propertyID: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true
  }],
  userID: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  }
});

const Booking = mongoose.model('Booking', BookingSchema);

export default Booking;