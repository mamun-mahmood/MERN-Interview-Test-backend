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
      minlength: [
        10,
        "A drawing title must have more or equal then 10 characters",
      ],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "A drawing must have a description"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    drawing: {
      type: String,
      required: [true, "A drawing must have a drawing"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A drawing must belong to a user"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Drawing = mongoose.model("Drawing", drawingSchema);

module.exports = Drawing;
