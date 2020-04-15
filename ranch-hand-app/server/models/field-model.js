const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    name: { type: String, required: true },
    time: { type: [String], required: true },
    lastRolled: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movies", Movie);
