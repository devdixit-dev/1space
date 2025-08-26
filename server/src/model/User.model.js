import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    minLength: [3, 'You should have atleast 3 characters in your first name'],
    required: true,
  },
  lastname: {
    type: String,
    minLength: [3, 'You should have atleast 3 characters in your last name'],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: {
    type: String,
    minLength: [10, 'You should have 10 numbers in your phone number'],
    required: true,
  },
  details: {
    type: String,
    maxLength: [100, 'Your additional details has maximum limit of 100 words']
  },
  bookedProperty: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property'
  }],
  isBookingConfirmed: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', UserSchema);

export default User;