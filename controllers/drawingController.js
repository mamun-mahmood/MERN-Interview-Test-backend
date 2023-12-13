const Drawing = require("../models/drawingModel");
const createDrawing = async (req, res) => {
  const { lines, shapes, textAnnotations } = req.body || {};
  if (!lines && !shapes && !textAnnotations) {
    res
      .send({
        message:
          "A drawing must have at least one line, shape or text annotation",
        success: false,
      })
      .status(400);
  }
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
  try {
    const drawings = await Drawing.find();
    res.send({
      message: "Drawings fetched successfully",
      data: drawings,
    });
  } catch (err) {
    res.send({
      message: err.message,
    });
  }
};

const getDrawingById = async (req, res) => {
  try {
    const drawing = await Drawing.findById(req.params.id);
    res.send({
      message: "Drawing fetched successfully",
      data: drawing,
    });
  }
  catch (err) {
    res.send({
      message: err.message,
    });
  }
};

const updateDrawing = async (req, res) => {};

const deleteDrawing = async (req, res) => {};

module.exports = {
  createDrawing,
  getAllDrawings,
  getDrawingById,
  updateDrawing,
  deleteDrawing,
};
