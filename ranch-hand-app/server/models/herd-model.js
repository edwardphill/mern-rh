const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Herd = new Schema(
  {
    cattle: { type: Number, required: true },
    males: { type: [Number], required: true },
    females: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("herds", Herd);