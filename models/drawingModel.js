const mongoose = require("mongoose");

const drawingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A drawing must have a title"],
      unique: true,
      trim: true,
      maxlength: [
        40,
        "A drawing title must have less or equal then 40 characters",
      ],
      
    },
    description: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    lines: {
      type: Array,
      default: [],
    },
    shapes: {
      type: Array,
      default: [],
    },
    textAnnotations: {
      type: Array,
      default: [],
    },
    
    // user: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "User",
    //   required: [true, "A drawing must belong to a user"],
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Drawing = mongoose.model("Drawing", drawingSchema);

module.exports = Drawing;
