const Drawing = require("../models/drawingModel");
const createDrawing = async (req, res) => {
  try {
    const newDrawing = await Drawing.create(req.body);
    res
      .send({
        message: "Drawing created successfully",
        data: newDrawing,
      })
      .status(201);
  } catch (err) {
    res
      .send({
        message: err.message,
      })
      .status(400);
  }
};

const getAllDrawings = async (req, res) => {
  res
    .send({
      message: "getAllDrawings",
    })
    .status(200);
};

const getDrawingById = async (req, res) => {};

const updateDrawing = async (req, res) => {};

const deleteDrawing = async (req, res) => {};

module.exports = {
  createDrawing,
  getAllDrawings,
  getDrawingById,
  updateDrawing,
  deleteDrawing,
};
