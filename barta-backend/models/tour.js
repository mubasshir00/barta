const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  tour_id: {
    type: String,
    required: true,
    
  },
  duration: {
    type: Number,
    required: true,
  },
  maxGroupSize: {
    type: Number,
    // required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  ratingsAverage: {
    type: Number,
    default: 0,
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
  },
  description: {
    type: String,
  },
  imageCover: {
    type: String,
  },
  images: [String],
  created: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  secretTour: {
    type: Boolean,
    default: false,
  },
  startLocation: {
    type: {
      type: String,
      default: "Points",
      //   enum: ["Point"],
    },
    coordinates: [Number],
    address: String,
    description: String,
  },
  locations: [
    {
      type: {
        type: String,
        default: "Point",
        // enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
      description: String,
      day: Number,
    },
  ],
  guides: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Tour",tourSchema);