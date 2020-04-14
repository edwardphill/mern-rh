const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ranch = new Schema(
  {
    fields: { type: Number, required: true },
    herds: { type: [Number], required: true },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("ranches", Ranch);