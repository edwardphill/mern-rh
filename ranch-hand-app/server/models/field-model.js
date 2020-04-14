const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Field = new Schema(
  {
    fence: { type: String, required: true },
    draggedDate: { type: Date, required: true },
    daysGraced: { type: Number, required: true },
    acreage: { type: Number, required: true },
    lyme: { type: Date, required: true },
    fertilized: { type: Date, required: true },
    hayed: { type: Date, required: true },
    bales: { type: Number, required: true },
    herd: {type: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("fields", Field);
