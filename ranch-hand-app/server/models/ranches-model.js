const mongoose = require('mongoose');

const Field = require('./field-model');
const Herd = require('./herd-model');

const Schema = mongoose.Schema;

const Ranch = new Schema(
  {
    name: { type: String, required: true },
    // ranchAdmin: { type: mongoose.SchemaTypes.ObjectId, required: true },
    // ranchHands: {
    //   type: [mongoose.SchemaTypes.ObjectId],
    //   default: [],
    // },
    fields: { type: [Field], default: [] },
    herds: { type: [Herd], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ranches', Ranch);
