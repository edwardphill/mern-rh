// will need users, fields, and herd, start with fields

const Ranch = require("../models/ranches-model");

createRanch = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a ranch",
    });
  }

  const ranch = new Ranch(body);

  if (!ranch) {
    return res.status(400).json({ success: false, error: err });
  }

  ranch
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: ranch._id,
        message: "Ranch created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Ranch not created!",
      });
    });
};

updateRanch = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Ranch.findOne({ _id: req.params.id }, (err, ranch) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Ranch not found!",
      });
    }
    ranch.fields = body.fields;
    ranch.herds = body.herds;
    
    ranch
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: ranch._id,
          message: "Ranch updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Ranch not updated!",
        });
      });
  });
};

deleteRanch = async (req, res) => {
  await Ranch.findOneAndDelete({ _id: req.params.id }, (err, ranch) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!ranch) {
      return res.status(404).json({ success: false, error: `Ranch not found` });
    }

    return res.status(200).json({ success: true, data: ranch });
  }).catch((err) => console.log(err));
};

getRanchById = async (req, res) => {
  await Ranch.findOne({ _id: req.params.id }, (err, ranch) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!ranch) {
      return res.status(404).json({ success: false, error: `Ranch not found` });
    }
    return res.status(200).json({ success: true, data: ranch });
  }).catch((err) => console.log(err));
};

getRanches = async (req, res) => {
  await Ranch.find({}, (err, ranches) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!ranches.length) {
      return res.status(404).json({ success: false, error: `Ranch not found` });
    }
    return res.status(200).json({ success: true, data: ranches });
  }).catch((err) => console.log(err));
};

module.exports = {
  createRanch,
  updateRanch,
  deleteRanch,
  getRanches,
  getRanchById,
};
