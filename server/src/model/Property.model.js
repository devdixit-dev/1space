import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true
  },
  propertyID: {
    type: String,
    required: true,
    unique: true
  },
  propertyLocation: {
    type: String,
    required: true
  },
  propertyDesc: {
    type: String,
    required: true
  },
  propertySize: {
    type: String,
    required: true
  },
  propertyPrice: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    required: true
  },
  propertyBuyers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Property = mongoose.model('Property', PropertySchema);

export default Property;